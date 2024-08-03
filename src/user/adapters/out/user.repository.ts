// user.repository.ts
import { Injectable } from '@nestjs/common';
import { UserRepositoryPort } from '../../ports/out/user-repository.port';
import { User } from '../../domain/user.entity';

@Injectable()
export class UserRepository implements UserRepositoryPort {
  private users: User[] = [];

  async save(user: User): Promise<User> {
    this.users.push(user);
    return user;
  }

  async findAll(): Promise<Array<User>> {
    return this.users;
  }
}
