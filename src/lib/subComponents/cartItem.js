import React from "react";
import { useGetProductDetails } from "../hooks/useProducts";
import { ErrMap } from "./errMap";
import { Loading } from "./loading";

export const CartItem = ({ item }, index) => {

    const id = item.productId;
    const { errorProduct, loading, product } = useGetProductDetails(id);

    return (
        <>
            {
                loading ?
                (<Loading show = { loading } />):
                (
                    !errorProduct?
                    (
                        <section className="cart-product-detail">
                            <div className="details cart-container" key={index}>
                                <div className="left image-container">
                                    <div className="main">
                                        <img src={product.image} alt={product.title} />
                                    </div>
                                </div>
                                <div className="right">
                                    <h1>{product.title}</h1>
                                    <h3 style={{ textTransform: 'capitalize' }}>{product.category}</h3>
                                    <form className="form">
                                        <input type="number" min="1" max="30" readOnly value={item.quantity} />
                                    </form>
                                    <button disabled className="btn btn-danger">Remove</button>
                                    <div className="price">${product.price * item.quantity}</div>
                                </div>
                            </div>
                        </section>
                    ) :
                    (<ErrMap err={errorProduct} />)
                )
            }
        </>
    );
};