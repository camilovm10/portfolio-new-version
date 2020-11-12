import React from 'react';
import styled from 'styled-components/macro';
import PreviewCard from './PreviewCard';
import DiceeImage from '../images/project-images/dice-image.jpg';
import NetflixImage from '../images/project-images/netflix-image.jpg';
import RealState1 from '../images/project-images/bienesraices-image.jpg';

import { Link } from 'react-router-dom';

const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding: 40px 10px;
    width: 80%;
    margin: 0 auto;
`;

const Title = styled.h2`
    color: black;
    font-weight: 700;
    padding-bottom: 10px;
    border-bottom: solid #1c3272e8;
    width: 250px;
    margin: 0 auto;
`;

const Button = styled.button`
    padding: 15px 30px;
    background-color: rgb(207, 207, 207);
    background-image: url("https://www.transparenttextures.com/patterns/natural-paper.png");
    margin: 20px auto;
    border: 1px solid rgb(207, 207, 207);
    font-size: 18px;
    transition: all .3s ease;

    &:hover {
        background-color: rgb(192, 192, 192);
        cursor: pointer;
    }
`;

const ContainerButton = styled.div`
    display: flex;
    justify-content: center;
    padding-bottom: 20px;
`;

export default function PreviewProjects() {
    return (
        <>
        <Title> Recent Projects </Title>
        <Container>
            <PreviewCard 
                img={DiceeImage}
                title="Dicee Game"
                url={'https://hopeful-beaver-f0a9eb.netlify.app/'}
            />
            <PreviewCard 
                img={NetflixImage}
                title="Netflix Clone"
                url={'https://serene-nightingale-5b13eb.netlify.app/'}
            />
            <PreviewCard 
                img={RealState1}
                title="Real State Web Page"
                url={'https://upbeat-jones-0c5c61.netlify.app/'}
            />
            
        </Container>

        <ContainerButton>
            <Link to="/projects#">
                    <Button>
                        All Projects
                    </Button>
            </Link>
        </ContainerButton>
        </>
    )
}
