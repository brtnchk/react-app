import React, { Component } from 'react';

export default class AppHeader extends Component {
    render() {
        const { todoCount, doneCount } = this.props;
        return (
            <div>
                <h1>Todo</h1>
                <h5>Todo: { todoCount }, Done: { doneCount }</h5>
            </div>
        )
    }
}