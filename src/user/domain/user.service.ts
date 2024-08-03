// user.service.ts
import { Injectable, Inject } from '@nestjs/common';
import { User } from './user.entity';
import { CreateUserUseCase } from '../ports/in/create-user.use-case';
import {
  UserRepositoryPort,
  USER_REPOSITORY_PORT,
} from '../ports/out/user-repository.port';
import { GetUsersUseCase } from '../ports/in/get-users.use-case';

@Injectable()
export class UserService implements CreateUserUseCase, GetUsersUseCase {
  constructor(
    @Inject(USER_REPOSITORY_PORT)
    private readonly userRepository: UserRepositoryPort,
  ) {}

  async createUser(name: string, email: string): Promise<User> {
    const user = new User(Date.now().toString(), name, email);
    return this.userRepository.save(user);
  }

  async getUsers(): Promise<Array<User>> {
    return this.userRepository.findAll();
  }
}
