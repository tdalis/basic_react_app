import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Styles = styled.div`
    .JobHeader {
        color: blue;
    }

    .Place {
        padding-left: 12px;
    }

    .Skills {
        margin-left: -2.05vw;
        margin-top: -3vh;
    }
`;

export const StirlingUni = () => (
    <Styles>
        <Container fluid className="gray-bg">
            <Row>
                <Col>
                    <small>Sep 2017 - Sep 2018</small>
                    <h2 className="JobHeader">MSc Data Science For Business</h2>
                    <h3>University of Stirling</h3>
                    <Row className="Place"><FontAwesomeIcon icon="map-marker" size="2x" /> <h4 className="Place">Stirling, Scotland, UK</h4></Row>
                </Col>
            </Row>
        </Container>
    </Styles>
)