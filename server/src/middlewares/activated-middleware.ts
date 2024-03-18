import { PrismaClient } from "@prisma/client";
import { Request, Response, NextFunction } from "express";

const prisma = new PrismaClient();

export const checkActivated = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { userId } = req.body;
        const userData = await prisma.users.findFirst({ where: { Id: userId } });
        if (!userData?.Activated) {
            res.status(500).send("You need activate account on your email");
            return next(new Error("Account not activate"));
        }
        next();
    } catch (error) {
        return next(new Error("Account not activate"));
    }
}