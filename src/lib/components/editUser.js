import React from "react";
import { EditUserSubComp, Footer, Nav } from "../subComponents";

export const EditUser = () => {

    return (
        <div>
            <Nav activeRoute={'users'} />
            <EditUserSubComp />
            <Footer />
        </div>
    )
};