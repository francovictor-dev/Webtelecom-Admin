import axios from "axios";

//api para criar uma conexão
const api = axios.create({
    //baseURL: 'http://localhost:3333'
    baseURL: 'https://webeirelitelecom.com/api'
});

export default api;