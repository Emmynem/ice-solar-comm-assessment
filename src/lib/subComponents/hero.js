import React from "react";
import { useGetProducts } from "../hooks/useProducts";
import { Loading } from "./loading";
import { ErrMap } from "./errMap";

const Hero = () => {
    
    const { errorProducts, products, loading } = useGetProducts();
    
    return (
        <div className="hero">
            <div className="glide" id="glide1">
                <div className="glide__track" data-glide-el="track">
                    <ul className="glide__slides">
                        {
                            loading ?
                            (<Loading show={loading} />) :
                            (
                                !errorProducts ?
                                (
                                    products.map((data, i) => (
                                        <li className="glide__slide" key={i}>
                                            <div className="center">
                                                <div className="left">
                                                    <span style={{textTransform: 'capitalize'}}>{data.category}</span>
                                                    <h1>{data.title}</h1>
                                                    {/* <p>We deliver the best</p> */}
                                                    <a href={`/products/${data.id}`} className="hero-btn">View Product</a>
                                                </div>

                                            </div>
                                        </li>
                                    ))
                                ) :
                                (<ErrMap err= { errorProducts } />)
                            )
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
};

export default Hero;