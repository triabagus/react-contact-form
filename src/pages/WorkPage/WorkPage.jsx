import React from 'react';
import './WorkPage.css';
import { Container, Row, Col } from 'react-bootstrap';

function WorkPage(props) {

    return(
        <div className="pages">
            <div className="work-content pages-border">
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

export default WorkPage;