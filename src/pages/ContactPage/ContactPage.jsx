import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap'; 
import emailjs from 'emailjs-com';
import './ContactPage.css';
 

class ContactPage extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            title: props.title,
        } 
    } 
    
    render() {  
        function sendEmail(e) {
            e.preventDefault();    //This is important, i'm not sure why, but the email won't send without it  

            emailjs.sendForm(
                process.env.REACT_APP_SERVICE_ID_EMAILJS, process.env.REACT_APP_TEMPLATE_ID_EMAILJS,
                e.target,
                process.env.REACT_APP_USER_ID_EMAILJS)
              .then((result) => {
                  window.location.reload()
                  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior)
              }, (error) => {
                  console.log(error.text);
              });
        }
        
        return ( 
            <div>
                {this.state.title} 
                <Form className="contact-form" onSubmit={sendEmail}>
                    <Form.Row>
                        <Form.Group controlId="formGridName" className="col-sm-12 col-md-6"> 
                            <Form.Control
                                type="hidden"
                                placeholder="Name"
                                name="to_name"
                                value="Tria Bagus"
                            />
                            <Form.Control
                                type="text"
                                placeholder="Name"
                                name="from_name"
                            />
                        </Form.Group>

                        <Form.Group controlId="formGridEmail" className="col-sm-12 col-md-6"> 
                            <Form.Control
                                type="email"
                                placeholder="Email"
                                name="from_email" 
                            />
                        </Form.Group>
                    </Form.Row> 

                    <Form.Group controlId="formGridSubject"> 
                        <Form.Control
                            type="text"
                            placeholder="Subject"
                            name="from_subject" 
                        />
                    </Form.Group>

                    <Form.Group controlId="exampleForm.message"> 
                        <Form.Control
                            as="textarea"
                            rows="3"
                            placeholder="Message"
                            name="message_html" 
                        />
                    </Form.Group>
                    
                    <Button variant="primary" type="submit" value="send">
                        Send
                    </Button>
                </Form>
            </div>
        );
    }
}
 
export default ContactPage;
 