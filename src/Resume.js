import React from 'react';
// import styled from 'styled-components';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import styles from './components/BasicStyles.modules.css';
import { CvJumbotron } from './components/CvJumbotron';
import { CvHeader } from './components/CvHeader';
import { Row, Col } from 'react-bootstrap';
import { LongStatement } from './components/LongStatement';


export const Resume = () => (
  <div>
    <Row>
      <Col sm={4}>
        <CvHeader />
        <LongStatement />
      </Col>
      <Col sm={8}>
        <CvJumbotron />
      </Col>
    </Row>


  </div>
)
