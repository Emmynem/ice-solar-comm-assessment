import React from "react";
import Header from "../subComponents/header";
import { CategoriesSubComp, Footer, Products } from "../subComponents";
// import { UsersTable } from "../subComponents/usersTable";
// import { ErrMap } from "../subComponents/errMap";
// import { Loading } from "../subComponents/loadingProgress";

export const Home = () => {
    return (
        <div>
            <Header header={'home'} />
            <CategoriesSubComp />
            <Products />
            <Footer />
            {/* <div className="card mt-5 mb-5">
                <div className="card-header">Fake Store - {!cookieUsername || cookieUsername === '[object Object]' ? 'Login' : cookieUsername}</div>
                <div className="card-body">
                    {
                        loading ? (<Loading show={loading} />) :
                            (
                                !errorUsers ?
                                    (<UsersTable entities={users} />)
                                    :
                                    (<ErrMap err={errorUsers} />)
                            )
                    }
                </div>
            </div> */}
        </div>
    )
};