import { Request, Response, NextFunction } from "express";
import TokenService from "../services/token-sevice";

const tokenService = new TokenService();

export const checkAuth = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.cookies.refreshToken;
        const userData = await tokenService.validateRefreshToken(token);

        if (!userData) {
            res.status(400).send("Unathorized error").redirect('http://localhost:3000/login');
            return next(new Error("Unathorized error"));
        }
        next();
    }
    catch (erron) {
        return next(new Error("Unathorized error"));
    }
}