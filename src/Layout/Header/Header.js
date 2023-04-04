import React from 'react';
import './Header.scss'
import {useDispatch, useSelector} from "react-redux";
import {checkIsAuth, logout} from "../../redux/reducer/auth";
import {toast} from "react-toastify";

const Header = () => {
    const isAuth = useSelector(checkIsAuth)
const dispatch = useDispatch()
    const exit=()=>{
        dispatch(logout)
        window.localStorage.removeItem('token')
        toast('Вы вышли из аккаунта')
    }

    return (
        <header className='header'>
            <div className="container">
            <h2>Front 16:00</h2>
            <ul className='header__lists'>
                <li>Главная</li>
                <li>Мои посты</li>
                <li>Добавить пост</li>
            </ul>
                {
                    isAuth? <button onClick={exit}>Выйти</button>:<button>Войти</button>
                }

            </div>
        </header>
    );
};

export default Header;