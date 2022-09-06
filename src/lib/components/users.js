import React from "react";
import { UsersTable } from "../subComponents/usersTable";
import { useGetUsers } from "../hooks/useUsers";
import { ErrMap } from "../subComponents/errMap";
import { Loading } from "../subComponents/loading";
import { Footer, Nav } from "../subComponents";

export const Users = () => {

    const { errorUsers, users, loading } = useGetUsers();

    return (
        <div>
            <Nav activeRoute={'users'} />
            {
                loading ? 
                (<Loading show={loading} />) :
                (
                    !errorUsers ? 
                    (<UsersTable entities={users} />) :
                    (<ErrMap err={errorUsers} />)
                )
            }
            <Footer />
        </div>
    )
};