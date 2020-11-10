import React from 'react';
import '../css/technologies.css';

// Logos
import FirebaseLogo from '../images/icons/Firebase_Logo.png';
import JavascriptLogo from '../images/icons/javascript.png';
import ReactLogo from '../images/icons/React-icon.svg';
import ReduxLogo from '../images/icons/redux-dark.png';
import SassLogo from '../images/icons/Sass_Logo_Color.svg';

export default function Technologies() {

    const techArray = [FirebaseLogo, JavascriptLogo, ReactLogo, ReduxLogo, SassLogo];

    return (
        <div className="technologies">
            
            <h2>Main Technologies</h2>
            <div className="technologies__top">

            </div>
            <div className="technologies__container">
                {techArray.map((item, index) => (
                    <img src={item} alt={`${item}-image`} className={`technologies__container-image-${index}`}/>
                ))}
            </div>
            <div className="technologies__top">

            </div>
        </div>  
    )
}
