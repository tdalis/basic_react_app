import React from 'react';
import { Jumbotron as Jumbo, useAccordionToggle, Card } from 'react-bootstrap';
import styled from 'styled-components';
import Badge from 'react-bootstrap/Badge';
import { Container, Row, Col } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion'
import Button from 'react-bootstrap/Button';
import { LongStatement } from './components/../LongStatement';
import { BusinessAnalyst } from './components/../BusinessAnalyst';
import { DataScientist } from './components/../DataScientist';
import { InternDS } from './components/../InternDS';
import { MarketingConsultant } from './components/../MarketingConsultant';
import { Groupmates } from './components/../Groupmates';
import { SkillsProgress } from './components/../SkillsProgress';
import { StirlingUni } from './components/../StirlingUni';
import { RobertGordon } from './components/../RobertGordon';

const Styles = styled.div`
    .cvJumbo {
        background-color: #e6e6ff;
    }
`;

export const CvJumbotron = () => (
    <Styles>
        <Jumbo fluid className="cvJumbo">
            <Container>
                <Row className="text-center">
                    <h3><strong>Deriving Business Value from Data</strong></h3>
                </Row>
                <Row>
                    <Accordion defaultActiveKey="0">
                        <Row>
                            <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                <h2><Badge variant="primary">Work Experience</Badge></h2>
                            </Accordion.Toggle>
                            <Container fluid>
                                <Row>
                                    <Col>
                                        <Accordion.Collapse eventKey="0">
                                            <BusinessAnalyst />
                                        </Accordion.Collapse>
                                        <Accordion.Collapse eventKey="0">
                                            <DataScientist />
                                        </Accordion.Collapse>
                                        <Accordion.Collapse eventKey="0">
                                            <InternDS />
                                        </Accordion.Collapse>
                                        <Accordion.Collapse eventKey="0">
                                            <MarketingConsultant />
                                        </Accordion.Collapse>
                                        <Accordion.Collapse eventKey="0">
                                            <Groupmates />
                                        </Accordion.Collapse>
                                    </Col>
                                </Row>
                            </Container>
                        </Row>
                        <Row >
                            <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                <h2><Badge variant="success">Skills Progress</Badge></h2>
                            </Accordion.Toggle>
                            <Container fluid>
                                <Row>
                                    <Col>
                                        <Accordion.Collapse eventKey="1">
                                            <SkillsProgress />
                                        </Accordion.Collapse>
                                    </Col>
                                </Row>
                            </Container>
                        </Row>
                        <Row>
                            <Accordion.Toggle as={Button} variant="link" eventKey="2">
                                <h2><Badge variant="secondary">Education</Badge></h2>
                            </Accordion.Toggle>
                            <Container fluid>
                                <Row>
                                    <Col>
                                        <Accordion.Collapse eventKey="2">
                                            <StirlingUni />
                                        </Accordion.Collapse>
                                        <Accordion.Collapse eventKey="2">
                                            <RobertGordon />
                                        </Accordion.Collapse>
                                    </Col>
                                </Row>
                            </Container>
                        </Row>
                    </Accordion>
                </Row>
            </Container>
        </Jumbo>
    </Styles>
)