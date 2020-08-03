import React from 'react';
import { Navbar } from 'react-bootstrap'; 
import './MenuBar.css';

const MenuBar = props => { 
    return (
        <div>
            <Navbar fixed="bottom" className="col-md-12 d-sm-block d-md-block d-lg-none bg-dark">
                menu bar
            </Navbar>
        </div>
    )
}
 
export default MenuBar
