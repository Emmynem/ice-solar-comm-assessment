import React from "react";
import { config } from "../config";
import useCookie from "../hooks/useCookie";

export const Nav = ({ activeRoute }) => {
    const [cookie, removeCookie] = useCookie(config.token, "");
    return (
        <div className="navigation">
            <div className="nav-center container">
                <a className="logo" href="/" style={{ textDecoration: 'none', 'color': '#000000'}}>
                    <h1>ICE</h1>
                </a>
                <ul className="nav-list">
                    <li className="nav-item"><a href="/" className={`nav-link ${activeRoute === 'home' ? 'active' : ''}`}>Home</a></li>
                    <li className="nav-item"><a href="/categories" className={`nav-link ${activeRoute === 'categories' ? 'active' : ''}`}>Categories</a></li>
                    <li className="nav-item"><a href="/all-users" className={`nav-link ${activeRoute === 'users' ? 'active' : ''}`}>Users</a></li>
                    <li className="icons">
                        <div className="icon">
                            <a href="/all-users">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="-5 -2 24 24" width="24" fill="currentColor"><path d="M3.534 10.07a1 1 0 1 1 .733 1.86A3.579 3.579 0 0 0 2 15.26V17a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1.647a3.658 3.658 0 0 0-2.356-3.419 1 1 0 1 1 .712-1.868A5.658 5.658 0 0 1 14 15.353V17a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3v-1.74a5.579 5.579 0 0 1 3.534-5.19zM7 0a4 4 0 0 1 4 4v2a4 4 0 1 1-8 0V4a4 4 0 0 1 4-4zm0 2a2 2 0 0 0-2 2v2a2 2 0 1 0 4 0V4a2 2 0 0 0-2-2z"></path></svg>
                            </a>
                        </div>
                        <a href="/cart" className="icon mt-3"><i className="bx bx-cart"></i>
                            {/* <span>{cookie && cookie !== '[object Object]' ? cartTotal : 0}</span> */}
                        </a>
                        {
                            cookie && cookie !== '[object Object]' ? (
                                <a href="/" onClick={removeCookie} className="icon mt-3">
                                    <i className="bx bx-log-out"></i>
                                </a>
                            ) : (
                                <a href="/login" className="icon mt-3">
                                    <i className="bx bx-log-in"></i>
                                </a>
                            )
                        }
                    </li>
                </ul>
                <div className="icons">
                    <a href="/all-users" className="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="-5 -2 24 24" width="24" fill="currentColor"><path d="M3.534 10.07a1 1 0 1 1 .733 1.86A3.579 3.579 0 0 0 2 15.26V17a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1.647a3.658 3.658 0 0 0-2.356-3.419 1 1 0 1 1 .712-1.868A5.658 5.658 0 0 1 14 15.353V17a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3v-1.74a5.579 5.579 0 0 1 3.534-5.19zM7 0a4 4 0 0 1 4 4v2a4 4 0 1 1-8 0V4a4 4 0 0 1 4-4zm0 2a2 2 0 0 0-2 2v2a2 2 0 1 0 4 0V4a2 2 0 0 0-2-2z"></path></svg>
                    </a>
                    <a href="/cart" className="icon mt-3"><i className="bx bx-cart"></i>
                        {/* <span>{cookie && cookie !== '[object Object]' ?  cartTotal : 0}</span> */}
                    </a>
                    {
                        cookie && cookie !== '[object Object]' ? (
                            <a href="/" onClick={removeCookie} className="icon mt-3">
                                <i className="bx bx-log-out"></i>
                            </a>
                        ) : (
                            <a href="/login" className="icon mt-3">
                                <i className="bx bx-log-in"></i>
                            </a>
                        )
                    }
                </div>
                <div className="hamburger">
                    <i className="bx bx-menu-alt-left"></i>
                </div>

            </div>
        </div>
    )
};