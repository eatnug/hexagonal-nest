// user.controller.ts
import { Controller, Post, Body, Inject, Get } from '@nestjs/common';
import {
  CREATE_USER_USE_CASE,
  CreateUserUseCase,
} from '../../ports/in/create-user.use-case';
import {
  GET_USERS_USE_CASE,
  GetUsersUseCase,
} from '../../ports/in/get-users.use-case';

@Controller('users')
export class UserController {
  constructor(
    @Inject(CREATE_USER_USE_CASE)
    private readonly createUserUseCase: CreateUserUseCase,
    @Inject(GET_USERS_USE_CASE)
    private readonly getUsersUseCase: GetUsersUseCase,
  ) {}

  @Post()
  async createUser(@Body() userData: { name: string; email: string }) {
    return this.createUserUseCase.createUser(userData.name, userData.email);
  }

  @Get()
  async getUsers() {
    return this.getUsersUseCase.getUsers();
  }
}
