import React from "react";
import { CategoriesSubComp, Footer, Nav } from "../subComponents";

export const Categories = () => {
    return (
        <div>
            <Nav activeRoute={'categories'} />
            <CategoriesSubComp />
            <Footer />
        </div>
    )
};