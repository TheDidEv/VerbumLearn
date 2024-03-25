import axiosInstance from "../api/axiosInstance";

const path = 'quiz';

export const getQuiz = async (userId: string, CollName: string) => {
    return await axiosInstance.post(`${path}/getQuiz`, { userId, CollName });
}

export const updateWord = async (wordId: string, answer: boolean, email: string) => {
    return await axiosInstance.put(`${path}/updateQuizData`, { wordId, answer, email });
}