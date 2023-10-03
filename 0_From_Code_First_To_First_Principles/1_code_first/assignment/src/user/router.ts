import { Request, Router } from 'express';
import UserController from './controllers/UserController';
import { PrismaUserRepository } from './repositories/PrismaUserRepository';
import UserService from './services/UserService';

export const router = Router();

interface UserRequest extends Request {
  userController?: UserController;
}

router.use((req: UserRequest, _, next) => {
  req.userController = new UserController(new UserService(new PrismaUserRepository()));

  next();
});

router.post('/new', (req: UserRequest, res) => req.userController?.createUser(req, res));

router.put('/edit/:userId', (req: UserRequest, res) => req.userController?.editUser(req, res));

router.get('/', (req: UserRequest, res) => req.userController?.getUserByEmail(req, res));
