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
        }
        catch (err){
            console.log(err)
        }
    }
)

 const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{},
     extraReducers:{
        [registerUser.pending]:(state)=>{
            state.status=null
            state.isLoad=true
        },
         [registerUser.fulfilled]:(state,action)=>{
            // state.status=action.payload.message
             state.user = action.payload.user
             state.token = action.payload.token
             state.isLoad = false
         },
         [registerUser.rejected]:(state,action)=>{
            state.status=action.payload.message
             state.isLoad=false
         }
     }
})

export default authSlice.reducer