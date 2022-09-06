import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useGetProductDetails } from "../hooks/useProducts";
import { AddToCart } from "./addToCartBtn";
import { ErrMap } from "./errMap";
import { Loading } from "./loading";

export const ProductDetails = () => {
    
    const { pathname } = useLocation();
    const id = parseInt(pathname.replace("/products/", ""));

    const { errorProduct, loading, product } = useGetProductDetails(id);
    const [quantity, setQuantity] = useState(1);

    const handleQuantity = (e) => { e.preventDefault(); setQuantity(e.target.value); };

    return (
        <div>
            {
                loading ?
                (<Loading show={loading} />) :
                (
                    !errorProduct ?
                    (
                        <section className="section product-detail">
                            <div className="details container">
                                <div className="left image-container">
                                    <div className="main">
                                        <img src={product.image} alt={product.title} />
                                    </div>
                                </div>
                                <div className="right">
                                    <span style={{ textTransform: 'capitalize' }}>{product.category}</span>
                                    <h1>{product.title}</h1>
                                    <div className="price">${product.price * quantity}</div>
                                    <form className="form">
                                        <input type="number" min="1" max="30" className="pl-3 pr-3" onChange={handleQuantity} value={quantity} placeholder="" />
                                        {/* <a href="cart.html" className="addcart">Add To Cart</a> */}
                                        <AddToCart productId={product.id} quantity={quantity} />
                                    </form>
                                    <h3>Details</h3>
                                    <p>{product.description}</p>
                                </div>
                            </div>
                        </section>
                    ) :
                    (<ErrMap err={errorProduct} />)
                )
            }
        </div>
    )
};
