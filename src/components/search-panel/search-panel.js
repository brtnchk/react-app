import React, { Component } from 'react';
import './searc-panel.css'

export default class SearchPanel extends Component {
    render() {
        return (
            <input type="text" placeholder="search" className="form-control search-input" />
        )
    }
}