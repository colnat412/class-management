import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { ILesson } from '../interfaces';
import { BaseEntity } from './base.entity';
import { Account } from './account.entity';
import { AssignedLesson } from './assinged-lesson.entity';

@Entity('lessons')
export class Lesson extends BaseEntity<Lesson> implements ILesson {
  @Column()
  title!: string;

  @Column()
  description!: string;

  @ManyToOne(() => Account, (account) => account.lessons)
  @JoinColumn({ name: 'created_by' })
  account!: Account;

  @OneToMany(() => AssignedLesson, (assignedLesson) => assignedLesson.lesson)
  assignedLessons!: AssignedLesson[];
}
