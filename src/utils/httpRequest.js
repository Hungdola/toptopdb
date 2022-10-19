import axios from 'axios';

const httpRequest = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
});

export const get = async (path, options = {}) => {
    //trước hàm có từ async thì hàm này sẽ trả về 1 promise
    const response = await httpRequest.get(path, options);
    return response.data;
};

export default httpRequest;
