import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CustomNavbar.scss';

export default class JamesNavbar extends Component {
    render() {
        return (
            <div className="navbar-container">
              <div className="navbar-brand">
                <img src="/assets/Logo.png" />
                <img src="/assets/Logoo.png" />
              </div>
              <div className="navbar-links">
                <a><Link to="/">Home</Link></a>
                <a><Link to="/About">About</Link></a>
                <a><Link to="/CurrentlyServicing">Servicing</Link></a>
                <a><Link to="/AllServices">Products</Link></a>
              </div>
              <div className="Hamburger">
                <div className="Line"></div>
                <div className="Line"></div>
                <div className="Line"></div>
              </div>
            </div>
        )
    }
}

