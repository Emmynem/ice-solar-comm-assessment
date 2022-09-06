import React from "react";
import { useGetCategories } from "../hooks/useProducts";
import { Loading } from "./loading";
import { ErrMap } from "./errMap";

export const CategoriesSubComp = () => {

    const { errorCategories, categories, loading } = useGetCategories();

    return (
        <section className="section category">
            <h2>Categories</h2>
            <div className="cat-center">
                {
                    loading ? 
                    (<Loading show={loading} />) :
                    (
                        !errorCategories ?
                        (
                            categories.map((data, i) => (
                                <div className="cat" key={i}>
                                    <img src="https://i.pravatar.cc" alt={data} />
                                    <div className="">
                                        <a href={`/products/category/${data}`}>
                                            <p style={{ textTransform: 'capitalize' }}>{data}</p>
                                        </a>
                                    </div>
                                </div>
                            ))
                        ) :
                        (<ErrMap err={errorCategories} />)
                    )
                }
            </div>
        </section>
    )
};