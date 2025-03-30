import { axiosInstance } from "../helper/axios-config";

const getTipos = () => {
    return axiosInstance.get('tipo', {
        headers: {
            'Content-type': 'application/json'
        }
    });
}

const createTipos = (data) => {
    return axiosInstance.post('tipo', data, {
        headers: {
            'Content-type': 'application/json'
        }
    });
}

const updateTipos = (tipoId, data) => {
    return axiosInstance.put(`tipo/${tipoId}`, data, {
        headers: {
            'Content-type': 'application/json'
        }
    });
}


export {
    getTipos, createTipos, updateTipos
}