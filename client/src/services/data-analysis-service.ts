import axiosInstance from "../api/axiosInstance";

const path = '/data'

export const getAllData = (userId: string) => {
    return axiosInstance.get(`/data/allData/${userId}`);
}