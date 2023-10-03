import { prisma } from "../../prisma/client";
import { User } from "../models";
import { UserRepository } from "./UserRepository";

type UserQuery = {
  [K in keyof User]?: User[K];
};

export class PrismaUserRepository implements UserRepository {
  async createUser(userData: User) {
    try {
      const result = await prisma.user.create({
        data: userData,
      })

      return result;
    } catch(e) {
      // We do not need Prisma-specific validation errors for now
      return null;
    }
  }

  findUserByAnyQueryProperty(userData: Partial<User>) {
    const query = Object.entries(userData).map(([key, value]) => ({ [key]: value } as UserQuery));

    return prisma.user.findFirst({
      where: {
        OR: query
      }
    });
  }

  async updateUser(userData: User) {
    try {
      const { id, ...rest } = userData;

      const result = await prisma.user.update({
        where: {
          id,
        },
        data: rest,
      })

      return result;
    } catch(e) {
      // We do not need Prisma-specific validation errors for now
      return null;
    }
  }
}
