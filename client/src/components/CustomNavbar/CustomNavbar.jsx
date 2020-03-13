import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CustomNavbar.scss';

export default class CustomNavbar extends Component {

  state = {
    isHamburgerOpen: true
  }
   
  render() {
    console.log(this.state.isHamburgerOpen)
    const isOpen = this.state.isHamburgerOpen;
        return (
            <div className="navbar-container">
              <div className="navbar-brand">
              <Link to="/" >
                <img src="/assets/Logo.png" />
                <img src="/assets/Logoo.png" />
                </Link>
              </div>
              <div className={ isOpen ? "navbar-links" : "navbar-links-open" }>
                <a onClick={ () => this.setState({isHamburgerOpen: true})}><Link to="/" >Home</Link></a>
                <a onClick={ () => this.setState({isHamburgerOpen: true})}><Link to="/About">About</Link></a>
                <a onClick={ () => this.setState({isHamburgerOpen: true})}><Link to="/CurrentlyServicing">Servicing</Link></a>
                <a onClick={ () => this.setState({isHamburgerOpen: true})}><Link to="/AllServices">Products</Link></a>
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

