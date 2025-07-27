import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
} from 'typeorm';
import { IAccount } from '../interfaces';
import { BaseEntity } from './base.entity';
import { User } from './user.entity';
import { Role } from './role.entity';
import { Lesson } from './lesson.entity';
import { AssignedLesson } from './assinged-lesson.entity';

@Entity('accounts')
export class Account extends BaseEntity<Account> implements IAccount {
  @Column({ unique: true })
  email!: string;

  @Column({ nullable: true })
  password_hash!: string;

  @Column({ default: false })
  is_verified!: boolean;

  @OneToOne(() => User, (user) => user.account)
  user!: User;

  @ManyToOne(() => Role, (role) => role.accounts)
  @JoinColumn({ name: 'role_id' })
  role!: Role;

  @OneToMany(() => Lesson, (lesson) => lesson.account)
  lessons!: Lesson[];

  @OneToMany(() => AssignedLesson, (assignedLesson) => assignedLesson.student)
  studentAssigned!: AssignedLesson[];

  @OneToMany(
    () => AssignedLesson,
    (assignedLesson) => assignedLesson.instructor
  )
  instructedLessons!: AssignedLesson[];
}
