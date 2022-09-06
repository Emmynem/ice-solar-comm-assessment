import React from "react";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="row">
                <div className="col d-flex">
                    <h4>INFORMATION</h4>
                    <p>lorem ipsum lorem ipsum lorem ipsum, lorem ipsum</p>
                    <p>lorem ipsum lorem ipsum lorem ipsum, lorem ipsum</p>
                    <p>lorem ipsum lorem ipsum lorem ipsum, lorem ipsum</p>
                    {/* <a href="">lorem ipsum</a> */}
                </div>

                <div className="col d-flex">
                    <h4>Quick Links</h4>
                    <a href="/">Home</a>
                    <a href="/cart">Cart</a>
                    <a href="/categories">Categories</a>
                    <a href="/all-users">Users</a>
                </div>

                <div className="col d-flex">
                    
                    <span><i className="bx bxl-facebook-square"></i></span>
                    <span><i className="bx bxl-instagram-alt"></i></span>
                    <span><i className="bx bxl-github"></i></span>
                    <span><i className="bx bxl-twitter"></i></span>
                    <span><i className="bx bxl-pinterest"></i></span>
                </div>
            </div>
        </footer>
    )
};

export default Footer;