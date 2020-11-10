import React from 'react';
import '../css/footer.css';
import Logo from '../images/Camilo-vasquez-logo.png'
import InstagramLogo from '../images/icons/instagram-brands.svg';
import LinkedinLogo from '../images/icons/linkedin-brands.svg';
import YoutubeLogo from '../images/icons/youtube-brands.svg';

export default function Footer() {
    return (

        <footer>
            <div className="footer__bottom">
            </div>
            <div className="footer__top">

            </div>
            <div className="footer">
                <div className="footer__contenedor-logo">
                    <img className="logo" src={Logo}/>
                </div>
                <div className="footer__container-icons-footer">
                    <a href="https://www.instagram.com/camilovasqz/" target="_blank"><img className="logo" src={InstagramLogo}/></a>
                    <a href="https://www.linkedin.com/in/juan-camilo-vasquez-mira-3612911ab/" target="_blank"><img className="logo" src={LinkedinLogo}/></a>
                    <a href="https://www.youtube.com/user/camilovm2008" target="_blank"><img className="logo3" src={YoutubeLogo}/></a>
                </div>
            </div>
            <div className="footer__top">

            </div>
            <div className="footer__bottom">
                <p>Todos los derechos reservados 2020 &copy;</p>
            </div>
            
        </footer>
    )
}