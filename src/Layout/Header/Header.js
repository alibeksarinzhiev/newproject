import React from 'react';
import './Header.scss'

const Header = () => {
    return (
        <header className='header'>
            <div className="container">
            <h2>Front 16:00</h2>
            <ul className='header__lists'>
                <li>Главная</li>
                <li>Мои посты</li>
                <li>Добавить пост</li>
            </ul>
            <button>Войти</button>
            </div>
        </header>
    );
};

export default Header;