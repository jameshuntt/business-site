import React, { Component } from 'react';
import { UserCard } from 'react-ui-cards';

const founders = {
    display: 'flex',
    flexDirection: 'row'
}

export default class Rao extends Component {
    render() {
        return (
            <div styly={founders}>
                <UserCard name="Rao"></UserCard>
                <p>Specializing in data structures, Rao a</p>
            </div>
        )
    }
}
