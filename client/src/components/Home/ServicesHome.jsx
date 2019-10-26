import React, { Component } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Hosting from '../svgs/Hosting';
import WebDev from '../svgs/WebDev';
import Maintanence from '../svgs/Maintanence';
import AppDev from '../svgs/AppDev';
import CustomSoftware from '../svgs/CustomSoftware';
import './ServicesHome.scss';

export default class ServicesHome extends Component {
    render() {
        return (
            <div className="services-container">
                <Container>
                    <Row>
                        <Col>
                            <Link to="/AllServices"><h2 className="services-home-heading">Services we offer</h2></Link>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <hr className="services-horizontal-line" color="black" />
                        </Col>
                    </Row>

                    <Row className="top-services-row">
                        <Col>
                            <Link to="/Hosting"><Hosting /></Link>
                        </Col>
                        <Col>
                            <h4 className="services-label">Hosting</h4>
                        </Col>
                        <Col>
                            <p>
                                With the options of self maintanence and maintanence through us,
                                we can post your websites on the internet. We pride ourselves in
                                having 99% uptime guaranteed.                                
                            </p>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <hr className="services-horizontal-line" color="black" />
                        </Col>
                    </Row>

                    <Row className="services-row">
                        <Col>
                            <p>
                                Utilizing the most up to date technologies, we have all of the tools
                                necessary to meet all of your web development needs.
                            </p>
                        </Col>
                        <Col>
                            <h4 className="services-label">Web Development</h4>
                        </Col>
                        <Col>
                            <Link to="/WebDevelopment"><WebDev /></Link>
                        </Col>
                    </Row>
                    
                    <Row>
                        <Col>
                            <hr className="services-horizontal-line" color="black" />
                        </Col>
                    </Row>

                    <Row className="services-row">
                        <Col>
                            <Link to="/WebMaintanence"><Maintanence /></Link>
                        </Col>
                        <Col>
                            <h4 className="services-label">Web Maintanence</h4>
                        </Col>
                        <Col>
                            <p>
                                Whether you would like to maintain your own site or have us do it,
                                we make updates a breeze by providing access to your own personal
                                cPanel account with training!
                            </p>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <hr className="services-horizontal-line" color="black" />
                        </Col>
                    </Row>

                    <Row className="services-row">
                        <Col>
                            <p>
                                Utilizing NativeScripting languages we are versed in professional
                                mobile phone applications supporting all availeble operating systems.
                            </p>
                        </Col>
                        <Col>
                            <h4 className="services-label">App Development</h4>
                        </Col>
                        <Col>
                            <Link to="/AppDevelopment"><AppDev /></Link>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <hr className="services-horizontal-line" color="black" />
                        </Col>
                    </Row>

                    <Row className="services-row">
                        <Col>
                            <Link to="/CustomSoftware"><CustomSoftware /></Link>
                        </Col>
                        <Col>
                            <h4 className="services-label">Custom Software</h4>
                        </Col>
                        <Col>
                            <p>
                                No matter what the utilization of your intended software, we can provide
                                a professional approach to tackling all of your custom software needs.
                            </p>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <hr className="services-horizontal-line" color="black" />
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
