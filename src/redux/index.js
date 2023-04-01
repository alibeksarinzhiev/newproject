import {configureStore} from "@reduxjs/toolkit";
import authSlice from "./reducer/auth";

export const store = configureStore({
    reducer:{
        authSlice
    }
})