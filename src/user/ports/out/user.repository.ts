// user.repository.ts

import { User } from '../../domain/user.entity';

export interface UserRepository {
  save(user: User): Promise<User>;
  findAll(): Promise<Array<User>>;
}

export const USER_REPOSITORY_PORT = 'USER_REPOSITORY_PORT';
