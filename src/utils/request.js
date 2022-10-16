import axios from 'axios';

const request = axios.create({
    baseURL: 'https://tiktok.fullstack.edu.vn/api/',
});

export const get = async (path, options = {}) => {
    //trước hàm có từ async thì hàm này sẽ trả về 1 promise
    const response = await request.get(path, options);
    return response.data;
};

export default request;
