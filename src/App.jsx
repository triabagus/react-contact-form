import React, { Component } from 'react'; 
import {BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Sidebar from './components/Sidebar/Sidebar';
import MenuBar from './components/MenuBar/MenuBar';
import Preloader from './components/Preloader/Preloader';
import './App.css';

import HomePage from './pages/HomePage/HomePage';
import AboutPage from './pages/AboutPage/AboutPage';
import AwardPage from './pages/AwardPage/AwardPage';
import WorkPage from './pages/WorkPage/WorkPage';
import ContactPage from './pages/ContactPage/ContactPage';

class App extends Component {
  constructor(props) { 
    super(props);
    this.state = {
      loading: true,
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

  sleep = milliseconds => {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
  };

  wait = async (milliseconds = 1000) => {
    await this.sleep(milliseconds);
    this.setState({ 
      loading: false
    });
  };

  componentDidMount() {
    this.wait(5000); 
  }
  
  render() { 
    if (this.state.loading) return  <Preloader />;
    return (
      <Router>
      <Container fluid="false"> 
            <Sidebar />
            <div className="main-content">  
            <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} textButton={this.state.home.textButton} />} />
            
            <Route path="/about" render={() => <AboutPage title={this.state.about.title} />} />
            
            <Route path="/award" render={() => <AwardPage title={this.state.award.title} />} />
              
            <Route path="/work" render={() => <WorkPage title={this.state.work.title} />} />

            <Route path="/contact" render={() => <ContactPage title={this.state.contact.title} />} />
            </div> 
          <MenuBar/> 
      </Container>
    </Router>
    );
  }
}
 
export default App;