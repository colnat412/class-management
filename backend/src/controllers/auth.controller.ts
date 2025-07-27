import { Request, Response } from 'express';
import { AuthService } from '../services';

export class AuthController {
  private authService = new AuthService();

  async sendOtp(req: Request, res: Response) {
    const { email } = req.body;
    try {
      const account = await this.authService.sendOtp(email);
      res.status(200).json({ message: 'OTP sent successfully', data: account });
    } catch (error) {
      res.status(500).json({ error: 'Failed to send OTP' });
    }
  }

  async verify(req: Request, res: Response) {
    const { email, code } = req.body;
    console.log(`Verifying OTP for email: ${email} with code: ${code}`);

    try {
      const account = await this.authService.verify(email, code);
      res
        .status(200)
        .json({ message: 'Verification successful', data: account });
    } catch (error) {
      res.status(400).json({ error: 'Invalid OTP or verification failed' });
    }
  }

  async setPassword(req: Request, res: Response) {
    const { email, password } = req.body;
    try {
      const account = await this.authService.setPassword(email, password);
      res
        .status(200)
        .json({ message: 'Password set successfully', data: account });
    } catch (error) {
      res.status(400).json({ error: 'Failed to set password' });
    }
  }

  async login(req: Request, res: Response) {
    const { email, password } = req.body;
    try {
      const { token } = await this.authService.login(email, password);
      res.status(200).json({ message: 'Login successful', token });
    } catch (error) {
      res.status(401).json({ error: 'Login failed' });
    }
  }
}
