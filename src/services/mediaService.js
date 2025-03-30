import { axiosInstance } from "../helper/axios-config";

const getMedias = () => {
    return axiosInstance.get('media', {
        header: {
            'Content-type': 'application/json'
        }
    });
};

const createMedias = (data) => {
    return axiosInstance.post('media', data, {
        header: {
            'Content-type': 'application/json'
        }
    });
}

const updateMedias = (mediaId, data) => {
    return axiosInstance.put(`media/${mediaId}`, data, {
        header: {
            'Content-type': 'application/json'
        }
    });
};

const getMediasForId = (mediaId) => {
    return axiosInstance.get(`media/${mediaId}`, {
        header: {
            'content-type': 'application/json'
        }
    });
}

export {
    getMedias, createMedias, updateMedias, getMediasForId
};