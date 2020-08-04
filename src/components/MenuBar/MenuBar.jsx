import React from 'react';
import { Navbar, Nav } from 'react-bootstrap'; 
import * as Icon from 'react-feather';
import './MenuBar.css';

const MenuBar = props => { 
    return (
        <div>
            <Navbar fixed="bottom" className="col-md-12 d-sm-block d-md-none d-lg-none bg-dark menuBar">
                <Nav justify className="justify-content-center" activeKey="/">
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
            </Navbar>
        </div>
    )
}
 
export default MenuBar
