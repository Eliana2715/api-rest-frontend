import { axiosInstance } from "../helper/axios-config";

const getDirectors = () => {
    return axiosInstance.get('director', {
        headers: {
            'Content-type': 'application/json'
        }
    });
}

const createDirectors = (data) => {
    return axiosInstance.post('director', data, {
        headers: {
            'Content-type': 'application/json'
        }
    });
}

const updateDirectors = (directorId, data) => {
    return axiosInstance.put(`director/${directorId}`, data, {
        headers: {
            'Content-type': 'application/json'
        }
    });
}


export {
    getDirectors, createDirectors, updateDirectors
}