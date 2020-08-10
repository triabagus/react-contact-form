import React, { Component } from 'react'; 
import {BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';  
import Preloader from './components/Preloader/Preloader';
import './App.css'; 
import ContactPage from './pages/ContactPage/ContactPage';

class App extends Component {
  constructor(props) { 
    super(props);
    this.state = {
      loading: true, 
      home: {
        title: 'Let\'s Talk', 
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
            <div className="main-content">   
              <Route path="/" exact render={() => <ContactPage title={this.state.home.title} />} />
            </div>  
      </Container>
    </Router>
    );
  }
}
 
export default App;