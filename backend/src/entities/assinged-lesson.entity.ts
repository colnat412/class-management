import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { IAssignedLesson } from '../interfaces';
import { BaseEntity } from './base.entity';
import { Lesson } from './lesson.entity';
import { User } from './user.entity';
import { Account } from './account.entity';

@Entity('assigned_lessons')
export class AssignedLesson
  extends BaseEntity<AssignedLesson>
  implements IAssignedLesson
{
  @Column({ type: 'boolean', default: false })
  is_done!: boolean;

  @Column({ type: 'timestamp', nullable: true })
  submitted_at!: Date;

  @Column({ type: 'timestamp', nullable: true })
  due_date!: Date;

  @Column({ type: 'int', default: 0 })
  status!: number;

  @Column({ type: 'text', nullable: true })
  note!: string;

  @ManyToOne(() => Lesson, (lesson) => lesson.assignedLessons, {
    eager: true,
    nullable: false,
  })
  @JoinColumn({ name: 'lesson_id' })
  lesson!: Lesson;

  @ManyToOne(() => Account, (account) => account.studentAssigned, {
    eager: true,
    nullable: false,
  })
  @JoinColumn({ name: 'student_id' })
  student!: Account;

  @ManyToOne(() => Account, (account) => account.instructedLessons)
  @JoinColumn({ name: 'assigned_by' })
  instructor!: Account;
}
