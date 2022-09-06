import axios from 'axios';

const getUsers = async () => {
    const response = await axios.get('https://fakestoreapi.com/users');
    return response.data;
};

const getUser = async (id) => {
    const response = await axios.get(`https://fakestoreapi.com/users/${id}`);
    return response.data;
};

const addUser = async (payload) => {
    const response = await axios.post(`https://fakestoreapi.com/users`, { ...payload });
    return response.data;
};

const updateUser = async (id, payload) => {
    const response = await axios.patch(`https://fakestoreapi.com/users/${id}`, { ...payload });
    return response.data;
};


export { addUser, updateUser, getUsers, getUser };