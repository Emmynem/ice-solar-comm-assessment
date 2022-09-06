import React from "react";
import { CategoryProducts, Footer, Nav } from "../subComponents";

export const Products = () => {
    return (
        <div>
            <Nav activeRoute={'categories'} />
            <CategoryProducts />
            <Footer />
        </div>
    )
};