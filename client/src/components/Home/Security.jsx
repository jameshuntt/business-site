import React, { Component } from 'react';
import { Container, Col, Row } from 'react-bootstrap';

export default class Security extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col>
                            <h2>Security</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <img style={{height: '20vh'}} src="/assets/SSL.png" />
                            <h4>SSL</h4>
                            <p>security shit</p>
                        </Col>
                        <Col>
                            <img style={{height: '20vh'}} src="/assets/bcrypt-logo.jpg" />
                            <h4>Hashing</h4>
                            <p>security shit</p>
                        </Col>
                        <Col>
                            <img src="" />
                            <h4>Booby Traps</h4>
                            <p>security shit</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
