import { Router, Request, Response } from "express";
import { UserController } from "../controllers/user-controller";

export const userRouter = Router();

userRouter.post('/registration', UserController.registration);

userRouter.post('/login', UserController.login);

userRouter.post('/logout', UserController.logout);

userRouter.get('/activateLink/:link', UserController.activateLink);

userRouter.get('/refresh', UserController.refresh);