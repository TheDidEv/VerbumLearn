import axios from "axios";

// require("dotenv").config({ path: __dirname + './../../.env' });

export const BASE_URL = 'https://verbumlearnserv.onrender.com'; //http://localhost:5000

const axiosInstance = axios.create({
    baseURL: BASE_URL,
    withCredentials: true,
});

export default axiosInstance;