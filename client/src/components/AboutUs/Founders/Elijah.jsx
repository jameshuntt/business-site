import React, { Component } from 'react';
import {Card} from 'react-bootstrap';

export default class Elijah extends Component {
    render() {
        return (
            <Card>
            <Card.Body>
                <Card.Img variant="top" src="./assets/user-empty-avatar.png"/>
                <Card.Title>Elijah</Card.Title>
                <Card.Subtitle>Web Developer</Card.Subtitle>
                <Card.Text>
                    Specializing in front end development, Elijah is the leader in styling your projects.
                    A typical Renessaince man. Need your car fixed? Need help with hardware? Need your
                    Rubik's Cube solved? How about electrical engineering? Whatever the task, Elijah is a
                    natural leader with a plethora of knowledge and skills. Elijah is the perfect candidate
                    for an all around 
                </Card.Text>
            </Card.Body>
        </Card>
        )
    }
}
