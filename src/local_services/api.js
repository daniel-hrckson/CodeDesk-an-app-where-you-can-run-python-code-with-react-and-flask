import axios from 'axios'

const api = axios.create({
    baseURL: 'http://0.0.0.0:80',
});

export default api
