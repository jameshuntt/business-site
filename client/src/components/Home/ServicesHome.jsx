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
                        <Col >
                            <Link to="/AllServices"><h2 className="services-home-heading">Services we offer</h2></Link>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <hr className="services-horizontal-line" color="black" />
                        </Col>
                    </Row>

                    <Row className="top-services-row">
                        <Col md={12} lg={4}>
                            <Link to="/Hosting"><Hosting /></Link>
                        </Col>
                        <Col md={12} lg={4}>
                            <h4 className="services-label">Hosting</h4>
                        </Col>
                        <Col md={12} lg={4}>
                            <p>
                                With the options of self maintanence or professional maintanence through us,
                                we can host your websites on the internet. We pride ourselves in
                                our 99% uptime guarantee.                                
                            </p>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <hr className="services-horizontal-line" color="black" />
                        </Col>
                    </Row>

                    <Row className="services-row">
                        <Col md={12,{order:3}} lg={4}>
                            <Link to="/WebDevelopment"><WebDev /></Link>
                        </Col>
                        <Col md={12,{order:2}} lg={4}>
                            <h4 className="services-label">Web Development</h4>
                        </Col>
                        <Col md={12,{order:1}} lg={4}>
                            <p>
                                Utilizing the most up to date technologies, we have all of the tools
                                necessary to meet all of your development needs, and ensure your software is top of the line.
                            </p>
                        </Col>
                        
                    </Row>
                    
                    <Row>
                        <Col>
                            <hr className="services-horizontal-line" color="black" />
                        </Col>
                    </Row>

                    <Row className="services-row">
                        <Col md={12} lg={4}>
                            <Link to="/WebMaintanence"><Maintanence /></Link>
                        </Col>
                        <Col md={12} lg={4}>
                            <h4 className="services-label">Web Maintanence</h4>
                        </Col>
                        <Col md={12} lg={4}>
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
                        <Col md={12,{order:3}} lg={4}>
                            <Link to="/AppDevelopment"><AppDev /></Link>
                        </Col>
                        <Col md={12,{order:2}} lg={4}>
                            <h4 className="services-label">App Development</h4>
                        </Col>
                        <Col md={12,{order:1}} lg={4}>
                            <p>
                                Utilizing Native Scripting languages we are well versed in professional
                                mobile phone applications supporting all available operating systems, and mobile platforms.
                            </p>
                        </Col>
                        
                    </Row>

                    <Row>
                        <Col>
                            <hr className="services-horizontal-line" color="black" />
                        </Col>
                    </Row>

                    <Row className="services-row">
                        <Col md={12} lg={4}>
                            <Link to="/CustomSoftware"><CustomSoftware /></Link>
                        </Col>
                        <Col md={12} lg={4}>
                            <h4 className="services-label">Custom Software</h4>
                        </Col>
                        <Col md={12} lg={4}>
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
