import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUserCarts, addUserCart } from "../api/";
import { config } from "../config";

const useGetUserCarts = () => {

    const id = config.defaultUserId;

    const [carts, setCarts] = useState([]);
    const [cartTotal, setCartTotal] = useState(0);
    const [errorCarts, setErrorCarts] = useState(null);
    const [loading, setLoading] = useState(true);

    const cartsRes = getUserCarts(id);

    useEffect(() => {
        cartsRes.then(res => {
            setLoading(false);
            setCarts(res);
            setCartTotal(res.length);
        }).catch(err => {
            const error = `${err.message}`;
            setErrorCarts(error);
            setLoading(false);
        })

    }, []);

    return { carts, cartTotal, loading, errorCarts };
};

// DO Add User Cart here

const useAddUserCart = (productId, quantity) => {
    
    // error & success prompts
    const [errorAddUserCart, setErrorAddUserCart] = useState(null);
    const [successAddUserCart, setSuccessAddUserCart] = useState(null);

    const _date = new Date();
    const dateTXT = _date.getFullYear() + "-" + ((_date.getUTCMonth() + 1) < 10 ? "0" + (_date.getUTCMonth() + 1) : (_date.getUTCMonth() + 1)) + "-" + (_date.getDate() < 10 ? "0" + _date.getDate() : _date.getDate());

    const id = config.defaultUserId;

    const navigate = useNavigate();

    // handle form submit
    const handleSubmitUserCart = (e) => {
        e.preventDefault();

        if (!productId) {
            setErrorAddUserCart("Product Id Required");
            setTimeout(function () {
                setErrorAddUserCart(null);
            }, 3000)
        }
        else if (!quantity) {
            setErrorAddUserCart("Quantity Required");
            setTimeout(function () {
                setErrorAddUserCart(null);
            }, 3000)
        }
        else if (quantity < 1 || quantity > 30) {
            setErrorAddUserCart("Invalid Quantity");
            setTimeout(function () {
                setErrorAddUserCart(null);
            }, 3000)
        }
        else {
            setErrorAddUserCart(null);

            const addUserCartRes = addUserCart({
                userId: id,
                date: dateTXT,
                products: [
                    {
                        productId,
                        quantity: parseInt(quantity)
                    }
                ]
            })

            addUserCartRes.then(res => {
                setErrorAddUserCart(null);
                setSuccessAddUserCart("Added to cart");

                setTimeout(function () {
                    setSuccessAddUserCart(null);
                    navigate("/cart");
                }, 2000)
            }).catch(err => {
                const error = `${err.response.data}`;
                setErrorAddUserCart(error);
                setTimeout(function () {
                    setErrorAddUserCart(null);
                }, 3000)
            })
        }

    };

    return {
        errorAddUserCart, successAddUserCart, handleSubmitUserCart
    };

};

export { useGetUserCarts, useAddUserCart };