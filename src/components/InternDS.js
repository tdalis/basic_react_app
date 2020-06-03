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

export const InternDS = () => (
    <Styles>
        <Container fluid className="gray-bg">
            <Row>
                <Col>
                    <small>Jun 2018 - Oct 2018</small>
                    <h2 className="JobHeader">Data Scientist (Placement)</h2>
                    <h3>Royal London</h3>
                    <Row className="Place"><FontAwesomeIcon icon="map-marker" size="2x" /> <h4 className="Place">Edinburg, Scotland, UK</h4></Row>
                    <h4>Key Responsibilities:</h4> 
                    <p>Web Scraping, Application of NLP with R, Text Mining, Fraudulant Claims Detection Model</p>
                    <div className="Skills">
                    <Accordion defaultActiveKey="1">
                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                    <h5>Key Technical Skills Used At this Job:</h5>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                    <Row>
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
                                    <li>Tidytext</li>
                                    <li>Stringr</li>
                                    <li>tm</li>
                                    <li>Sentiment datasets (AFINN, bing, nrc)</li>
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