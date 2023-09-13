import { UserError } from "../errors";
import { User } from "../models";
import { UserRepository } from "../repositories/UserRepository";
import crypto from 'crypto';

class UserService {
  constructor(private userRepository: UserRepository) {}

  async createUser(userData: Omit<User, 'id' | 'password'>) {
    const { email, username } = userData;

    const existingUser = await this.userRepository.findUserByQuery({ email, username });

    if (existingUser) {
      if (existingUser.email === email) {
        throw new Error(UserError.EMAIL_ALREADY_IN_USE);
      } else if (existingUser.username === username) {
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

  private generateRandomPassword() {
    return crypto.randomUUID();
  }
}

export default UserService;
