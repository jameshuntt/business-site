import React, { Component } from 'react';
import { Container, Col, Row } from 'react-bootstrap';

export default class Technologies extends Component {
    render() {
        return (
            <div>
                <Container>
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
                                <p>MongoDB is a file base database. This database is used to store user data.</p>
                            </Col>
                            <Col xs={6} md={3}>
                                <img className="language-icon" src="/assets/Express.svg" />
                                <h4>Express.js</h4>
                                <p>Express.js is a javascript framework built for connecting to your database.</p>
                            </Col>
                            <Col xs={6} md={3}>
                                <img className="language-icon" src="/assets/React.svg" />
                                <h4>React</h4>
                                <p>React is a javascript framework built with efficiency and speed in mind.</p>
                            </Col>
                            <Col xs={6} md={3}>
                                <img className="language-icon" src="/assets/Node.svg" />
                                <h4>Node.js</h4>
                                <p>Node.js is a javascript framework which is helpful with creating a server.</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={6} md={4}>
                                <img className="language-icon" src="/assets/Sass.svg" />
                                <h4>Sass</h4>
                                <p>Implementing the stylings of css, sass is the newest solution for styling your webpage.</p>
                            </Col>
                            <Col xs={6} md={4}>
                                <img className="language-icon" src="/assets/Bootstrap.svg" />
                                <h4>Bootstrap</h4>
                                <p>Bootstrap is the industry standard in implementing easy to use grid system.</p>
                            </Col>
                            <Col xs={12} md={4}>
                                <img className="language-icon" src="/assets/Redux.svg" />
                                <h4>Redux</h4>
                                <p>Redux pairs with React in order to properly manage screen state changes.</p>
                            </Col>
                        </Row>
                    </Container>
            </div>
        )
    }
}
