import React from "react";
import { useGetProducts } from "../hooks/useProducts";
import { ErrMap } from "./errMap";
import { Loading } from "./loading";

export const Products = () => {

    const { errorProducts, products, loading } = useGetProducts();

    return (
          <section className="section all-products">
            <div className="top container">
                <h1>All Products</h1>
            </div>
            <div className="product-center container">
                {
                    loading ? 
                    (<Loading show={loading} />) :
                    (
                        !errorProducts ?
                        (
                            products.map((data, i) => (
                                <div className="product-item" key={i}>
                                    <div className="overlay">
                                        <a href={`/products/${data.id}`} className="product-thumb">
                                            <img src={data.image} alt={data.title} />
                                        </a>
                                    </div>
                                    <div className="product-info">
                                        <span style={{ textTransform: 'capitalize' }}>{data.category}</span>
                                        <a href={`/products/${data.id}`}>{data.title}</a>
                                        <h4>$ {data.price}</h4>
                                    </div>

                                    <ul className="icons">
                                        <li><a href={`/products/${data.id}`}><i className="bx bx-expand"></i></a></li>
                                    </ul>
                                </div>
                            ))
                        ) :
                        (<ErrMap err={errorProducts} />)
                    )
                }
            </div>
        </section>
    )
};
