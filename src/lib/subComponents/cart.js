import React from "react";
import { Loading } from "./loading";
import { ErrMap } from "./errMap";
import { useGetUserCarts } from "../hooks/useCarts";
import { CartItem } from "./cartItem";

export const CartsSubComp = () => {

    const { carts, errorCarts, loading } = useGetUserCarts();
    
    return (
        <section className="section category">
            <h2>Carts</h2>
            <div className="cat-center">
                {
                    loading ?
                    (<Loading show={loading} />) :
                    (
                        !errorCarts ?
                        (
                            <div className="container cart">
                                {
                                    carts.map((data, i) => (
                                        data.products.map((productData, i) => (
                                            <CartItem index={i} item={productData} />
                                        ))
                                    ))
                                }
                                <div className="total-price">
                                   
                                    <button className="checkout-btn">Proceed to Checkout</button>
                                </div>
                            </div>
                        ) :
                        (<ErrMap err={errorCarts} />)
                    )
                }
            </div>
        </section>
    )
};