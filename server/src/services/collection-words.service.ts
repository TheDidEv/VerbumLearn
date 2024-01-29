import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default class CollectionWords {
    static async createCollection(nameCollection: string, findToken: string) {
        const userIDByToken = await prisma.tokenModels.findFirst({
            where: { RefreshToken: findToken }
        });

        if (!userIDByToken) {
            return new Error('User not login');
        }

        const newColelction = await prisma.userCollections.create({
            data: {
                Name: nameCollection,
                UserId: userIDByToken.UserId
            }
        });
        return newColelction;
    }

    static async updateCollection(id: string, newName: string) {
        const findCollection = await prisma.userCollections.findFirst({
            where: { Id: id }
        });

        if (!findCollection) {
            return new Error('Collection not login');
        }

        const newColelction = await prisma.userCollections.update({
            where: { Id: id },
            data: { Name: newName }
        });
        return newColelction;
    }

    static async getAllCollections(token: string) {
        const userIDByToken = await prisma.tokenModels.findFirst({
            where: { RefreshToken: token }
        });

        if (!userIDByToken) {
            return new Error('User not login');
        }

        const allCollections = await prisma.userCollections.findMany({
            where: { UserId: userIDByToken.UserId }
        });
        return allCollections;
    }

    static async deleteCollection(id: string) {
        const collection = await prisma.userCollections.delete({
            where: { Id: id }
        });
        return collection;
    }
}