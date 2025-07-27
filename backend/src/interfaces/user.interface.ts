import { IAccount } from './account.interface';
import { IBaseEntity } from './base.interface';

export class IUser extends IBaseEntity {
  name!: string;
  avatar_url?: string;
  bio!: string;
  account!: IAccount;
}
