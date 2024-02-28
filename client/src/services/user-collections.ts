import axiosInstance from "../api/axiosInstance";
import { useAppSelector } from "../hooks/redux-hooks";

const collectionPath = "/collectionWords";

export const getUserCollections = async (userId: string) => {
    return await axiosInstance.get(`${collectionPath}/userCollections/${userId}`);
}