import React, { Component } from 'react';
import './filter-panel.css'

export default class FilterPanel extends Component {
    filter = (action) => {
        console.log(action)
    };
    render() {
        return (
            <div className="btn-group filter-buttons">
                <button
                    className="btn btn-secondary"
                    onClick={ this.filter.bind(this, 'All') }
                >All</button>
                <button
                    className="btn btn-secondary"
                    onClick={ this.filter.bind(this, 'Active') }
                >Active</button>
                <button
                    className="btn btn-secondary"
                    onClick={ this.filter.bind(this, 'Done') }
                >Done</button>
            </div>
        )
    }
}