import { IAccount } from './account.interface';
import { IBaseEntity } from './base.interface';
import { ILesson } from './lesson.interface';

export class IAssignedLesson extends IBaseEntity {
  is_done!: boolean;
  submitted_at!: Date;
  due_date!: Date;
  status!: number;
  note!: string;
  lesson!: ILesson;
  student!: IAccount;
  instructor!: IAccount;
}
