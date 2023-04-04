import React from 'react';
import {Routes,Route} from 'react-router-dom'
import Layout from "./Layout/Layout";
import MainPage from "./Pages/MainPage";
import AddPost from "./Pages/AddPost";
import Login from "./Pages/Login";
import EditPost from "./Pages/EditPost";
import AllPosts from "./Pages/AllPosts";
import OnePost from "./Pages/OnePost";
import Register from "./Pages/register";
import {ToastContainer} from "react-toastify";

const App = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route path='main' element={<MainPage/>}/>
                    <Route path='add' element={<AddPost/>}/>
                    <Route path='login' element={<Login/>}/>
                    <Route path='edit' element={<EditPost/>}/>
                    <Route path='posts' element={<AllPosts/>}/>
                    <Route path='posts/:id' element={<OnePost/>}/>
                    <Route path='register' element={<Register/>}/>
                </Route>
            </Routes>
            <ToastContainer position='bottom-right'/>




        </>
    );
};

export default App;