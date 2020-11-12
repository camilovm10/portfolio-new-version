import React from 'react';
import ProfilePicture from '../images/foto-gris.png';
import styled from 'styled-components/macro';

const BarTop = styled.div`
    padding: 6rem 0;
    margin: 20px auto;
    background-color: #1c3272e8;
    background-image: url("https://www.transparenttextures.com/patterns/old-wall.png");
`;

const BarBottom = styled.div`
    padding: 6rem 0;
    margin: 20px auto;
    background-color: #1c3272e8;
    background-image: url("https://www.transparenttextures.com/patterns/old-wall.png");
    clip-path: polygon(0 0, 100% 0, 100% 50%, 0 100%);
`;

const Container = styled.div`

    display: flex;
    flex-wrap: wrap;
    width: 90%;
    margin: 0 auto;
    justify-content: space-around;
    align-items: center;

    @media (max-width: 1294px) {
        flex-direction: column-reverse;
    }
    
`;

const Title = styled.h2`
    color: black;
    font-size: 45px;
    margin: 0;
    padding: 0;
    line-height: 1;
`;

const Subtitle = styled.h2`
    color: #1c3272e8;
    font-size: 24px;
    margin: 0;
    padding: 0;
`;

const Image = styled.img`
    width: 100%;
    /* box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2); */
`;

const ImageContainer = styled.div`
    flex-basis: 60%;
`;
const TextContainer = styled.div`
    flex-basis: 40%;
    
`;

const TextCamiloContainer = styled.div`
    margin: 0 auto;

    @media (max-width: 1294px) {
        padding: 20px 0;
    }

`;

const IconContainer = styled.div`
    display: flex;
    justify-content: center;

    > a {
        text-decoration: none;
    }

    > a > i {
        font-size: 40px;
        margin: 0 10px;
        color: black;
        transition: all .3s ease-in-out;
    }

    > a > i:hover {
        color: #FFA713;
    }
`;

export default function ProfileHome() {
    return (
        <>
        <BarTop>
        </BarTop>

        <Container>
            <TextContainer>
                <TextCamiloContainer>
                    <Title> I'm Camilo </Title>
                    <Subtitle> Front-end Developer </Subtitle>
                    <IconContainer>
                        <a href="https://www.instagram.com/camilovasqz/" target="_blank"><i className="fab fa-instagram"></i></a>
                        <a href="https://www.facebook.com/hoteldanncarltonmedellin/" target="_blank"><i class="fab fa-youtube-square"></i></a>
                        <a href="https://www.linkedin.com/in/juan-camilo-vasquez-mira-3612911ab/" target="_blank"><i class="fab fa-linkedin"></i></a>
                        <a href="https://github.com/camilovm10/" target="_blank"><i class="fab fa-github-square"></i></a>
                    </IconContainer>
                </TextCamiloContainer>
            </TextContainer>
            <ImageContainer>
                <Image src={ProfilePicture} />
            </ImageContainer>

        </Container>

        <BarBottom>
            
        

        </BarBottom>
        </>
    )
}
