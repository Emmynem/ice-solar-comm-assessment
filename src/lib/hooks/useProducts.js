import { useEffect, useState } from "react";
import { getProducts, getCategories, getProductByCategory, getProductDetails } from "../api/";

const useGetProducts = () => {

    const [products, setProducts] = useState([]);
    const [errorProducts, setErrorProducts] = useState(null);
    const [loading, setLoading] = useState(true);

    const productsRes = getProducts();

    useEffect(() => {
        productsRes.then(res => {
            setLoading(false);
            setProducts(res);
        }).catch(err => {
            const error = `${err.message}`;
            setErrorProducts(error);
            setLoading(false);
        })

    }, []);

    return { products, loading, errorProducts };
};

const useGetCategories = () => {

    const [categories, setCategories] = useState([]);
    const [errorCategories, setErrorCategories] = useState(null);
    const [loading, setLoading] = useState(true);

    const categoriesRes = getCategories();

    useEffect(() => {
        categoriesRes.then(res => {
            setLoading(false);
            setCategories(res);
        }).catch(err => {
            const error = `${err.message}`;
            setErrorCategories(error);
            setLoading(false);
        })

    }, []);

    return { categories, loading, errorCategories };
};

const useGetProductByCategory = (category) => {

    const [products, setProducts] = useState([]);
    const [errorProducts, setErrorProducts] = useState(null);
    const [loading, setLoading] = useState(true);

    const productsRes = getProductByCategory(category);

    useEffect(() => {
        productsRes.then(res => {
            setLoading(false);
            setProducts(res);
        }).catch(err => {
            const error = `${err.message}`;
            setErrorProducts(error);
            setLoading(false);
        })

    }, []);

    return { products, loading, errorProducts };
};

const useGetProductDetails = (id) => {

    const [product, setProduct] = useState([]);
    const [errorProduct, setErrorProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    
    const productRes = getProductDetails(id);

    useEffect(() => {
        productRes.then(res => {
            setLoading(false);
            setProduct(res);
        }).catch(err => {
            const error = `${err.message}`;
            setErrorProduct(error);
            setLoading(false);
        })

    }, []);

    return { product, loading, errorProduct };
};

export { useGetProducts, useGetCategories, useGetProductByCategory, useGetProductDetails };