import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProgressBar from 'react-bootstrap/ProgressBar';
import styled from 'styled-components';



export const SkillsProgress = () => (
    <Container fluid>
        <Row>
            <Col>
                <div>
                    <h4>Business Analytics</h4>
                    <ProgressBar now={90} label={"90%"} />
                </div>
                <div>
                    <h4>Data Validation</h4>
                    <ProgressBar now={95} label={"95%"} />
                </div>
                <div>
                    <h4>Data Visualisation</h4>
                    <ProgressBar now={80} label={"80%"} />
                </div>
                <div>
                    <h4>Presentation</h4>
                    <ProgressBar now={95} label={"95%"} />
                </div>
                <div>
                    <h4>Python</h4>
                    <ProgressBar now={90} label={"90%"} />
                </div>
                <div>
                    <h4>R</h4>
                    <ProgressBar now={85} label={"85%"} />
                </div>
                <div>
                    <h4>HTML5</h4>
                    <ProgressBar now={99} label={"99%"} />
                </div>
                <div>
                    <h4>CSS3</h4>
                    <ProgressBar now={90} label={"90%"} />
                </div>
            </Col>
            <Col>
                <div>
                    <h4>Stakeholder Management</h4>
                    <ProgressBar now={95} label={"95%"} />
                </div>
                <div>
                    <h4>PowerBi Dashboarding</h4>
                    <ProgressBar now={75} label={"75%"} />
                </div>
                <div>
                    <h4>Tableau</h4>
                    <ProgressBar now={75} label={"75%"} />
                </div>
                <div>
                    <h4>NoSQL</h4>
                    <ProgressBar now={60} label={"60%"} />
                </div>
                <div>
                    <h4>Pandas</h4>
                    <ProgressBar now={95} label={"95%"} />
                </div>
                <div>
                    <h4>Tidyverse</h4>
                    <ProgressBar now={90} label={"90%"} />
                </div>
                <div>
                    <h4>ReactJs</h4>
                    <ProgressBar now={75} label={"75%"} />
                </div>
                <div>
                    <h4>bootstrap</h4>
                    <ProgressBar now={85} label={"85%"} />
                </div>

            </Col>
        </Row>
    </Container>
)

