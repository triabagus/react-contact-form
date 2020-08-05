import React from 'react'; 
import { Nav } from 'react-bootstrap';
import * as Icon from 'react-feather';
import { Link } from 'react-router-dom';
import './Sidebar.css'; 

const Sidebar = props => { 
    return (
        <div>
            <Nav className="col-md-12 d-none d-md-block d-lg-block bg-dark sidebar"
            activeKey="/" 
            >
                <div className="sidebar-sticky"></div>
                <Nav.Item>
                    <Link to="/" className="nav-link">
                        <Icon.Home />
                    </Link>
                </Nav.Item>
                <Nav.Item>
                    <Link to="/about" className="nav-link">
                        <Icon.User />
                    </Link>
                </Nav.Item>
                <Nav.Item>
                    <Link to="/award" className="nav-link">
                        <Icon.Award />
                    </Link>
                </Nav.Item>
                <Nav.Item>
                    <Link to="/work" className="nav-link">
                        <Icon.Briefcase />
                    </Link>
                </Nav.Item>
                <Nav.Item>
                    <Link to="/contact" className="nav-link">
                        <Icon.Send />
                    </Link>
                </Nav.Item> 
            </Nav>
        </div>
    )
}
 
export default Sidebar
