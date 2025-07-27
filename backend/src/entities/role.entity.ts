import { Column, Entity, OneToMany } from 'typeorm';
import { IRole } from '../interfaces';
import { BaseEntity } from './base.entity';
import { Account } from './account.entity';

@Entity('roles')
export class Role extends BaseEntity<Role> implements IRole {
  @Column({ unique: true })
  name!: string;

  @Column({ nullable: true })
  description?: string;

  @OneToMany(() => Account, (account) => account.role)
  accounts!: Account[];
}
