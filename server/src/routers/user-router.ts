import { Router, Request } from "express";
import { UserController } from "../controllers/user-controller";
import { checkAuth } from "../middlewares/auth-middleware";
import { body } from "express-validator";

export const userRouter = Router();

userRouter.post('/registration',
    body('Email').isEmail(),
    body('Password').isLength({ min: 4, max: 15 }),
    body('UserName').isLength({ min: 2, max: 15 }),
    UserController.registration
);

userRouter.post('/login', UserController.login);

userRouter.post('/logout', UserController.logout);

userRouter.get('/activateLink/:link', UserController.activateLink);

userRouter.get('/refresh', UserController.refresh);

userRouter.get('/getData', UserController.getData)