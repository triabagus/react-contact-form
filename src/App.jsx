import React, { Component } from 'react'; 
import {BrowserRouter as Router, Route } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import Sidebar from './components/Sidebar/Sidebar';
import MenuBar from './components/MenuBar/MenuBar';
import './App.css';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import AwardPage from './pages/AwardPage';
import WorkPage from './pages/WorkPage';
import ContactPage from './pages/ContactPage';

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
      award: {
        title: 'award'
      },
      work: {
        title: 'work'
      },
      contact: {
        title:'Let\'s Talk'
      }
    }
  }
  
  render() { 
    return (
    <Router>  
      <Container fluid>
        <Row>
          <Col xs={2} id="sidebar-wrapper">
            <Sidebar />
          </Col>
          <Col xs={10} id="content-wrapper">
            <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} />} />
            
            <Route path="/about" render={() => <AboutPage title={this.state.about.title} />} />
            
            <Route path="/award" render={() => <AwardPage title={this.state.award.title} />} />
              
            <Route path="/work" render={() => <WorkPage title={this.state.work.title} />} />

            <Route path="/contact" render={() => <ContactPage title={this.state.contact.title} />} />
          </Col>
          <MenuBar/>
        </Row>
      </Container>
    </Router>
    );
  }
}
 
export default App;