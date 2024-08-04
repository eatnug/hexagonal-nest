// user.repository.impl.ts
import { Injectable } from '@nestjs/common';
import { UserRepository } from '../../ports/out/user.repository';
import { User } from '../../domain/user.entity';

@Injectable()
export class UserRepositoryImpl implements UserRepository {
  private users: User[] = [];

  async save(user: User): Promise<User> {
    this.users.push(user);
    return user;
  }

  async findAll(): Promise<Array<User>> {
    return this.users;
  }
}
