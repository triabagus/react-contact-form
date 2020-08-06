import React from 'react';
import './AwardPage.css';
import { Container, Row, Col } from 'react-bootstrap';

function AwardPage(props) {

    return(
        <div className="pages">
            <div className="award-content  ">
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

export default AwardPage;