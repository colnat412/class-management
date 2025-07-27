import {
  Column,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  BaseEntity as TypeORMBase,
} from 'typeorm';
import { IBaseEntity } from '../interfaces';

export abstract class BaseEntity<T> extends TypeORMBase implements IBaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @CreateDateColumn({ name: 'created_at' })
  created_at!: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updated_at!: Date;

  @Column({ default: false })
  is_deleted!: boolean;
}
