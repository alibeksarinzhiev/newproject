import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "../../utils/axios";

const initialState={
    user:null,
    token:null,
    isLoad:null,
    status:null
}
export const registerUser =createAsyncThunk(
    'auth/registerUser',
    async ({username,password})=>{
        try {
            const {data} = await axios.post('/register',{
                username,
                password
            })
            if (data.token){
                window.localStorage.setItem('token',data.token)
            }
            return data
        }
        catch (err){
            console.log(err)
        }
    }
)
export const loginUser =createAsyncThunk(
    'auth/loginUser',
    async ({username,password})=>{
        try {
            const {data} = await axios.post('/login',{
                username,
                password
            })
            if (data.token){
                window.localStorage.setItem('token',data.token)
            }
            return data
        }
        catch (err){
            console.log(err)
        }
    }
)


 const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        logout:(state)=>{
            state.user=null
                state.token=null
                state.isLoad=null
            state.status=null
        }
    },
     extraReducers:{
        [registerUser.pending]:(state)=>{
            state.status=null
            state.isLoad=true
        },
         [registerUser.fulfilled]:(state,action)=>{
            state.status=action.payload.message
             state.user = action.payload.user
             state.token = action.payload.token
             state.isLoad = false
         },
         [registerUser.rejected]:(state,action)=>{
            state.status=action.payload.message
             state.isLoad=false
         },
         [loginUser.pending]:(state)=>{
             state.status=null
             state.isLoad=true
         },
         [loginUser.fulfilled]:(state,action)=>{
             state.status=action.payload.message
             state.user = action.payload.user
             state.token = action.payload.token
             state.isLoad = false
         },
         [loginUser.rejected]:(state,action)=>{
             state.status=action.payload.message
             state.isLoad=false
         },

     }
})
export const checkIsAuth = (state)=>Boolean(state.authSlice.token)

export const {logout} = authSlice.actions

export default authSlice.reducer