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

export const MarketingConsultant = () => (
    <Styles>
        <Container fluid className="gray-bg">
            <Row>
                <Col>
                    <small>Apr 2016 - Sep 2017</small>
                    <h2 className="JobHeader">Independent Marketing Consultant</h2>
                    <Row className="Place"><FontAwesomeIcon icon="map-marker" size="2x" /> <h4 className="Place">Scotland, UK</h4></Row>
                    <h4>Key Responsibilities:</h4> <p>Market Research, Digital marketing, SEO, Marketing Strategy Development</p>
                </Col>
            </Row>
        </Container>
    </Styles>
)