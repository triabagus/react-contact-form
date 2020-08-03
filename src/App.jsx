import React, { Component } from 'react'; 
import { Container, Row, Col } from 'react-bootstrap';
import Sidebar from './components/Sidebar/Sidebar';
import MenuBar from './components/MenuBar/MenuBar';
import './App.css';

class App extends Component {
  constructor(props) { 
    super(props);
    this.state = {
      title: 'Tria Bagus',
      headerLinks: [
        {title: 'Home', path: '/'},
        {title: 'About', path: '/about'},
        {title: 'Contact', path: '/contact'}
      ],
      home: {
        title: 'Hi, I\'m Tria Bagus',
        subTitle: 'Junior Web Developer',
        textButton: 'Checkout my project below'
      },
      about: {
        title: 'About Me'
      },
      contact: {
        title:'Let\'s Talk'
      }
    }
  }
  
  render() { 
    return ( 
      <Container fluid>
        <Row>
          <Col xs={2} id="sidebar-wrapper">
            <Sidebar />
          </Col>
          <Col xs={10} id="content-wrapper">
            Hi, React
          </Col>
          <MenuBar/>
        </Row>
      </Container>
    );
  }
}
 
export default App;