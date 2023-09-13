import { User } from "../models";

export interface UserRepository {
  /**
   * Returns the created User or null if there is any validation error
   */
  createUser(userData: Omit<User, 'id'>): Promise<User | null>;

  /**
   * Returns the updated User or null if there is any validation error
   */
  updateUser(userData: Pick<User, 'id'> & Partial<Omit<User, 'id'>>): Promise<User | null>;

  /**
   * Find user that matches any of the given query properties
   */
  findUserByAnyQueryProperty(userData: Partial<User>): Promise<User | null>;
}
