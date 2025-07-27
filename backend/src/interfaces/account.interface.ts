import { IBaseEntity } from './base.interface';
import { IRole } from './role.interface';
import { IUser } from './user.interface';

export class IAccount extends IBaseEntity {
  email!: string;
  password_hash?: string;
  is_verified!: boolean;
  user!: IUser;
  role!: IRole;
}
