import React from 'react';
import '../css/techToLearn.css';

// Logos
import GatsbyLogo from '../images/icons/Gatsby-Logo.svg';
import MongoDBLogo from '../images/icons/mongodb.svg';
import NextLogo from '../images/icons/Nextjs-logo.svg';
import NodeLogo from '../images/icons/Node.js_logo.svg';
import SassLogo from '../images/icons/Sass_Logo_Color.svg';

export default function TechnologiesToLearn() {

    const techArray = [GatsbyLogo, MongoDBLogo, NextLogo, NodeLogo, SassLogo];

    return (
        <div className="technologies">
            
            <h2>Currently Learning About</h2>
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
