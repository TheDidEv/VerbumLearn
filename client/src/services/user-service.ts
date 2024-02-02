import axios from 'axios';

const API_URL = 'http://localhost:5000/user';

//Add user ingo, data analis

const GetRefreshToken = () => {
    return axios.get(API_URL + '/refresh');
}