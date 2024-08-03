// create-user.use-case.ts

import { User } from '../../domain/user.entity';

export interface GetUsersUseCase {
  getUsers(): Promise<Array<User>>;
}

export const GET_USERS_USE_CASE = 'GET_USERS_USE_CASE';
