import React, { Component } from 'react';
import Sidebar from './Sidebar';
import './AboutUs.scss';

export default class AboutUs extends Component {
    render() {
        return (
            <div className="about-main-container">
                <div className="about-sub-container">
                    <div className="about-sub-container-div-one">
                        <h3>
                            Fresh out of college our team of devalopers is equipped with the
                            current technologies to meet all of your development needs.
                        </h3>
                        <p>shit</p>
                    </div>
                    <div className="about-sub-container-div-two">
                        <p>
                            December 2018 was the month. Commuting from many different areas of 
                            upstate new york, our team came together in the most unique way. 
                            Utilizing all of the resources and clubs that Schenectady County Community 
                            College, our team came together as a result of the many clubs the university 
                            offered. We are merely a group of friends who found passion in computer 
                            science. 
                        </p>
                        <h1>Scroll down to view the team</h1>
                    </div>
                </div>
                <div className="founders" style={{ display: 'flex', flexDirection: 'row' }}>
                    <div className="vertical-founders-spacer" />
                    <div className="founders-sub-container">
                        <Sidebar />
                        <div className="horizontal-founders-spacer" />
                    </div>
                    <div className="vertical-founders-spacer" />
                </div>
            </div>
        )
    }
}
