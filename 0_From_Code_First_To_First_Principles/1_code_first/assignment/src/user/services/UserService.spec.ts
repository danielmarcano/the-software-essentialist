import { UserError } from '../errors';
import { PrismaUserRepository } from '../repositories/PrismaUserRepository';
import UserService from './UserService';
import { User } from '../models';

jest.mock('../repositories/PrismaUserRepository');

const mockCreateUser = jest.fn();
PrismaUserRepository.prototype.createUser = mockCreateUser;

const mockFindUserByQuery = jest.fn();
PrismaUserRepository.prototype.findUserByQuery = mockFindUserByQuery;

describe('UserService', () => {
  afterEach(() => {
    jest.clearAllMocks();
  })

  describe('createUser', () => {
    it('does not create a user if the email matches an existing one', () => {
      const newUser = {
        email: 'new@test.com',
      } as User;

      mockFindUserByQuery.mockReturnValue({ email: 'new@test.com' });

      const userService = new UserService(new PrismaUserRepository());

      expect(() => userService.createUser(newUser)).rejects.toThrow(UserError.EMAIL_ALREADY_IN_USE);
    });

    it('does not create a user if the username matches an existing one', () => {
      const newUser = {
        email: 'new@test.com',
        username: 'username',
      } as User;

      mockFindUserByQuery.mockReturnValue({ email: 'other@test.com', username: 'username' });

      const userService = new UserService(new PrismaUserRepository());

      expect(() => userService.createUser(newUser)).rejects.toThrow(UserError.USERNAME_ALREADY_TAKEN);
    });

    it('does not create a user if the data sent is invalid', async () => {
      const newUser: Omit<User, 'id' | 'password'> = {
        email: 'new@test.com',
        username: 'new-username',
        // @ts-expect-error firstName is set to number for the test purposes
        firstName: 5444,
        // @ts-expect-error lastName is set to number for the test purposes
        lastName: 123
      };

      mockFindUserByQuery.mockReturnValue(null);

      mockCreateUser.mockReturnValue(null);

      const userRepository = await new UserService(new PrismaUserRepository());

      expect(() => userRepository.createUser(newUser)).rejects.toThrow();
    });

    it('creates a user successfully if the data sent is valid', async () => {
      const newUser: Omit<User, 'id' | 'password'> = {
        email: 'new@test.com',
        username: 'new-username',
        firstName: 'Jane',
        lastName: 'Doe'
      };

      mockFindUserByQuery.mockReturnValue(null);

      mockCreateUser.mockReturnValue({ ...newUser, id: '1' });

      const result = await new UserService(new PrismaUserRepository()).createUser(newUser);

      expect(result).toMatchObject({ ...newUser, id: '1' });
    });
  })
})
