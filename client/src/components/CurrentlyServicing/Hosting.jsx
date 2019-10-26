import React, { Component } from 'react';
import './CurrentlyServicing.scss';

const pStyle = {
    color: 'red',
    left: '50vw',
    zIndex: '2',
    position: 'absolute',
    display: 'block'
}

export default class Hosting extends Component {
    render() {
        return (
            <div className="hosting-container">
                <p>Hosting</p>
            </div>
        )
    }
}
