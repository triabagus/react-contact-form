import React from 'react';
import './HomePage.css';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function HomePage(props) {

    return(
        <div className="pages">
            <div className="home-page-hero pages-border"> 
                <Row className="text-white px-5">
                    <Col className="center-sm">
                        <h1 className="title-hero">{props.title}</h1>
                    </Col>
                </Row>  
                <Row className="text-white px-5">
                    <Col className="center-sm">
                        <p className="subtitle-hero">{props.subTitle}</p>
                        <Link to="/work" className="btn btn-outline-light">  {props.textButton}
                        </Link>
                    </Col>
                </Row> 
            </div>
        </div>
    );

}

export default HomePage;