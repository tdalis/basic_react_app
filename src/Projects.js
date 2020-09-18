import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
// import ResponsiveEmbed from 'react-bootstrap/ResponsiveEmbed';

export const Projects = () => (
    <Container fluid className="text-center">
        <Row>
            <Col>
                <Row>
                    <h2>Projects Coming Soon</h2>
                </Row>
                <Row>
                    <Col>
                        <Row>
                            <iframe src="https://giphy.com/embed/jaXDDTuKmeJvwI56kV" width="680" height="470" frameBorder="0" class="giphy-embed" allowFullScreen title = "coming soon"></iframe>
                        </Row>
                        <Row>
                            <p><a href="https://giphy.com/gifs/gadischwartz-nbc-news-gadi-schwartz-jaXDDTuKmeJvwI56kV">via GIPHY</a></p>
                        </Row>
                    </Col>
                </Row>
            </Col>
        </Row>
    </Container>
)
