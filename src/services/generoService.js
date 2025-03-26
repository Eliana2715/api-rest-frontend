import { axiosInstance } from "../helper/axios-config";

const getGeneros = () => {
    return axiosInstance.get('genero', {
        headers: {
            'Content-type': 'application/json'
        }
    });
}

const createGeneros = (data) => {
    return axiosInstance.post('genero', data, {
        headers: {
            'Content-type': 'application/json'
        }
    });
}

const updateGeneros = (generoId, data) => {
    return axiosInstance.put(`genero/${generoId}`, data, {
        headers: {
            'Content-type': 'application/json'
        }
    });
}


export {
    getGeneros, createGeneros, updateGeneros
}