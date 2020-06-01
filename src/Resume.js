import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from './components/BasicStyles.modules.css';
import { CvJumbotron } from './components/CvJumbotron';
import { CvHeader } from './components/CvHeader';
import { Row, Container, Col } from 'react-bootstrap';

export const Resume = () => (
  <div>
    <Row>
      <Col sm={4}>
        <CvHeader />
      </Col>
      <Col sm={8}>
        <CvJumbotron />
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
      </Col>
    </Row>


  </div>
)
