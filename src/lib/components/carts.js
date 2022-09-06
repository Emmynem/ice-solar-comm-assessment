import React from "react";
import { CartsSubComp, Footer, Nav } from "../subComponents";

export const Carts = () => {
    return (
        <div>
            <Nav activeRoute={'carts'} />
            <CartsSubComp />
            <Footer />
        </div>
    )
};