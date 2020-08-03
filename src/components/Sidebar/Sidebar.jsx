import React from 'react';
import { Nav } from 'react-bootstrap'; 
import './Sidebar.css';

const Sidebar = props => { 
    return (
        <div>
            <Nav className="col-md-12 d-none d-md-none d-lg-block bg-light sidebar"
            activeKey="/" 
            >
                <div className="sidebar-sticky"></div>
                <Nav.Item>
                    <Nav.Link href="/">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1">About</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2">Contact</Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
    )
}
 
export default Sidebar
