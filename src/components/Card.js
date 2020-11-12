import React from 'react';
import '../css/card.css';
import Stack from './Stack';
import styled from 'styled-components/macro';

const ContainerStack = styled.div`
    display: flex;
    flex-wrap: wrap;
    /* position: absolute;
    bottom: 20px; */
    align-items: center;
    justify-content: center;
`;

const ContainerImage = styled.div`
    max-width: 700px;
`;

export default function Card({ image, title, stack, url, description }) {
    return (
        <div className="card">
            <ContainerImage>
                <a href={url} target="_blank">
                    <img  src={image} alt={title.trim()} className="card__image"/>
                </a>
            </ContainerImage>
            <div className="card__container">
                <div className="card__details">
                    <h3> {title} </h3>
                    <p>
                        {description}
                    </p>
                    <ContainerStack>
                        {stack.map(item => (
                            <Stack 
                                tech={item}
                            />
                        ))}
                    </ContainerStack>
                </div>
            </div>
        </div>
    )
};
