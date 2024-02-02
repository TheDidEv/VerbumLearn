import axios from "axios";

const API_URL = 'http://localhost:5000/user';

const Registration = (Email: string, Password: string, UserName: string) => {
    return axios.post(API_URL + '/registration', {
        UserName,
        Email,
        Password,
    });
}

const LogIn = (Email: string, Password: string) => {
    return axios.post(API_URL + '/login', {
        Email,
        Password,
    })
        .then((res) => {
            if (res.data.accessToken) {
                localStorage.setItem("user", JSON.stringify(res));
            }
            return res.data;
        });
}

const LogOut = () => {
    localStorage.removeItem("user");
    return axios.post(API_URL + '/logout');
}

export default {
    Registration,
    LogIn,
    LogOut,
}