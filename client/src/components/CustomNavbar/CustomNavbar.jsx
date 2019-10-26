import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CustomNavbar.scss';

export default class JamesNavbar extends Component {
    render() {
        return (
            <div className="navbar-container">
              <div className="navbar-buttons">
                <Link to="/"><Button variant="outline-light" >Home</Button></Link>
                <Link to="/About"><Button variant="outline-light" >About</Button></Link>
              </div>
              <div className="navbar-left-spacer" />
              <div className="navbar-brand">
                <img src="/assets/Logo.png" />
                <img src="/assets/Logoo.png" />
              </div>
              <div className="navbar-right-spacer" />
              <div className="navbar-buttons">
                <Link to="/CurrentlyServicing"><Button variant="outline-light">Servicing</Button></Link>
                <Link to="/AllServices"><Button variant="outline-light">Products</Button></Link>
              </div>
            </div>
        )
    }
}

