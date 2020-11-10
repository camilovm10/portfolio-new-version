import React from 'react';
import styled from 'styled-components/macro';

const Container = styled.div`
    width: 360px;
    height: 220px;
    margin: 0 10px;
    border: 1px solid gray;
    padding: 0;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
`;

const Title = styled.h3`
    color: black;
    font-size: 27px;
    text-align: center;
    border: solid white;
    width: 100%;
    transition: all .3s ease;
    font-weight: 500;

    &:hover {
        border-bottom: solid #1c3272e8;
        cursor: pointer;
    }
`;

const Anchor = styled.a`
    text-decoration: none;
`;

const Image = styled.img`
    width: 360px;
    height: 220px;
`;

export default function PreviewCard({ img, title, url }) {
    return (
        <div>
            <Anchor href={url} target="_blank">
            <Title> {title} </Title>
            </Anchor>
            <Container>
                <Image src={img} />
            </Container>
        </div>
    )
}
