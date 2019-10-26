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
                            <Col>
                                <h3>WebAmbrosia LLC</h3>
                                <h5>518-284-0735</h5>
                                <h5> WebAmbrosia00@gmail.com</h5>
                            </Col>
                            <Col>
                                <h5>Site map</h5>
                                <Link to="/Services"><Button>Services</Button></Link>
                            </Col>
                            <Col>
                            
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
