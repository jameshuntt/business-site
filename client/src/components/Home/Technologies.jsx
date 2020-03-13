import React, { Component } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import './Technologies.scss'
export default class Technologies extends Component {
    render() {
        return (
            <div>
                <Container className="technologies-container">
                        <Row>
                            <Col>
                                <h2>Latest Technology we use</h2>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <hr className="technology-line" color="orange" />
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={6} md={3}>
                                <img className="language-icon" src="/assets/MongoDB.svg" />
                                <h4>mongoDB</h4>
                                <p>MongoDB is a file base database, opposed to traditional database solutions for storing data.</p>
                            </Col>
                            <Col xs={6} md={3}>
                                <img className="language-icon" src="/assets/Express.svg" />
                                <h4>Express.js</h4>
                                <p>Express.js is a javascript framework to that allows the website communicate to your database.</p>
                            </Col>
                            <Col xs={6} md={3}>
                                <img className="language-icon" src="/assets/React.svg" />
                                <h4>React</h4>
                                <p>React is a javascript framework built with efficiency and speed in mind.</p>
                            </Col>
                            <Col xs={6} md={3}>
                                <img className="language-icon" src="/assets/Node.svg" />
                                <h4>Node.js</h4>
                                <p>Node.js is a javascript runtime built on Chrome's V8 javascript engine.</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={6} md={4}>
                                <img className="language-icon" src="/assets/Sass.svg" />
                                <h4>Sass</h4>
                                <p>Sass is the newest solution for styling your webpage, it's traditional CSS but with Super Powers.</p>
                            </Col>
                            <Col xs={6} md={4}>
                                <img className="language-icon" src="/assets/Bootstrap.svg" />
                                <h4>Bootstrap</h4>
                                <p>Bootstrap is the most popular CSS Framework for developing responsive and mobile-first websites.</p>
                            </Col>
                            <Col xs={12} md={4}>
                                <img className="language-icon" src="/assets/Redux.svg" />
                                <h4>Redux</h4>
                                <p>Redux is a javascript library for managing application state.</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <hr className="technology-line" color="orange" />
                            </Col>
                        </Row>
                    </Container>
            </div>
        )
    }
}
