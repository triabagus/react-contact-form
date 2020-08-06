import React from 'react';
import './AboutPage.css';
import { Container, Row, Col } from 'react-bootstrap'; 

function AboutPage(props) {

    return(
        <div className="pages">
            <div className="about-content pages-border">
            <Container fluid>    
                <Row className="justify-content-md-center py-5">
                <Col>
                {props.title} 
                </Col>
                </Row>
            </Container>    
            </div>
        </div>
    );

}

export default AboutPage;