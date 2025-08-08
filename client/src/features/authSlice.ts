import { createSlice } from "@reduxjs/toolkit";
import { type AuthInitState } from "../types/AuthInitState";

const initialState: AuthInitState = {
    isLogged: false,
    userName: ""
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            state.userName = action.payload.userName;
            state.isLogged = action.payload.isLogged;
        },
        logout: (state) => {
            state.userName = "";
            state.isLogged = false;
        }
    }
});

// "auth/login"
// "auth/logout"
// const login = (payload) => { type: "auth/login", payload: payload }

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
