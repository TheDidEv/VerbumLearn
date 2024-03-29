import axios from "axios";

// require("dotenv").config({ path: __dirname + './../../.env' });

//http://localhost:5000
//https://verbumlearnserv.onrender.com

export const BASE_URL = 'https://verbumlearnserv.onrender.com';

const axiosInstance = axios.create({
    baseURL: BASE_URL,
    withCredentials: true,
});

export default axiosInstance;