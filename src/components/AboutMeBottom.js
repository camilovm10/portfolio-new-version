import React from 'react';
import styled from 'styled-components/macro';
import CoverImage from '../images/cover-image.jpg';
import DisneyImage from '../images/disney-image.JPG';
import InvestmentImage from '../images/investment-image.jpg';

const Container = styled.div`
    width: 90%;
    padding: 40px 0;
    margin: 0 auto;
`;


const ContainerCard = styled.div`

    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    padding: 30px 0;
    
`;

const Title = styled.h2`
    color: #1c3272e8;
    font-size: 30px;
    margin: 0;
    padding-bottom: 10px;
    line-height: 2;
    font-weight: 700;
`;

const BlueBorder = styled.div`
    margin: 0 auto;
    padding: 2px 70px;
    width: 80px;
    background-color: #1c3272e8;
`;

const Text = styled.p`
    color: black;
    font-size: 20px;
    margin: 0;
    padding: 0;
`;

const Image = styled.img`
    width: 100%;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.4);
`;

const ImageContainer = styled.div`
    width: 500px;
`;
const TextContainer = styled.div`
    width: 500px;
    
`;

const TextCamiloContainer = styled.div`
    margin: 0 auto;
`;


export default function AboutMeBottom() {
    return (
        <Container>

            <ContainerCard>
                <ImageContainer>
                    <Image src={DisneyImage} />
                </ImageContainer>
                <TextContainer>
                    <TextCamiloContainer>
                        <Title> Travel </Title>
                        <BlueBorder></BlueBorder>
                        <Text> 
                            I love to travel and discover new cities and places. This pic was taken last february in Orlando, FL (Disney Springs), just before the COVID-19 became a world wide pandemic. Was my first international trip, and next year my family and I have plans to visit USA again, and Europe.
                        </Text>
                    </TextCamiloContainer>
                </TextContainer>
                
            </ContainerCard>

            <ContainerCard>
                    <ImageContainer>
                        <Image src={InvestmentImage} />
                    </ImageContainer>
                    <TextContainer>
                    
                    <TextCamiloContainer>
                        <Title> Investing </Title>
                        <BlueBorder></BlueBorder>
                        <Text> 
                            Since I was a child I love the idea of make money. I started several business ideas and projects when I was 17 years old, and today I'm mainly focused on real state and stock market. 2020 has been my most profitable year, even with the pandemic, and above all things this year taught me about the importance of difersification and risk management.
                        </Text>
                    </TextCamiloContainer>
                </TextContainer>
                
            </ContainerCard>
            

            <ContainerCard>
                <ImageContainer>
                    <Image src={CoverImage} />
                </ImageContainer>
                <TextContainer>
                    <TextCamiloContainer>
                        <Title> Make Music </Title>
                        <BlueBorder></BlueBorder>
                        <Text> 
                            Music in my life starts as a hobbie 10 years ago; right now is one of my passions and a crucial part of my life. I compose pop/urban songs like "Piso 21" and "Cali y el Dandee" music. Nothing better than take my guitar, drink a good beer and play some melodies to chill out.
                        </Text>
                    </TextCamiloContainer>
                </TextContainer>
                
            </ContainerCard>

        </Container>
    )
}
