import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col, Image, Figure, Card } from 'react-bootstrap';
import tasosFace from './../assets/imgs/tasosFace.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './BasicStyles.modules.css';
import tasosTaj from './../assets/imgs/tasosTaj.jpg';
import { Jumbotron as Jumbo } from 'react-bootstrap';

const Styles = styled.div`
  .tagLine {
    margin-bottom = 10px;
  }
`;

export const CvHeader = () => (
  <Container fluid>
    <Row>
      <Col className = "text-center">
        <Figure>
          <Figure.Image
            width={180}
            height={180}
            src={tasosFace}
          />
        </Figure>
      </Col>
    </Row>
    <Row>
      <Col>
        <h2 className="text-center">Tasos Pardalis</h2>
      </Col>
    </Row>

    <Row>
      <Col>
        <h2 className="text-center tagLine">Full-Stack Data Scientist <br /><FontAwesomeIcon icon="map-marker" size="lg" /> London, UK</h2>
      </Col>
    </Row>
    <Row>
      <Col className="text-center">
        <a href="mailto:tasos@tasospardalis.com"> <FontAwesomeIcon icon="envelope-open" size="2x" /></a>
        <a href="tel:00447858009627"> <FontAwesomeIcon icon="mobile" size="2x" /></a>
        <a target="_blank" href="https://www.linkedin.com/in/anastasiospardalis"> <FontAwesomeIcon icon={["fab", "linkedin"]} size="2x" /></a>
        <a target="_blank" href="https://www.github.com/tdalis"> <FontAwesomeIcon icon={["fab", "github"]} size="2x" /></a>
      </Col>
    </Row>
    <Row>
      <Col className = "text-center">
      <p>I am a full-stack data scientist with the ability to build end-to-end applications that unitilise data analysis and Machine Learning (ML).</p>
      </Col>
    </Row>
  </Container>
)