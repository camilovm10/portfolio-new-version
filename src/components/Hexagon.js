import React from 'react';
import styled from 'styled-components/macro';

const HexagonStyled = styled.div`
    padding: 6rem;
    /* margin-bottom: 50px; */
    background-color:  #1c3272e8;
    background-image: url("https://www.transparenttextures.com/patterns/old-wall.png");
    /* This is mostly intended for prototyping; please download the pattern and re-host for production environments. Thank you! */
    clip-path: polygon(0 50%, 100% 0%, 100% 100%, 0% 100%);
`;

export default function Hexagon() {
    return (
        <HexagonStyled>

        </HexagonStyled>
    )
}
