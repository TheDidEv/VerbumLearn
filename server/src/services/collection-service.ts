import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default class CollectionWords {
    static async createCollection(userId: string, name: string) {
        const userData = await prisma.users.findFirst({
            where: { Id: userId }
        });

        if (!userData) {
            return new Error('User not login');
        }
        const checkCollection = await prisma.userCollections.findFirst({ where: { Name: name } });
        if (checkCollection) {
            return new Error('Collection already exist');
        }

        const newColelction = await prisma.userCollections.create({
            data: {
                Name: name,
                UserId: userData.Id
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

    static async getAllCollections(userId: string) {
        const userById = await prisma.users.findFirst({
            where: { Id: userId }
        });

        if (!userById) {
            return new Error('User not login');
        }

        const allCollections = await prisma.userCollections.findMany({
            where: { UserId: userById.Id }
        });
        return allCollections;
    }

    static async deleteCollection(id: string) {
        const findColl = await prisma.userCollections.findFirst({ where: { Id: id } });
        if (findColl?.Name !== "AllWords") {
            await prisma.intermediateWordsCollections.deleteMany({
                where: { UserColletion: id },
            });

            const collection = await prisma.userCollections.delete({
                where: { Id: id },
                include: {
                    IntermediateWWordCollection: true,
                }
            });
            return collection;
        }
        return findColl;
    }
}