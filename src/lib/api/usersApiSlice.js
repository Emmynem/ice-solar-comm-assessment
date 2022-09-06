import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
    const response = await axios.get(`https://fakestoreapi.com/users`);
    const users = await response.json();
    return users;
});

const usersSlice = createSlice({
    name: "users",
    initialState: {
        entities: [],
        loading: false
    },
    reducers: {
        userAdded(state, action) {
            state.entities.push(action.payload);
            // const response = async () => await axios.post(`https://fakestoreapi.com/users`, {...action.payload});
            
            // if (response) {
            //     return response.data;
            // }
            // return { error: true, message: "No user found" };
        },
        userUpdated(state, action) {
            const { id, name, email } = action.payload;
            const existingUser = state.entities.find((user) => user.id === id);
            if (existingUser) {
                existingUser.name = name;
                existingUser.email = email;
            }
        },
    },
    extraReducers: {
        [fetchUsers.pending]: (state, action) => {
            state.loading = true;
        },
        [fetchUsers.fulfilled]: (state, action) => {
            state.loading = false;
            state.entities = [...state.entities, ...action.payload];
        },
        [fetchUsers.rejected]: (state, action) => {
            state.loading = false;
        },
    },
});

export const { userAdded, userUpdated } = usersSlice.actions;

export default usersSlice.reducer;