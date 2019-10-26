import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Backdrop from '../SideNav/Backdrop/Backdrop';
import SideDrawer from '../SideNav/SideDrawer/SideDrawer';
import drawerToggleButton from '../SideNav/SideDrawer/DrawerToggleButton';
import './CustomNavbar.scss';

export default class JamesNavbar extends Component {
  constructor(props) {
      super(props);

      this.state = {
          sideDrawerOpen: false
      }
  }

  drawerToggleClickHandler = () => {
      this.setState((prevState) => {
          return {sideDrawerOpen: !prevState.sideDrawerOpen};
      });
  };

  backdropClickHandler = () => {
      this.setState({sideDrawerOpen: false});
  };

  render() {
      let backdrop;
      if (this.state.sideDrawerOpen) {
          backdrop = <Backdrop click={this.backdropClickHandler} />
      }
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
                <drawerToggleButton className="burger-menu-icon" onClick={this.drawerToggleClickHandler} />
                {/*<input className="burger-menu-icon" type="image" src="/assets/hamburger-menu-icon.jpg" alt="burger" onClick={this.drawerToggleClickHandler} />*/}
                <div className="spacer2" />
                <SideDrawer show={this.state.sideDrawerOpen} />
                {backdrop}
            </div>
        )
    }
}

