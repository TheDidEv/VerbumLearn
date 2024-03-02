import axiosInstance from "../api/axiosInstance";

const collectionPath = "/collectionWords";

export const getUserCollections = async (userId: string) => {
    return await axiosInstance.get(`${collectionPath}/userCollections/${userId}`);
}