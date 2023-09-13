import { UserError } from "../errors";
import { User } from "../models";
import { UserRepository } from "../repositories/UserRepository";
import crypto from 'crypto';

type CreateUserData = Omit<User, 'id' | 'password'>;

type UpdateUserData = Pick<User, 'id'> & Partial<Omit<User, 'id'>>;

class UserService {
  constructor(private userRepository: UserRepository) {}

  async createUser(userData: CreateUserData) {
    const { email, username } = userData;

    const existingUser = await this.userRepository.findUserByAnyQueryProperty({ email, username });

    if (existingUser) {
      if (existingUser.email === email) {
        throw new Error(UserError.EMAIL_ALREADY_IN_USE);
      }

      if (existingUser.username === username) {
        throw new Error(UserError.USERNAME_ALREADY_TAKEN);
      }
    }

    const userPayload: Omit<User, 'id'> = {
      ...userData,
      password: this.generateRandomPassword(),
    }

    const user = await this.userRepository.createUser(userPayload);

    if (!user) {
      throw new Error(UserError.VALIDATION_ERROR);
    }

    const { password, ...rest } = user;

    return rest;
  }

  async updateUser(userData: UpdateUserData) {
    const { id, username, email } = userData;

    const existingUser = await this.userRepository.findUserByAnyQueryProperty({ id, username, email });

    if (!existingUser) {
      throw new Error(UserError.USER_NOT_FOUND);
    }

    if (existingUser.id !== userData.id) {
      if (userData.email === existingUser.email) {
        throw new Error(UserError.EMAIL_ALREADY_IN_USE);
      }

      if (userData.username === existingUser.username) {
        throw new Error(UserError.USERNAME_ALREADY_TAKEN);
      }
    }

    const user = await this.userRepository.updateUser(userData);

    if (!user) {
      throw new Error(UserError.VALIDATION_ERROR);
    }

    const { password, ...rest } = user;

    return rest;
  }

  private generateRandomPassword() {
    return crypto.randomUUID();
  }
}

export default UserService;
