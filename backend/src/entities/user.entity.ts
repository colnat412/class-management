import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { IUser } from '../interfaces/user.interface';
import { Account } from './account.entity';
import { BaseEntity } from './base.entity';

@Entity('users')
export class User extends BaseEntity<User> implements IUser {
  @Column()
  name!: string;

  @Column({ nullable: true })
  avatar_url!: string;

  @Column({ nullable: true })
  bio!: string;

  @OneToOne(() => Account)
  @JoinColumn({ name: 'account_id' })
  account!: Account;
}
