import axios from "axios";

const axiosInstance = axios.create({
    //baseURL: 'http://localhost:4000/'
    baseURL: 'https://api-rest-backend-iud.onrender.com'
});

export{
    axiosInstance
}