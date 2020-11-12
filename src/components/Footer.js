import React from 'react';
import { Link } from 'react-router-dom';
import '../css/footer.css';
import Logo from '../images/logo-final-2.png';

import styled from 'styled-components/macro';

const IconContainer = styled.div`
    display: flex;
    justify-content: center;

    > a {
        text-decoration: none;
    }

    > a > i {
        font-size: 55px;
        margin: 0 10px;
        color: black;
        transition: all .3s ease-in-out;
    }

    > a > i:hover {
        color: #FFA713;
    }
`;

export default function Footer() {
    return (

        <footer>
            <div className="footer__bottom">
            </div>
            <div className="footer__top">

            </div>
            <div className="footer">
                <div className="footer__contenedor-logo">
                    <Link to="/">
                    <img className="logo" src={Logo}/>
                    </Link>
                </div>
                <IconContainer>
                        <a href="https://www.instagram.com/camilovasqz/" target="_blank"><i className="fab fa-instagram"></i></a>
                        <a href="https://www.facebook.com/hoteldanncarltonmedellin/" target="_blank"><i class="fab fa-youtube-square"></i></a>
                        <a href="https://www.linkedin.com/in/juan-camilo-vasquez-mira-3612911ab/" target="_blank"><i class="fab fa-linkedin"></i></a>
                        <a href="https://github.com/camilovm10/" target="_blank"><i class="fab fa-github-square"></i></a>
                </IconContainer>
            </div>
            <div className="footer__top">

            </div>
            <div className="footer__bottom">
                <p>All rights reserved 2020 &copy;</p>
            </div>
            
        </footer>
    )
}