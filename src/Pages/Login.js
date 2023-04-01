import React from 'react';
import './Login.scss'
import {Link} from "react-router-dom";

const Login = () => {
    return (
        <section className='login'>
            <form className='login__form'>
                <h2>Авторизация</h2>
                <label>
                    Name:
                    <input type="text" placeholder='Введите имя'/>
                </label>
                <label htmlFor="">
                    Password:
                    <input type="password" placeholder='введите пароль'/>
                </label>
                <button>Войти</button>
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