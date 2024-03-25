import axiosInstance from "../api/axiosInstance";

export const getAllServiceWords = async () => {
    return await axiosInstance.get('/words/getAllServiceWords', {});
}

export const serviceWordToUSerCollection = async (word: string, userId: string) => {
    return await axiosInstance.post('words/serviceWordToUserCat', { word, userId });
}