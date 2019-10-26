import React, { Component } from 'react';
import { UserCard } from 'react-ui-cards';

const founders = {
    display: 'flex',
    flexDirection: 'column',
    height: '50vh'
}

export default class James extends Component {
    render() {
        return (
            <div style={founders}>
                <div style={{ display: 'flex', flexDirection: 'row'}}>
                    <p>
                        James is the wild card in the bunch. In every team you need someone to spice things up.
                        With the goal of attending Medical School, nobody really knows why he pursues code with
                        such passion and perseverance. The only logical explanation is that he is not logical by
                        any means. James is just a young adult with incredible ADHD.
                    </p>
                    <UserCard float name="James" positionName="Co-owner and Developer" float></UserCard>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row'}}>
                    <h2>James favorite languages include</h2>
                    <img style={{ height: '10vh'}} src="/assets/React.svg" />
                    <img style={{ height: '10vh'}} src="/assets/Express.svg" />
                    <img style={{ height: '10vh'}} src="/assets/Node.svg" />
                </div>
            </div>
        )
    }
}
