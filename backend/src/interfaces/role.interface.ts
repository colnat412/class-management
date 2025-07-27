import { IBaseEntity } from './base.interface';

export class IRole extends IBaseEntity {
  name!: string;
  description?: string;
}
