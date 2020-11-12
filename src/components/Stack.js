import React from 'react';
import styled from 'styled-components/macro';

const Border = styled.span`
    padding: 6px 10px;
    border-radius: 3px;
    background-color: #dae2ec;
    color: #617d98;
`;

const Container = styled.div`
    margin: 0 5px;

    &:first-child {
        margin-left: 0;
    }

    @media (max-width: 555px) {
        margin-bottom: 10px;
    }

`;

export default function Stack({ tech }) {
    return (
        <Container>
            <Border>{tech}</Border>
        </Container>
    )
}
