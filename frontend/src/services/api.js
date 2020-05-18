import axios from 'axios';

let baseURL = 'http://localhost:9000/api/';

const api = axios.create({
    baseURL
});

export default api;