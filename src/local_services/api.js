import axios from 'axios'

const api = axios.create({
    baseURL: window.location.hostname,
});

export default api
