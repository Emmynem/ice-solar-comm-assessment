import React from "react";
import { AddUserSubComp, Footer, Nav } from "../subComponents";

export const AddUser = () => {

    return (
        <div>
            <Nav activeRoute={'users'} />
            <AddUserSubComp />
            <Footer />
        </div>
    )
};