import React, { Component } from 'react';
import { Container, Col, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.scss';

export default class Footer extends Component {
    render() {
        return (
            <div>
                <div className="footer">
                    <Container>
                        <Row>
                            <Col xs={12}>
                            <hr color="#ffa06d" />                            
                            </Col>
                        </Row>
                        <Row>
                            <Col  sm ={12} md={6} lg={4}  className="footer-contact">
                                <h3>Contact</h3>
                                <h5>WebAmbrosia LLC</h5>
                                <h5>518-284-0735</h5>
                                <h5> WebAmbrosia00@gmail.com</h5>
                            </Col>
                            <Col sm ={12} md={6} lg={4} className="footer-sitemap">
                                <h3>Site Map</h3>
                                <Link to="/">Home</Link>
                                <br/>
                                <Link to="/About">About</Link>
                                <br/>
                                <Link to="/CurrentlyServicing">Servicing</Link>
                                <br/>
                                <Link to="/AllServices">Products</Link>
                                <br/>
                                <Link to="/Contact">Contact</Link>
                            </Col>
                            <Col sm ={12} md={12} lg={4} className="footer-social">
                                <h3>Follow Us On</h3>

                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12}>
                                <hr color="#ffa06d" />
                                Copyright WebAmbrosia @2019
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        )
    }
}
