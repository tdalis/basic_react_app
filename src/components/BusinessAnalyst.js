import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';

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

export const BusinessAnalyst = () => (
    <Styles>
        <Container fluid className="gray-bg">
            <Row>
                <Col>
                    <small>Sep 2019 - Apr 2020</small>
                    <h2 className="JobHeader">Data Scientist (Business Analyst)</h2>
                    <h3>Reckitt Benckiser (RB)</h3>
                    <Row className="Place"><FontAwesomeIcon icon="map-marker" size="2x" /> <h4 className="Place">Heidelberg, Germany</h4></Row>
                    <h4>Key Responsibilities:</h4> <p>Business Analytics, Data Collection, Data Validation, Web Scraping, PowerBi Dashboarding, Presenting Findings to Stakeholders</p>
                    <div className="Skills">
                    <Accordion defaultActiveKey="1">
                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                    <h5>Key Technical Skills Used At this Job:</h5>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                    <Row>
                        <Col>
                            <ul>
                                <li>Python</li>
                                <ul>
                                    <li>Pandas</li>
                                    <li>Numpy</li>
                                    <li>Scipy</li>
                                    <li>Tensorflow</li>
                                    <li>sklearn</li>
                                    <li>Keras</li>
                                    <li>H2O</li>
                                    <li>datetime</li>
                                    <li>json</li>
                                    <li>traceback</li>
                                </ul>
                            </ul>
                        </Col>
                        <Col>
                            <ul>
                                <li>R</li>
                                <ul>
                                    <li>gTrendsR</li>
                                    <li>dplyr</li>
                                    <li>tidyverse</li>
                                    <li>lubridate</li>
                                    <li>httr</li>
                                    <li>jsonlite</li>
                                    <li>readr</li>
                                    <li>plyr</li>
                                </ul>
                            </ul>
                        </Col>
                    </Row>
                    </Accordion.Collapse>
                    </Accordion>
                    </div>
                </Col>
            </Row>
        </Container>
    </Styles>
)