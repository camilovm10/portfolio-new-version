import React from 'react';
import Logo from '../images/Camilo-vasquez-logo.png'
import '../css/header.css';

const Header = () => {
    return (
        <div className="header">
            <div className="header__top">

            </div>
            <div className="header__navBarContainer">
                
                <img src={Logo} alt="Logo" className="logo"/>
                
                <nav >
                    <ul className="header__navBar">
                        <li>About me</li>
                        <li>Projects</li>
                        <li>Contact me</li>
                    </ul>
                </nav>
            </div>
            <div className="header__top">

            </div>
        </div>
    )
}

export default Header;
