import axios from 'axios';

const getProducts = async () => {
    const response = await axios.get('https://fakestoreapi.com/products');
    return response.data;
};

const getCategories = async () => {
    const response = await axios.get('https://fakestoreapi.com/products/categories');
    return response.data;
};

const getProductByCategory = async (category) => {
    const response = await axios.get(`https://fakestoreapi.com/products/category/${category}`);
    return response.data;
};

const getProductDetails = async (id) => {
    const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
    return response.data;
};

export { getProducts, getCategories, getProductByCategory, getProductDetails };