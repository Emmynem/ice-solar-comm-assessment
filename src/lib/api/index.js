import { fetchUsers, userAdded, userUpdated } from "./usersApiSlice";
import login from "./login";
import { getUsers, addUser, updateUser, getUser } from "./users";
import { addUserCart, getUserCarts } from './carts';
import { getProducts, getCategories, getProductByCategory, getProductDetails } from './products';

export { 
    fetchUsers, userAdded, userUpdated, login, getUsers, addUserCart, 
    getProducts, getCategories, getProductByCategory, getProductDetails, 
    getUserCarts, addUser, updateUser, getUser
};