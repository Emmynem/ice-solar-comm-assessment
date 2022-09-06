import React from "react";
import Hero from "./hero";
import { Nav } from "./nav";

const Header = ({ header }) => {
    return (
        <>
            <header className="header" id="header">
                <Nav activeRoute={header} />
                <Hero />
            </header>
        </>
    );
};

export default Header;