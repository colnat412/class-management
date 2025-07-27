import { AppDataSource } from '../configs';
import { redis } from '../databases';
import { Account } from '../entities';
import { generateOTP } from '../utils';
import { sendEmailCode } from './email.service';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export class AuthService {
  private accountRepository = AppDataSource.getRepository(Account);

  async sendOtp(email: string) {
    const otp = generateOTP();
    await redis.set(`otp:${email}`, otp, { EX: 300 });
    await sendEmailCode(email, otp);
  }

  async verify(
    email: string,
    code: string
  ): Promise<Omit<Account, 'password_hash'>> {
    const savedCode = await redis.get(`otp:${email}`);
    if (savedCode !== code) {
      throw new Error('Invalid OTP');
    }
    await redis.del(`otp:${email}`);
    let account = await this.accountRepository.findOne({ where: { email } });
    if (!account) {
      account = this.accountRepository.create({ email, is_verified: true });
      await this.accountRepository.save(account);
    } else if (!account.is_verified) {
      account.is_verified = true;
      await this.accountRepository.save(account);
    }
    const { password_hash, ...accountWithoutPassword } = account;
    return accountWithoutPassword as Omit<Account, 'password_hash'>;
  }

  async setPassword(email: string, password: string) {
    if (!password || password.length < 6) {
      throw new Error('Password must be at least 6 characters long');
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const account = await this.accountRepository.findOne({ where: { email } });
    if (!account) {
      throw new Error('Account not found');
    }
    account.password_hash = hashedPassword;
    await this.accountRepository.save(account);
    return account;
  }

  async login(email: string, password: string): Promise<{ token: string }> {
    const account = await this.accountRepository.findOne({ where: { email } });
    if (!account || !account.is_verified) {
      throw new Error('Account not found or not verified');
    }
    const isPasswordValid = await bcrypt.compare(
      password,
      account.password_hash
    );
    if (!isPasswordValid) {
      throw new Error('Invalid password');
    }
    const token = jwt.sign({ id: account.id }, process.env.JWT_SECRET!, {
      expiresIn: '1h',
    });
    return { token };
  }
}
