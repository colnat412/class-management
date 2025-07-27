import { DataSource } from 'typeorm';
import { Account, AssignedLesson, Lesson, Role, User } from '../entities';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '123456',
  database: 'class_db',
  synchronize: true,
  logging: false,
  entities: [Account, User, Role, Lesson, AssignedLesson],
});
