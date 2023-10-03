import { UserError } from '../errors';
import { PrismaUserRepository } from '../repositories/PrismaUserRepository';
import UserService from './UserService';
import { User } from '../models';

jest.mock('../repositories/PrismaUserRepository');

const mockCreateUser = jest.fn();
PrismaUserRepository.prototype.createUser = mockCreateUser;

const mockFindUserByAnyQueryProperty = jest.fn();
PrismaUserRepository.prototype.findUserByAnyQueryProperty = mockFindUserByAnyQueryProperty;

const mockUpdateUser = jest.fn();
PrismaUserRepository.prototype.updateUser = mockUpdateUser;

describe('UserService', () => {
  afterEach(() => {
    jest.clearAllMocks();
  })

  describe('createUser', () => {
    it('does not create a user if the email matches an existing one', () => {
      const newUser = {
        email: 'new@test.com',
      } as User;

      mockFindUserByAnyQueryProperty.mockReturnValue({ email: 'new@test.com' });

      const userService = new UserService(new PrismaUserRepository());

      expect(() => userService.createUser(newUser)).rejects.toThrow(UserError.EMAIL_ALREADY_IN_USE);
    });

    it('does not create a user if the username matches an existing one', () => {
      const newUser = {
        email: 'new@test.com',
        username: 'username',
      } as User;

      mockFindUserByAnyQueryProperty.mockReturnValue({ email: 'other@test.com', username: 'username' });

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

      mockFindUserByAnyQueryProperty.mockReturnValue(null);

      mockCreateUser.mockReturnValue(null);

      const userRepository = await new UserService(new PrismaUserRepository());

      expect(() => userRepository.createUser(newUser)).rejects.toThrow(UserError.VALIDATION_ERROR);
    });

    it('creates a user successfully if the data sent is valid', async () => {
      const newUser: Omit<User, 'id' | 'password'> = {
        email: 'new@test.com',
        username: 'new-username',
        firstName: 'Jane',
        lastName: 'Doe'
      };

      mockFindUserByAnyQueryProperty.mockReturnValue(null);

      mockCreateUser.mockReturnValue({ ...newUser, id: '1' });

      const result = await new UserService(new PrismaUserRepository()).createUser(newUser);

      expect(result).toMatchObject({ ...newUser, id: '1' });
    });
  });

  describe('updateUser', () => {
    it('does not update a user if it cannot find it', () => {
      const updatedUser = {
        id: 1,
        email: 'new@test.com',
      } as User;

      mockFindUserByAnyQueryProperty.mockReturnValue(null);

      const userService = new UserService(new PrismaUserRepository());

      expect(() => userService.updateUser(updatedUser)).rejects.toThrow(UserError.USER_NOT_FOUND);
    });

    it('does not update a user if the new email matches an existing one', () => {
      const updatedUser = {
        id: 1,
        email: 'new@test.com',
        username: 'username',
      } as User;

      mockFindUserByAnyQueryProperty.mockReturnValue({ id: 2, email: 'new@test.com', username: 'other-username' });

      const userService = new UserService(new PrismaUserRepository());

      expect(() => userService.updateUser(updatedUser)).rejects.toThrow(UserError.EMAIL_ALREADY_IN_USE);
    });

    it('does not update a user if the new username matches an existing one', () => {
      const updatedUser = {
        id: 1,
        email: 'old@test.com',
        username: 'new-username',
      } as User;

      mockFindUserByAnyQueryProperty.mockReturnValue({ id: 2, username: 'new-username' });

      const userService = new UserService(new PrismaUserRepository());

      expect(() => userService.updateUser(updatedUser)).rejects.toThrow(UserError.USERNAME_ALREADY_TAKEN);
    });

    it('does not update a user if the data sent is invalid', async () => {
      const updatedUser: User = {
        id: 1,
        email: 'new@test.com',
        username: 'new-username',
        // @ts-expect-error
        firstName: 5444,
        // @ts-expect-error lastName is set to number for the test purposes
        lastName: 123,
        password: 'password',
      };

      mockFindUserByAnyQueryProperty.mockReturnValue({ id: 1 });

      mockUpdateUser.mockReturnValue(null);

      const userRepository = await new UserService(new PrismaUserRepository());

      expect(() => userRepository.updateUser(updatedUser)).rejects.toThrow(UserError.VALIDATION_ERROR);
    });

    it('updates a user successfully if the data sent is valid', async () => {
      const updatedUser = {
        id: 1,
        email: 'new@test.com',
        username: 'new-username',
        firstName: 'Jane',
        lastName: 'Doe',
      } as User;

      mockFindUserByAnyQueryProperty.mockReturnValue({ ...updatedUser, email: 'old@test.com', username: 'old-username' });

      mockUpdateUser.mockReturnValue(updatedUser);

      const result = await new UserService(new PrismaUserRepository()).updateUser(updatedUser);

      expect(result).toMatchObject(updatedUser);
    });
  });

  describe('getUserByEmail', () => {
    it('does not return a user if it cannot find it', () => {
      const email = 'daniel@test.com';

      mockFindUserByAnyQueryProperty.mockReturnValue(null);

      const userService = new UserService(new PrismaUserRepository());

      expect(() => userService.getUserByEmail(email)).rejects.toThrow(UserError.USER_NOT_FOUND);
    });

    it('gets a user successfully if the email sent matches an existing user', async () => {
      const email = 'daniel@test.com';

      const foundUser = {
        id: 1,
        email,
      } as User;

      mockFindUserByAnyQueryProperty.mockReturnValue(foundUser);

      const result = await new UserService(new PrismaUserRepository()).getUserByEmail(email);

      expect(result).toMatchObject(foundUser);
    });
  });
});
