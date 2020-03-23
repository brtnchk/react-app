import React, { Component } from 'react';
import './searc-panel.css'

export default class SearchPanel extends Component {
    state = {
        searchString: ''
    };
    onSearch = (e) => {
        const searchString = e.target.value;
        this.setState({ searchString });
        this.props.onSearch(searchString)
    };
    render() {
        return (
            <input
                type="text"
                placeholder="search"
                className="form-control search-input"
                onChange={ this.onSearch }
                value={ this.state.searchString }
            />
        )
    }
}