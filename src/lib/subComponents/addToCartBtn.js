import React from "react";
import { useAddUserCart } from "../hooks/useCarts";
import { ErrMessage } from "./errMessage";
import { SuccessMessage } from "./successMessage";

export const AddToCart = ({ productId, quantity }) => {

    const { errorAddUserCart, handleSubmitUserCart, successAddUserCart } = useAddUserCart(productId, quantity);

    return (
        <>
            <button type="submit" onClick={handleSubmitUserCart} className="addcart">Add To Cart</button><br></br>            
            <ErrMessage errorMessage={errorAddUserCart} />
            <SuccessMessage successMessage={successAddUserCart} />
        </>
    )
};