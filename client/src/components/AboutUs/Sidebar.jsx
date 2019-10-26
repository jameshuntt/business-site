import React, { Component } from 'react';
import { MemoryRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Chase from './Founders/Chase';
import Elijah from './Founders/Elijah';
import James from './Founders/James';
import Rao from './Founders/Rao';
import './Sidebar.scss';

const SidebarStyle = {
    width: '90vw',
    backgroundColor: 'gray',
    height: '8vh',
    overFlow: 'visible'
}

const ListStyle = {
    listStyle: 'none',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: '0',
    paddingLeft: '0'
}

export default class Sidebar extends Component {
    render() {
        return (
            <div style={SidebarStyle}>
                <Router>
                    <div>
                        <ul style={ListStyle}>
                            <li>
                                <Link to="/Chase"><Button className="founders-button">Chase</Button></Link>
                            </li>
                            <li>
                                <Link to="/Elijah"><Button className="founders-button">Elijah</Button></Link>
                            </li>
                            <li>
                                <Link to="/James"><Button className="founders-button">James</Button></Link>
                            </li>
                            <li>
                                <Link to="/Rao"><Button className="founders-button">Rao</Button></Link>
                            </li>
                        </ul>
                        <Switch>
                            <Route path="/Chase" component={Chase} />
                            <Route path="/Elijah" component={Elijah} />
                            <Route path="/James" component={James} />
                            <Route path="/Rao" component={Rao} />
                        </Switch>
                    </div>
                </Router>
            </div>
        )
    }
}
