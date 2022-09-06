import axios from 'axios';

const login = async (payload) => {
    const response = await axios.post(`https://fakestoreapi.com/auth/login`, { ...payload });
    return response.data;   
};

export default login;