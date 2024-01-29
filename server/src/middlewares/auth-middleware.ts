import { Request, Response, NextFunction } from "express";
import TokenService from "../services/token-sevice";

const tokenService = new TokenService();

export const checkAuth = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.cookies.refreshToken;
        const userData = await tokenService.validateRefreshToken(token);

        if (!userData) {
            console.log(userData, "aaasdasd")
            return next(new Error("Unathorized error"));
        }
        next();
    }
    catch (erron) {
        return next(new Error("Unathorized error"));
    }
}