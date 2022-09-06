import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./lib/api/usersApiSlice";

export default configureStore({
    reducer: {
        users: usersReducer
    },
});