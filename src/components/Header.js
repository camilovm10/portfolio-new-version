import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../images/Camilo-vasquez-logo.png'
import '../css/header.css';

const Header = () => {
    return (
        <div className="header">
            <div className="header__top">

            </div>
            <div className="header__navBarContainer">
                
                <Link to="/">
                    <img src={Logo} alt="Logo" className="logo"/>
                </Link>
                
                
                <div className="header__navBar">
                    <Link to="/">
                        Home
                    </Link>
                    <Link to="/projects">
                        Projects
                    </Link>
                    <Link>
                        About me
                    </Link>
                    
                    
                </div>
                
            </div>
            <div className="header__top">

            </div>
        </div>
    )
}

export default Header;
