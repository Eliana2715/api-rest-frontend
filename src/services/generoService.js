import { axiosInstance } from "../helper/axios-config";

const getGeneros = () => {
    return axiosInstance.get('genero', {
        header: {
            'Content-type': 'application/json'
        }
    });
}

const createGeneros = (data) => {
    return axiosInstance.post('genero', data, {
        header: {
            'Content-type': 'application/json'
        }
    });
}

const updateGeneros = (generoId, data) => {
    return axiosInstance.put(`genero/${generoId}`, data, {
        header: {
            'Content-type': 'application/json'
        }
    });
}


export {
    getGeneros, createGeneros, updateGeneros
}