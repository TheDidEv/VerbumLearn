import axiosInstance from "../api/axiosInstance";

export const getAllServiceWords = async () => {
    return await axiosInstance.get('/words/getAllServiceWords', {});
}