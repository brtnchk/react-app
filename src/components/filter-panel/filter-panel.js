import React, { Component } from 'react';
import './filter-panel.css'

export default class FilterPanel extends Component {
    cfilter = (action) => {
        console.log(this)
    }
    render() {
        return (
            <div className="btn-group filter-buttons">
                <button
                    className="btn btn-secondary"
                    onClick={ this.cfilter.bind(this, 'All') }
                >All</button>
                <button
                    className="btn btn-secondary"
                    onClick={ this.cfilter.bind(this, 'Active') }
                >Active</button>
                <button
                    className="btn btn-secondary"
                    onClick={ this.cfilter.bind(this, 'Done') }
                >Done</button>
            </div>
        )
    }
}