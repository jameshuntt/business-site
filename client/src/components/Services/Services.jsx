import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Services.scss';
import { Container, Col, Row, Button } from 'react-bootstrap';
import WebDevelopmentContact from './WebDevelopmentContact';
import Hosting from '../svgs/Hosting';
import CustomSoftware from '../svgs/CustomSoftware';
import WebDev from '../svgs/WebDev';
import AppDev from '../svgs/AppDev';

export default class Services extends Component {
    constructor(props){
        super(props);
        this.state = { showPopup: false };
    }
      
    togglePopup() {
     this.setState({
        showPopup: !this.state.showPopup
      });
    }
    render() {
        return (
            <div className="all-services-main-container">
                <Container>
                    <Row>
                        <Col>
                            <br />
                            <h3>Services</h3>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <hr className="services-line" color="red" />
                            <br />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={4}>
                            <p>
                                Here at WebAmbrosia, we understand that every project is unique. Based upon this understanding, 
                                we do not have set rates for all of our services. The only set prices that we have are for hosting 
                                and premade software. For other services please fill out our contact form and we will get back to you 
                                within 48 hours.
                            </p>
                        </Col>
                        <Col xs={12} md={4}>
                            <Hosting />
                            <h4>Hosting</h4>
                            <Button>Hosting Prices</Button>
                        </Col>
                        <Col xs={12} md={4}>
                            <Hosting />
                            <h4>Premade software</h4>
                            <Button>Premade software pricing</Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12}>
                            <br />
                            <br />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={4}>
                            <AppDev />
                            <h4>App development</h4>
                            <Button onClick={this.togglePopup.bind(this)}>Request a quote</Button>
                        </Col>
                        <Col xs={12} md={4}>
                            <WebDev />
                            <h4>Web Development</h4>
                            <Button>Request a quote</Button>
                        </Col>
                        <Col xs={12} md={4}>
                            <CustomSoftware />
                            <h4>Custom software</h4>
                            <Button>Request a quote</Button>
                        </Col>
                    </Row>
                    {this.state.showPopup ?
                        <WebDevelopmentContact
                        text='Click "Close Button" to hide popup'
                        closePopup={this.togglePopup.bind(this)}
                        />
                        : null
                    }
                </Container>
            </div>
        )
    }
}
