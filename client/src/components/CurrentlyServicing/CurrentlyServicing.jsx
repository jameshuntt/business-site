import React, { Component } from 'react';
import Sidebar from './Sidebar';
import './CurrentlyServicing.scss';

export default class CurrentlyServicing extends Component {
        render() {
            return (
            <div className="currently-servicing-main-container">
                <div className="currently-servicing-sub-container-one">
                    <h1>
                        Currently servicing
                    </h1>
                    <Sidebar />
                </div>
            </div>
        )
    }
}
