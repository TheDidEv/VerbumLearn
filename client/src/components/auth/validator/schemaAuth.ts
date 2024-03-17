import * as yup from "yup";

export const registerValidator = yup.object({
    username: yup.string().min(2).max(15).required(),
    email: yup.string().email().required(),
    password: yup.string().min(4).max(15).required(),
});