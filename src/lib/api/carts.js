import axios from 'axios';

const getUserCarts = async (id) => {
    const response = await axios.get(`https://fakestoreapi.com/carts/user/${id}`);
    return response.data;
};

const addUserCart = async (payload) => {
    const response = await axios.post(`https://fakestoreapi.com/carts`, { ...payload });
    return response.data;
};

export { getUserCarts, addUserCart };