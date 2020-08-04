import React from 'react'; 
import { Nav } from 'react-bootstrap';
import * as Icon from 'react-feather';
import './Sidebar.css'; 

const Sidebar = props => { 
    return (
        <div>
            <Nav className="col-md-12 d-none d-md-block d-lg-block bg-dark sidebar"
            activeKey="/" 
            >
                <div className="sidebar-sticky"></div>
                <Nav.Item>
                    <Nav.Link href="/">
                        <Icon.Home />
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/about">
                        <Icon.User />
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/award">
                        <Icon.Award />
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/work">
                        <Icon.Briefcase />
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/contact">
                        <Icon.Send />
                    </Nav.Link>
                </Nav.Item> 
            </Nav>
        </div>
    )
}
 
export default Sidebar
