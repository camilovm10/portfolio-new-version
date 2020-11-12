import React from 'react';
import '../css/tech.css';

// Logos
import FirebaseLogo from '../images/icons/Firebase_Logo.png';
import JavascriptLogo from '../images/icons/javascript.png';
import ReactLogo from '../images/icons/React-icon.svg';
import ReduxLogo from '../images/icons/redux-dark.png';

export default function Technologies() {

    const techArray = [FirebaseLogo, JavascriptLogo, ReactLogo, ReduxLogo];

    return (
        <div className="technologies">
            
            <h2> Main Technologies</h2>
            <div className="technologies__top">

            </div>
            <div className="technologies__container">
                {techArray.map((item, index) => (
                    <img src={item} alt={`${item}-image`} className={`technologies__container-logo-${index}`}/>
                ))}
            </div>
            <div className="technologies__top">

            </div>
        </div>  
    )
}
