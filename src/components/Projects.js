import React from 'react';
import '../css/projects.css';
import NetflixImage from '../images/netflix-clone.jpg';
import RealState1 from '../images/realstate-1.jpg';
import PatientAdmin from '../images/patient-admin.jpg';
import AmazonClone from '../images/amazon-clone.jpg';
import Card from './Card';

export default function Projects() {
    return (
        <div className="projects">
            <div className="projects__hexagon-style">

            </div>
            <div className="projects__top">

            </div>
            <h2>My Projects</h2>


            <div className="projects__container">
                <Card  
                    image={NetflixImage}
                    title={'Netflix Clone Project'}
                    stack={['React Js', 'Firebase (Auth + DataBase)', 'Styled Components']}
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
                    description="this App can manage the appointments of a veterinarian."
                />
                <Card  
                    image={AmazonClone}
                    title={'Amazon Clone'}
                    stack={['React Js', 'Firebase (Auth + DataBase)']}
                    url={'https://unruffled-heisenberg-5921d8.netlify.app/'}
                    description="An Amazon clone with e-commerce functionality. Authentication and database managed with firebase, and payments with stripe."
                />
            </div>
        </div>
    )
};
