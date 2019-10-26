import React, { Component } from 'react';
import { MemoryRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Hosting from './Hosting';
import WebDev from './WebDev';
import AppDev from './AppDev';
import CustomSoftware from'./CustomSoftware';
import Maintanence from './Maintanence';

const SidebarStyle = {
    width: '15vw',
    borderStyle: 'solid',
    borderRadius: '2%',
    borderWidth: '1px',
    height: '70vh',
    overFlow: 'visible',
    marginLeft: '5vw',
    marginTop: '2px',
    backgroundColor: 'gray'
}

const ListStyle = {
    listStyle: 'none',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    justifyItems: 'center'
}

export default class Sidebar extends Component {
    render() {
        return (
            <div style={SidebarStyle}>
                <Router>
                    <div>
                        <h2>Categories</h2>
                        <ul style={ListStyle}>
                            <li>
                                <Link to="/hosting"><Button>Hosting</Button></Link>
                            </li>
                            <li>
                                <Link to="/webdev"><Button>Web Development</Button></Link>
                            </li>
                            <li>
                                <Link to="/appdev"><Button>App Development</Button></Link>
                            </li>
                            <li>
                                <Link to="/customsoftware"><Button>Custom Software</Button></Link>
                            </li>
                            <li>
                                <Link to="/maintanence"><Button>Maintanence</Button></Link>
                            </li>
                        </ul>
                        <Switch>
                            <Route path="/hosting" component={Hosting} />
                            <Route path="/webdev" component={WebDev} />
                            <Route path="/appdev" component={AppDev} />
                            <Route path="/customsoftware" component={CustomSoftware} />
                            <Route path="/maintanence" component={Maintanence} />
                        </Switch>
                    </div>
                </Router>
            </div>
        )
    }
}
