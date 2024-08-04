// user.module.ts
import { Module } from '@nestjs/common';
import { UserController } from './adapters/in/user.controller';
import { UserService } from './domain/user.service';
import { UserRepositoryImpl } from './adapters/out/user.repository.impl';
import { CREATE_USER_USE_CASE } from './ports/in/create-user.use-case';
import { USER_REPOSITORY_PORT } from './ports/out/user.repository';
import { GET_USERS_USE_CASE } from './ports/in/get-users.use-case';

@Module({
  controllers: [UserController],
  providers: [
    {
      provide: CREATE_USER_USE_CASE,
      useClass: UserService,
    },
    {
      provide: GET_USERS_USE_CASE,
      useClass: UserService,
    },
    {
      provide: USER_REPOSITORY_PORT,
      useClass: UserRepositoryImpl,
    },
  ],
})
export class UserModule {}
