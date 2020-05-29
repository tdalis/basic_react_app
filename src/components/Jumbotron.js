import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';
import meAthens from '../assets/imgs/meAthens.jpg';

const Styles = styled.div`
    .jumbo {
        background: url(${meAthens}) no-repeat fixed bottom;
        background-size: cover;
        color: #efefef;
        height: 200px;
        position: relative;
        z-index: -2;
    }

    .overlay {
        background-color: #000;
        opacity: 0.6;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
    }
`;

export const Jumbotron = () => (
    <Styles>
        <Jumbo fluid className = "jumbo">
            <div className = "overlay"></div>
            <container>
                <h1 className = "font-weight-bold text-center">Welcome</h1>
                <p className = "font-weight-bold text-center">This is my first actual website using ReactJS and Bootstrap. Not bad, ha?</p>
            </container>
        </Jumbo>
    </Styles>
)