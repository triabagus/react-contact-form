import React from 'react';
import { Nav } from 'react-bootstrap';
import * as Icon from 'react-feather';
import './Sidebar.css';

const Sidebar = props => { 
    return (
        <div>
            <Nav className="col-md-12 d-none d-md-none d-lg-block bg-light sidebar"
            activeKey="/" 
            >
                <div className="sidebar-sticky"></div>
                <Nav.Item>
                    <Nav.Link href="/">
                        <Icon.Home />
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1">
                        <Icon.User />
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1">
                        <Icon.Award />
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1">
                        <Icon.Briefcase />
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2">
                        <Icon.Send />
                    </Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
    )
}
 
export default Sidebar
