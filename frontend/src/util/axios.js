import axios from 'axios';

const axiosConfig = axios.create({
    // baseURL: 'https://eshopee.online/api'
    baseURL: 'http://localhost:5000/api'



});

export default axiosConfig