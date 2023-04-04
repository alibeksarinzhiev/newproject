import React, {useEffect, useState} from 'react';
import './Login.scss'
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {toast} from "react-toastify";
import {loginUser} from "../redux/reducer/auth";

const Login = () => {

    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')
    const dispatch=useDispatch()
    const {status} = useSelector(state=>state.authSlice)
    useEffect(()=>{
        if (status){
            toast(status)
        }
    },[status])
    const login = ()=>{
        try {
            dispatch(loginUser({username,password}))
            setUsername('')
            setPassword('')

        }catch (er){
            console.log(er)
        }

    }
    return (
        <section className='login'>
            <form className='login__form' onClick={(e)=>e.preventDefault()}>
                <h2>Авторизация</h2>
                <label>
                    Name:
                    <input value={username} onChange={(e)=>setUsername(e.target.value)} type="text" placeholder='Введите имя'/>
                </label>
                <label htmlFor="">
                    Password:
                    <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder='введите пароль'/>
                </label>
                <button type='submit' onClick={login}>Войти</button>
                 <div>
                     <p>Если у вас нет аккаута то </p>
                     <Link to='/register'>
                         <button>Регистрация</button>
                     </Link>

                 </div>
            </form>
        </section>
    );
};

export default Login;