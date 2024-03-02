import axiosInstance from "../api/axiosInstance";

const path = '/words'

export const getWordByCat = (catId: string) => {
    return axiosInstance.get(`${path}/getByCategory/${catId}}`);
}