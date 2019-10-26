import React, { Component } from 'react';
import { UserCard } from 'react-ui-cards';

const founders = {
    display: 'flex',
    flexDirection: 'row'
}

export default class Chase extends Component {
    render() {
        return (
            <div style={founders}>
                <p>
                    specializing in front end development, chase is the leader in styling your projects.
                    A typical Renessaince man. Need your car fixed? Need help with hardware? Need your
                    Rubik's Cube solved? How about electrical engineering? Whatever the task, Chase is a
                    natural leader with a plethora of knowledge and skills. Chase is the perfect candidate
                    for an all around 
                </p>
                <div>
                    <p>Chase is an expert in, but is not limited to:</p>
                    <p>Python</p>
                    <p>Reactjs</p>
                    <p>Nodejs</p>
                    <p>Sass</p>
                </div>
                <UserCard name="Chase"></UserCard>
            </div>
        )
    }
}
