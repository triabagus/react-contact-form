import React from "react";
import "./AboutPage.css";
import { Container, Row, Col } from "react-bootstrap";

function AboutPage(props) {
  return (
    <div className="pages">
      <div className="about-content">
        <Container fluid>
          <Row className="justify-content-md-center py-3">
            <Col xs={12} md={8}>
              <h1>{props.title}</h1>
              <p>
                Hi, I'm a web developer and have been in this field for more
                than 4 years. It feels good to help and solve problems,
                problems, and logic that is applied to today's technology.
                Regarding web developers, I have participated in several
                training and competitions in the same field. I also contribute
                with several organizations and communities.
              </p> 
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default AboutPage;
