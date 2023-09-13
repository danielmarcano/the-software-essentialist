import { Request, Response } from 'express';
import { UserError } from '../errors';
import UserController from './UserController';
import { PrismaUserRepository } from '../repositories/PrismaUserRepository';
import UserService from '../services/UserService';

jest.mock('../services/userService');

const mockCreateUser = jest.fn();
UserService.prototype.createUser = mockCreateUser;

const mockResponse = () => {
  const res = {} as Response;

  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);

  return res;
};

describe('UserController', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('createUser', () => {
    it('should create a user successfully', async () => {
      const req = { body: {} } as Request;
      const res = mockResponse();
      const createdUser = { id: 1, email: 'test@example.com' };

      mockCreateUser.mockResolvedValue(createdUser);

      const userController = new UserController(new UserService(new PrismaUserRepository()));

      await userController.createUser(req, res);

      expect(mockCreateUser).toHaveBeenCalledWith({});
      expect(res.status).toHaveBeenCalledWith(201);
      expect(res.json).toHaveBeenCalledWith({
        error: undefined,
        data: createdUser,
        success: true,
      });
    });
  })


  it('should handle email already in use error', async () => {
    const req = { body: {} } as Request;
    const res = mockResponse();

    mockCreateUser.mockRejectedValue(new Error(UserError.EMAIL_ALREADY_IN_USE));

    const userController = new UserController(new UserService(new PrismaUserRepository()));

    await userController.createUser(req, res);

    expect(mockCreateUser).toHaveBeenCalledWith({});
    expect(res.status).toHaveBeenCalledWith(409);
    expect(res.json).toHaveBeenCalledWith({
      error: UserError.EMAIL_ALREADY_IN_USE,
      data: undefined,
      success: false,
    });
  });

  it('should handle username already taken error', async () => {
    const req = { body: {} } as Request;
    const res = mockResponse();

    mockCreateUser.mockRejectedValue(new Error(UserError.USERNAME_ALREADY_TAKEN));

    const userController = new UserController(new UserService(new PrismaUserRepository()));

    await userController.createUser(req, res);

    expect(mockCreateUser).toHaveBeenCalledWith({});
    expect(res.status).toHaveBeenCalledWith(409);
    expect(res.json).toHaveBeenCalledWith({
      error: UserError.USERNAME_ALREADY_TAKEN,
      data: undefined,
      success: false,
    });
  });

  it('should should handle generic validation error', async () => {
    const req = { body: {} } as Request;
    const res = mockResponse();

    mockCreateUser.mockRejectedValue(new Error('Some other validation error'));

    const userController = new UserController(new UserService(new PrismaUserRepository()));

    await userController.createUser(req, res);

    expect(mockCreateUser).toHaveBeenCalledWith({});
    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({
      error: 'InternalError',
      data: undefined,
      success: false,
    });
  });
});
