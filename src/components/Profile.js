import React from 'react';
import ProfilePicture from '../images/profile.jpg';
import '../css/profile.css';
import styled from 'styled-components/macro';

const Container = styled.div`
    padding: 6rem 0;
    margin: 20px auto;
    background-color: #1c3272e8;
    background-image: url("https://www.transparenttextures.com/patterns/old-wall.png");
    clip-path: polygon(0 0, 100% 0, 100% 93%, 0 100%);
    margin-bottom: -2px;
`;

const Title = styled.h2`
    font-size: 35px;
    color: white;
    text-align: center;
`;

const Text = styled.p`
    color: white;
    font-size: 20px;
`;

export default function Profile() {
    return (
        <Container>

                <Title>Hi, my name is Camilo...</Title>
                <div className="profile__containers-info">
                    <img  
                        src={ProfilePicture} 
                        alt="profile-picture"
                        className="profile__containers-info-picture" 
                    />
                    <div className="profile__containers-info-text">
                        {/* <h2>
                            Hi !...
                        </h2> */}
                        <Text>
                            My name is Juan Camilo Vasquez Mira. I'm a recently graduated lawyer who loves music, bussiness and techonology. 
                        </Text>
                        <Text>
                            Since I was 15 years old I wanted to learn how to code; 7 years later I started in this incredible and challenging world of programming, and I'm exicited for the idea of becoming the best programmer that I can be.
                        </Text>
                    </div>
                    
                </div>
                
        </Container>
    )
}
