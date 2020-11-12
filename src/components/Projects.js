import React from 'react';
import '../css/projects.css';

import NetflixImage from '../images/project-images/netflix-image.jpg';
import RealState1 from '../images/project-images/bienesraices-image.jpg';
import PatientAdmin from '../images/project-images/patient-image.jpg';
import AmazonClone from '../images/project-images/amazon-image.jpg';
import DiceeImage from '../images/project-images/dice-image.jpg';
import PingPongImage from '../images/project-images/ping-image.jpg';
import MarketPlaceImage from '../images/project-images/marketplace-image.jpg';

import Card from './Card';
import styled from 'styled-components/macro';

const Title = styled.h2`
    font-size: 42px;
    color: black;
    font-weight: 700;

    @media (max-width: 1200px) {
        margin-bottom: 90px; 
    }
`;

export default function Projects() {
    return (
        <div className="projects">
            
            
            <div className="projects__hexagon-style">

            </div>
            <Title>My Projects</Title>


            <div className="projects__container">
                <Card  
                    image={NetflixImage}
                    title={'Netflix Clone Project'}
                    stack={['React Js', 'Firebase', 'Styled Components']}
                    url={'https://serene-nightingale-5b13eb.netlify.app/'}
                    description="Explore this netflix clone that includes authentication, a browse page through more than 40 movies and series, and functionality to watch a little clip."
                />
                <Card  
                    image={RealState1}
                    title={'Real State Website'}
                    stack={['HTML', 'CSS']}
                    url={'https://upbeat-jones-0c5c61.netlify.app/'}
                    description="A simple layout of a real state company, build in HTML and CSS."
                />
                <Card  
                    image={PatientAdmin}
                    title={'Patient Manager App'}
                    stack={['React Js', 'CSS']}
                    url={'https://clever-lamarr-b3025d.netlify.app/'}
                    description="This app can manage the appointments of a veterinarian."
                />
                <Card  
                    image={PingPongImage}
                    title={'Ping Pong Classic'}
                    stack={['Javascript', 'HMTL', 'Canvas']}
                    url={'https://xenodochial-bhaskara-81e874.netlify.app/'}
                    description="The classic Ping Pong game recreated in HTML using Canvas and Javascript."
                />
                <Card  
                    image={AmazonClone}
                    title={'Amazon Clone'}
                    stack={['React Js', 'Firebase']}
                    url={'https://unruffled-heisenberg-5921d8.netlify.app/'}
                    description="An Amazon clone with e-commerce functionality. Authentication and database managed with firebase, and payments with stripe."
                />
                <Card  
                    image={DiceeImage}
                    title={'Dice Game'}
                    stack={['Javascript', 'CSS']}
                    url={'https://hopeful-beaver-f0a9eb.netlify.app/'}
                    description="Fun game made with javascript. My first steps with the DOM manipulation."
                />
                <Card  
                    image={MarketPlaceImage}
                    title={'Marketplace Web Page'}
                    stack={['Angular', 'CSS']}
                    url={'https://camilovm10.github.io/store-angular/#/home'}
                    description="A Marketplace layout in HTML and CSS transformed into a SPA using Angular"
                />
            </div>
        </div>
    )
};
