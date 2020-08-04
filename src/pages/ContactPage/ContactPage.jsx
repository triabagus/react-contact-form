import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import './ContactPage.css';
// import emailjs from 'emailjs-com';

class ContactPage extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            title: props.title
        }
    } 

    render() { 
        return ( 
            <div>
                {this.state.title}
                
                <Form>
                    <Form.Row>
                        <Form.Group controlId="formGridName" className="col-sm-12 col-md-6"> 
                            <Form.Control type="text" placeholder="Name" />
                        </Form.Group>

                        <Form.Group controlId="formGridEmail" className="col-sm-12 col-md-6"> 
                            <Form.Control type="email" placeholder="Email" />
                        </Form.Group>
                    </Form.Row> 

                    <Form.Group controlId="exampleForm.message"> 
                        <Form.Control as="textarea" rows="3" placeholder="Message" />
                    </Form.Group>
                    
                    <Button variant="primary" type="submit">
                        Send
                    </Button>
                </Form>
            </div>
        );
    }
}
 
export default ContactPage;