import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {registerUser} from "../redux/reducer/auth";

const Register = () => {
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')
    const dispatch=useDispatch()

    const register = ()=>{
        try {
            dispatch(registerUser({username,password}))
            setUsername('')
            setPassword('')

        }catch (er){
            console.log(er)
        }

    }
    return (
        <section>
            <form onSubmit={(e)=>e.preventDefault()} className='login__form'>
                <h2>Регистрация</h2>
                <label>
                    Name:
                    <input onChange={(e)=>setUsername(e.target.value)} value={username} type="text" placeholder='Введите имя'/>
                </label>
                <label htmlFor="">
                    Password:
                    <input onChange={(e)=>setPassword(e.target.value)} value={password} type="password" placeholder='введите пароль'/>
                </label>
                <button type='submit' onClick={register}>Регистрация</button>
                <div>
                    <p>Если у вас есть аккаут то </p>
                    <Link to='/login'>
                        <button>войти</button>
                    </Link>

                </div>
            </form>
        </section>
    );
};

export default Register;