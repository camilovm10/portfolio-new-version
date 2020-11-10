import React from 'react';
import '../css/card.css';

export default function Card({ image, title, stack, url, description }) {
    return (
        <div className="card">

            <a href={url} target="_blank">
                <img  src={image} alt={title.trim()} className="card__image"/>
            </a>
            <div className="card__container">
                <div className="card__details">
                    <h3> {title} </h3>
                    <p>
                        {description}
                    </p>
                    <h4> Technologies: </h4>
                    <ul>
                        {stack.map(item => (
                            <li> {item} </li>
                        ))}
                    </ul>
                </div>
            </div>

            
        </div>
    )
};
