import axiosInstance from "../api/axiosInstance";

const path = '/words'

export const getWordByCat = (catId: string) => {
    return axiosInstance.get(`${path}/getByCategory/${catId}`);
}

export const delWordById = (Id: string) => {
    return axiosInstance.delete(`${path}/deleteWord/${Id}`);
}

export const updateWordById = (id: string, word: string, translate: string) => {
    return axiosInstance.put(`${path}/editWord/${id}`, { word, translate });
}

export const postWord = (userId: string, Word: string, Translate: string, IntermediateWWordCollectionName: string) => {
    return axiosInstance.post(`${path}/addWord`, { userId, Word, Translate, IntermediateWWordCollectionName });
}

export const addCatToWord = (wordId: string, categoryName: string) => {
    return axiosInstance.post(`${path}/addCategoryToWord`, { wordId, categoryName });
}