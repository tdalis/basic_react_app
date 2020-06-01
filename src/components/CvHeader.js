import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col, Image, Figure, Card } from 'react-bootstrap';
import tasosFace from './../assets/imgs/tasosFace.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './BasicStyles.modules.css';
import tasosTaj from './../assets/imgs/tasosTaj.jpg';
import { Jumbotron as Jumbo } from 'react-bootstrap';

const Styles = styled.div`
  .header {
    background: url(${tasosTaj}) no-repeat fixed bottom;
    background-size: cover;
    height: 800px;
    position: relative;

  }
`;

export const CvHeader = () => (
<Styles>
<Container>

{/* Use react bootstrap Row, Col, Container for the CV part: https://react-bootstrap.github.io/layout/grid/ */}
{/* Use React bootstrap Card to put my personal info here: https://react-bootstrap.github.io/components/cards/ */}
    <h2>Tasos Pardalis</h2>
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
    <Col className="text-center">
      <a href="mailto:tasos@tasospardalis.com"> <FontAwesomeIcon icon="envelope-open" size="2x" /></a>
      <a href="tel:00447858009627"> <FontAwesomeIcon icon="mobile" size="2x" /></a>
      <a target="_blank" href="https://www.linkedin.com/in/anastasiospardalis"> <FontAwesomeIcon icon={["fab", "linkedin"]} size="2x" /></a>
      <a target="_blank" href="https://www.github.com/tdalis"> <FontAwesomeIcon icon={["fab", "github"]} size="2x" /></a>
    </Col>
          I am a full-stack data scientist with the ability to build end-to-end applications that unitilise data analysis and Machine Learning (ML).

</Container>
</Styles>
)