// user.service.spec.ts
import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';
import { User } from './user.entity';
import {
  UserRepository,
  USER_REPOSITORY_PORT,
} from '../ports/out/user.repository';

describe('UserService', () => {
  let service: UserService;
  let mockUserRepository: jest.Mocked<UserRepository>;

  beforeEach(async () => {
    mockUserRepository = {
      save: jest.fn(),
      findAll: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserService,
        {
          provide: USER_REPOSITORY_PORT,
          useValue: mockUserRepository,
        },
      ],
    }).compile();

    service = module.get<UserService>(UserService);
  });

  it('should create a user', async () => {
    const user = new User('1', 'John Doe', 'john@example.com');
    mockUserRepository.save.mockResolvedValue(user);

    const result = await service.createUser('John Doe', 'john@example.com');

    expect(result).toEqual(user);
    expect(mockUserRepository.save).toHaveBeenCalledWith(expect.any(User));
  });

  it('should get all users', async () => {
    const users = [
      new User('1', 'John Doe', 'john@example.com'),
      new User('2', 'Jane Doe', 'jane@example.com'),
    ];
    mockUserRepository.findAll.mockResolvedValue(users);

    const result = await service.getUsers();

    expect(result).toEqual(users);
    expect(mockUserRepository.findAll).toHaveBeenCalled();
  });
});
