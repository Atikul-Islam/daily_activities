import React from 'react';
import logo from '../../images/logo.png'
import './Header.css'
const Header = () => {
    return (
        <nav className='header'>
            <div className='logo'>
            <img src={logo} alt="" />
            <h1>Daily Freehand Excercise</h1>
            </div>
            <div>
                <a href="/home">Home</a>
                <a href="/blog">Blog</a>
                <a href="/about">About</a>
            </div>
        </nav>
    );
};

export default Header;