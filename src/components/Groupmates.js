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

export const Groupmates = () => (
    <Styles>
        <Container fluid className="gray-bg">
            <Row>
                <Col>
                    <small>Aug 2014 - Mar 2016</small>
                    <h2 className="JobHeader">Co-Founder & CEO</h2>
                    <h3>Groupmates</h3>
                    <Row className="Place"><FontAwesomeIcon icon="map-marker" size="2x" /> <h4 className="Place">Edinburg, Scotland, UK</h4></Row>
                    <h4>Key Responsibilities:</h4> <p>Discover of product market fit, Recruit early adopters, Product design, Fundraising</p>
                </Col>
            </Row>
        </Container>
    </Styles>
)