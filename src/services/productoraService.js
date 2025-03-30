import { axiosInstance } from "../helper/axios-config";

const getProductoras = () => {
    return axiosInstance.get('productora', {
        headers: {
            'Content-type': 'application/json'
        }
    });
}

const createProductoras = (data) => {
    return axiosInstance.post('productora', data, {
        headers: {
            'Content-type': 'application/json'
        }
    });
}

const updateProductoras = (productoraId, data) => {
    return axiosInstance.put(`productora/${productoraId}`, data, {
        headers: {
            'Content-type': 'application/json'
        }
    });
}


export {
    getProductoras, createProductoras, updateProductoras
}