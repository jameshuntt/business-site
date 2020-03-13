import React, { Component } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import './Security.scss'
export default class Security extends Component {
    render() {
        return (
            <div>
                <Container className="security-container">
                    <Row>
                        <Col>
                            <h2 className = "security-home-heading">Security</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12} lg={6} className="security-content">
                            <img style={{height: 'auto', width: '20vw', minWidth: '200px'}} src="/assets/SSL.png" />
                            <h4>SSL</h4>
                            <p className="security-text">SSL makes sure all you and your user's sensitive information
                                 is encrypted, this makes it impossible for anyone but the 
                                 intended recipient to access the information.</p>
                        </Col>
                        <Col md={12} lg={6} className="security-content">
                            <img style={{height: 'auto', width: '10vw', minWidth: '100px'}} src="/assets/bcrypt-logo.jpg" />
                            <h4> Password Hashing</h4>
                            <p className="security-text">Bcrypt is a password hashing fuction that helps us keep  you and all of your user's passwords safe.</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
