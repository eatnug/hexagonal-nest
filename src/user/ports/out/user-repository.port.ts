// user-repository.port.ts

import { User } from '../../domain/user.entity';

export interface UserRepositoryPort {
  save(user: User): Promise<User>;
  findAll(): Promise<Array<User>>;
}

export const USER_REPOSITORY_PORT = 'USER_REPOSITORY_PORT';
