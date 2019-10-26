import React from 'react';
import './App.css';
import CustomNavbar from './components/CustomNavbar/CustomNavbar';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import CurrentlyServicing from './components/CurrentlyServicing/CurrentlyServicing';
import AboutUs from './components/AboutUs/AboutUs';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import AllServices from './components/Services/Services';

function App() {
  return (
    <div className="App">
        <CustomNavbar />
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/CurrentlyServicing" component={CurrentlyServicing} />
            <Route path="/About" component={AboutUs} />
            <Route path="/Contact" component={Contact} />
            <Route path="/AllServices" component={AllServices} />
        </Switch>
        <Footer />
    </div>
  );
}

export default App;
