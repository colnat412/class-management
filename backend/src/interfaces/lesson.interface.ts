import { IAccount } from './account.interface';
import { IBaseEntity } from './base.interface';

export class ILesson extends IBaseEntity {
  title!: string;
  description!: string;
  account!: IAccount;
}
