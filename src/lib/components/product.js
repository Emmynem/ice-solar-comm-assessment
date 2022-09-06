import React from "react";
import { ProductDetails, Footer, Nav } from "../subComponents";

export const Product = () => {
    return (
        <div>
            <Nav activeRoute={'categories'} />
            <ProductDetails />
            <Footer />
        </div>
    )
};