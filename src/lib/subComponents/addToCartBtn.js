import React from "react";
import { useAddUserCart } from "../hooks/useCarts";
import { ErrMessage } from "./errMessage";
import { SuccessMessage } from "./successMessage";

export const AddToCart = ({ productId, quantity }) => {

    const { errorAddUserCart, handleSubmitUserCart, successAddUserCart } = useAddUserCart(productId, quantity);

    return (
        // <div className="clearfix">
        //     <input type="submit" value={cookie && cookie !== '[object Object]' ? 'Logged In' : 'Login'} onClick={handleSubmit} disabled={cookie && cookie !== '[object Object]' ? true : false} className={cookie && cookie !== '[object Object]' ? 'btn btn-primary mt-3' : "btn btn-success mt-3"} />
        // </div>
        <>
            <button type="submit" onClick={handleSubmitUserCart} className="addcart">Add To Cart</button><br></br>            
            <ErrMessage errorMessage={errorAddUserCart} />
            <SuccessMessage successMessage={successAddUserCart} />
        </>
    )
};