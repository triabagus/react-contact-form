import React from 'react'; 
import { Nav, Image } from 'react-bootstrap';
import * as Icon from 'react-feather';
import { Link } from 'react-router-dom';
import './Sidebar.css'; 

const Sidebar = props => { 
    return (
        <div>
            <Nav className="col-md-12 d-none d-md-block d-lg-block sidebar"
            activeKey="/" 
            >   
                <Nav.Item>
                    <Image src="https://triabagus.github.io/images/avatar.jpg" className="img-logo" alt="wordpress web developer portfolio tria bagus triabagus" roundedCircle /> 
                </Nav.Item>
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
