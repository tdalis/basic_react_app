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

export const RobertGordon = () => (
    <Styles>
        <Container fluid className="gray-bg">
            <Row>
                <Col>
                    <small>Sep 2012 - Jun 2016</small>
                    <h2 className="JobHeader">BA Management With Marketing</h2>
                    <h3>Robert Gordon University</h3>
                    <Row className="Place"><FontAwesomeIcon icon="map-marker" size="2x" /> <h4 className="Place">Aberdeen, Scotland, UK</h4></Row>
                </Col>
            </Row>
        </Container>
    </Styles>
)