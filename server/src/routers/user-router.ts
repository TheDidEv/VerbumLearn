import { Router, Request } from "express";
import { UserController } from "../controllers/user-controller";
import { checkAuth } from "../middlewares/auth-middleware";

export const userRouter = Router();

userRouter.post('/registration', UserController.registration);

userRouter.post('/login', UserController.login);

userRouter.post('/logout', UserController.logout);

userRouter.get('/activateLink/:link', UserController.activateLink);

userRouter.get('/refresh', UserController.refresh);
