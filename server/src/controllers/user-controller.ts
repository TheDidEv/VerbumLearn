import { NextFunction, Request, Response } from "express";
import UserService from "../services/user-service";
import { UserType } from "../types";

export class UserController {
    static async registration(req: Request, res: Response, next: NextFunction) {
        try {
            const user: UserType = req.body;
            const userData = await UserService.registration(user);

            res.cookie(
                'refreshToken',
                userData.refreshToken,
                { maxAge: 15 * 24 * 60 * 60 * 1000, httpOnly: true }
            )
        } catch (error) {
            next(error);
        }
    }

    static async login(req: Request, res: Response) {

    }

    static async logout(req: Request, res: Response) {

    }

    static async refresh(req: Request, res: Response) {

    }

    static async activateLink(req: Request, res: Response) {

    }
}
