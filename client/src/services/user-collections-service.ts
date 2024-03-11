import axiosInstance from "../api/axiosInstance";

const collectionPath = "/collectionWords";

export const getUserCollections = async (userId: string) => {
    return await axiosInstance.get(`${collectionPath}/userCollections/${userId}`);
}

export const updateUserCollection = (id: string, newName: string) => {
    return axiosInstance.put(`${collectionPath}/update`, { id, newName });
}

export const postUserCollection = (userId: string, name: string) => {
    return axiosInstance.post(`${collectionPath}/create`, { userId, name });
}

export const deleteUserCollection = (id: string) => {
    return axiosInstance.delete(`${collectionPath}/delete/${id}`);
}