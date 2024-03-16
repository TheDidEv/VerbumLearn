import axiosInstance from "../api/axiosInstance";

type getQuizType = {
    userId: string;
    CollName: string
}

const path = 'quiz';

export const getQuiz = async (data: getQuizType) => {
    return await axiosInstance.get(`${path}/getQuiz`, { data });
}

export const updateWord = async (wordId: string, answer: boolean) => {
    return await axiosInstance.put(`${path}/updateQuizData`, { wordId, answer });
}