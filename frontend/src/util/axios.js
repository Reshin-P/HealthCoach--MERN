import axios from 'axios';

const axiosConfig = axios.create({
    baseURL: 'https://eshopee.online/api'


});

export default axiosConfig