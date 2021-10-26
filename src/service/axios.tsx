import axios from 'axios'
import config from 'config'

axios.defaults.baseURL = config.service.BASE_URL; //BASE URL

axios.interceptors.request.use(function (axios_config: any) {
    axios_config.headers.token = localStorage.getItem('token')
    return axios_config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

export default axios
