import React from 'react';
import { Jumbotron as Jumbo } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
    .statementJumbo {
        background-color: #e6e6ff;
    }
`;

export const LongStatement = () => (
    <Styles>
        <Jumbo fluid className="statementJumbo">
            <p>
                Data scientist with the experience of presenting business insights from data models to stakeholders and senior management members. My last job was within the FMCG sector as a business data scientist with the marketing departments. <br />
                My experience and background mean that I can take ownership of every project I am working on from day one with the focus on delivering business value through big data and Machine Learning. I am looking for opportunities that will allow me to innovate and develop as a professional data scientist.
            </p>
        </Jumbo>
    </Styles>
)