import React from 'react';
import { Navbar, Nav } from 'react-bootstrap'; 
import * as Icon from 'react-feather';
import { Link } from 'react-router-dom';
import './MenuBar.css';

const MenuBar = props => { 
    return (
        <div>
            <Navbar fixed="bottom" className="col-md-12 d-sm-block d-md-none d-lg-none bg-dark menuBar">
                <Nav justify className="justify-content-center" activeKey="/">
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
            </Navbar>
        </div>
    )
}
 
export default MenuBar
