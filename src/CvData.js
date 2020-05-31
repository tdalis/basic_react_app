import React from 'react';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import tasosFace from './assets/imgs/tasosFace.png';
import Figure from 'react-bootstrap/Figure';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from './components/BasicStyles.modules.css';


export const CvData = () => (
  <div>
    <Container>
      {/* Use react bootstrap Row, Col, Container for the CV part: https://react-bootstrap.github.io/layout/grid/ */}
      {/* Use React bootstrap Card to put my personal info here: https://react-bootstrap.github.io/components/cards/ */}
      <Card>
        <Card.Header className="text-center">
          <h2>Tasos Pardalis</h2>
        </Card.Header>
        <Card.Body>
          <Card.Title className="text-center">
            <Col>
              <Figure className="imageCard">
                <Figure.Image
                  width={120}
                  height={120}
                  src={tasosFace}
                />
              </Figure>
            </Col>
            <Col>
              Full-Stack Data Scientist <br /><FontAwesomeIcon icon="map-marker" size="lg" /> London, UK
            </Col>
          </Card.Title>
          <Col className="text-center">
            <a href="mailto:tasos@tasospardalis.com"> <FontAwesomeIcon icon="envelope-open" size="2x" /></a>
            <a href="tel:00447858009627"> <FontAwesomeIcon icon="mobile" size="2x" /></a>
            <a target="_blank" href="https://www.linkedin.com/in/anastasiospardalis"> <FontAwesomeIcon icon={["fab", "linkedin"]} size="2x" /></a>
            <a target="_blank" href="https://www.github.com/tdalis"> <FontAwesomeIcon icon={["fab", "github"]} size="2x" /></a>
          </Col>
          <Card.Text className="text-center">
            I am a full-stack data scientist with the ability to build end-to-end applications that unitilise data analysis and Machine Learning (ML).
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>

    <div className="WorkExpereince">
      <h1>Work Experience</h1>
      <div className="Background">
        <h2>Short Background</h2>
        <p>When I was a child I wanted to be a professional goalkeeper. I used to say <em>I will be the <strong>best</strong> goalkeeper in the world.</em> I was working really hard to achieve my goal, but one day I had a horrible accident during practice and that was it for my professional career. After a while, I came up with a new goal, <em>become a global multimillionaire entrepreneur.</em> I always set hard goals for myself, this way I make sure to work hard every day.</p>
      </div>
    </div>
    <div className="BusinessAnalyst">
      <h2 color="blue">Data Business Analyst</h2>
      <h3>Company: Reckitt Benckiser</h3>
      <h4>Company website: 'https://www.rb.com/</h4>
      <h4>Dates: 2019-09 - 2020-04</h4>
      <h4>Key Responsibilities: Business Analytics, PowerBi, Python, R, Web Scraping, Data Mining, Reporting</h4>
    </div>
    <div className="DataScientist">
      <h2 color="blue">Data Scientist</h2>
      <h3>Company: Reckitt Benckiser</h3>
      <h4>Company website: https://www.rb.com/</h4>
      <h4>Dates: 2019-01 - 2019-09</h4>
      <h4>Key Responsibilities: Machine Learning, Business Analytics, PowerBi, Python, R, Web Scraping, Data Mining, Reporting</h4>
    </div>
  </div>
)
