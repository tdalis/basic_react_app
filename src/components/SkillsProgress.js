import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProgressBar from 'react-bootstrap/ProgressBar';
import styled from 'styled-components';

const Styles = styled.div`
    .ShowBar {
        margin-top: 20vh;
        
    }
`;


export const SkillsProgress = () => (
    <Styles>
    <Container fluid>
        <Row>
            <Row className = "ShowBar">
                <h3>Python</h3>
            </Row>
            <Row className = "ShowBar">
                <ProgressBar now={90} />
            </Row>
        </Row>
    </Container>
    </Styles>
)

