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

export const DataScientist = () => (
    <Styles>
        <Container fluid className="gray-bg">
            <Row>
                <Col>
                    <small>Jan 2019 - Sep 2019</small>
                    <h2 className="JobHeader">Data Scientist (Contractor)</h2>
                    <h3>Reckitt Benckiser (RB)</h3>
                    <Row className="Place"><FontAwesomeIcon icon="map-marker" size="2x" /> <h4 className="Place">Amsterdam, Netherlands</h4></Row>
                    <h4>Key Responsibilities:</h4> <p>Standardisation of Data Structuring, Automating Data Collection and Processing, Machine Learning, PowerBi Dashboarding, Presenting Findings to IT and Marketing Directors</p>
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
                                    <li>DataRobot</li>
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