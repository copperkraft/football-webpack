import React, { Component } from 'react';

export default class TeamPage extends Component {
    constructor(match) {
        super();
        this.id = match.params.id;
    }
    render() {
        return (
            <div>
                <h1>Team #{id}</h1>
            </div>
        );
    }
}