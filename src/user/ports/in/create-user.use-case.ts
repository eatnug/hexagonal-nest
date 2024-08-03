// create-user.use-case.ts

import { User } from '../../domain/user.entity';

export interface CreateUserUseCase {
  createUser(name: string, email: string): Promise<User>;
}

export const CREATE_USER_USE_CASE = 'CREATE_USER_USE_CASE';
