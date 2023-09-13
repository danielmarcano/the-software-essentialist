import { User } from "../models";

export interface UserRepository {
  createUser(userData: Omit<User, 'id'>): Promise<User | null>;

  findUserByQuery(userData: Partial<User>): Promise<User | null>;
}
