import { axiosInstance } from "../helper/axios-config";

const getMedias = () => {
    return axiosInstance.get('media', {
        headers: {
            'Content-type': 'application/json'
        }
    });
};

const createMedias = (data) => {
    return axiosInstance.post('media', data, {
        headers: {
            'Content-type': 'application/json'
        }
    });
}

const updateMedias = (mediaId, data) => {
    return axiosInstance.put(`media/${mediaId}`, data, {
        headers: {
            'Content-type': 'application/json'
        }
    });
};


export {
    getMedias, createMedias, updateMedias
};