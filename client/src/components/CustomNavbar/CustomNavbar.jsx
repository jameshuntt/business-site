import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CustomNavbar.scss';

export default class JamesNavbar extends Component {
   
  state = {
    isHamburgerOpen: false,
  }
   
  render() {
    console.log(this.state.isHamburgerOpen)
    const isOpen = this.state.isHamburgerOpen;
        return (
            <div className="navbar-container">
              <div className="navbar-brand">
                <img src="/assets/Logo.png" />
                <img src="/assets/Logoo.png" />
              </div>
              <div className={ isOpen ? "navbar-links" : "navbar-links-open" }>
                <a onClick={ () => this.setState({isOpen: false})}><Link to="/" >Home</Link></a>
                <a><Link to="/About">About</Link></a>
                <a><Link to="/CurrentlyServicing">Servicing</Link></a>
                <a><Link to="/AllServices">Products</Link></a>
              </div>
              <div className={ isOpen ? "hamburger" : "hamburger-open"} onClick={ () => this.setState({isHamburgerOpen: !isOpen})}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
              </div>
            </div>
        )
    }
}

