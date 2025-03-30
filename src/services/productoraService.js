import { axiosInstance } from "../helper/axios-config";

const getProductoras = () => {
    return axiosInstance.get('productora', {
        header: {
            'Content-type': 'application/json'
        }
    });
}

const createProductoras = (data) => {
    return axiosInstance.post('productora', data, {
        header: {
            'Content-type': 'application/json'
        }
    });
}

const updateProductoras = (productoraId, data) => {
    return axiosInstance.put(`productora/${productoraId}`, data, {
        header: {
            'Content-type': 'application/json'
        }
    });
}


export {
    getProductoras, createProductoras, updateProductoras
}