import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom";
import React from "react";
import '../css/style.css';
import { config } from "../config";
import useCookie from "../hooks/useCookie";
import { Home, Categories, Product, Products, Users, Layout, Login, Carts, AddUser, EditUser } from "./";

export default function App() {
    const [cookie] = useCookie(config.token, "");
    
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/all-users" element={
                        !cookie || cookie === '[object Object]' ?
                        (<Navigate replace to={"/"} />) :
                        (<Users />)
                    } />
                    <Route path="/add-user" element={
                        !cookie || cookie === '[object Object]' ?
                        (<Navigate replace to={"/"} />) :
                        (<AddUser />)
                    } />
                    <Route path="/edit-user/:id" element={
                        !cookie || cookie === '[object Object]' ?
                        (<Navigate replace to={"/"} />) :
                        (<EditUser />)
                    } />
                    <Route path="/categories" element={<Categories />} />
                    <Route path="/products/:id" element={<Product />} />
                    <Route path="/products/category/:category" element={<Products />} />
                    <Route path="/cart" element={<Carts />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}