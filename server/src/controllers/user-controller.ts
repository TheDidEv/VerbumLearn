import { NextFunction, Request, Response } from "express";
import UserService from "../services/user-service";
import { UserType } from "../types";

export class UserController {
    static async registration(req: Request, res: Response, next: NextFunction) {
        try {
            const userData: UserType = req.body;

            const user = await UserService.registration(userData);

            res.cookie(
                'refreshToken',
                user.refreshToken,
                { maxAge: 15 * 24 * 60 * 60 * 1000, httpOnly: true }
            );
            return res.json(user).status(200);
        } catch (error) {
            next(error);
        }
    }

    static async login(req: Request, res: Response, next: NextFunction) {
        try {
            const userData = req.body;
            const user = await UserService.login(userData.Email, userData.Password);
            res.cookie(
                'refreshToken',
                user.refreshToken,
                { maxAge: 15 * 24 * 60 * 60 * 1000, httpOnly: true }
            );
            return res.json(user).redirect(process.env.CLIENT_URL + '/Rules');
        } catch (erron) {
            next(erron)
        }
    }

    static async logout(req: Request, res: Response, next: NextFunction) {
        try {
            const refreshToken = req.cookies.refreshToken;
            const token = await UserService.logout(refreshToken);
            res.clearCookie('refreshToken');
            return res.json(token).status(200);
        } catch (error) {
            next(error);
        }
    }

    static async refresh(req: Request, res: Response, next: NextFunction) {
        try {
            const refreshToken = req.cookies.refreshToken;
            const token = await UserService.refresh(refreshToken);
            res.cookie(
                'refreshToken',
                token.refreshToken,
                { maxAge: 15 * 24 * 60 * 60 * 1000, httpOnly: true }
            );
            return res.json(token);
        } catch (error) {
            next(error);
        }
    }

    static async activateLink(req: Request, res: Response, next: NextFunction) {
        try {
            const activatingLink = req.params.link;
            await UserService.activate(activatingLink);
            return res.redirect(process.env.CLIENT_URL!);
        } catch (error) {
            next(error);
        }
    }

    static async getData(req: Request, res: Response, next: NextFunction) {
        try {

        } catch (error) {

        }
    }
}
