import React, { Component } from "react";
import './add-item-form.css'

export default class AddItemForm extends Component {
    state = {
        input: ''
    };
    changeInput = (e) => {
        this.setState({
            input: e.target.value
        })
    };
    onSubmit = (e) => {
        e.preventDefault();
        this.props.addItem(this.state.input);
        this.setState({
            input: ''
        })
    };
    render() {
        return (
            <form className="add-item-form input-group" onSubmit={ this.onSubmit }>
                <input
                    type="text"
                    className="form-control add-item-input"
                    placeholder="Add item"
                    onChange={ this.changeInput }
                    value={ this.state.input }
                />
                <button className="btn btn-success add-item-button">Add</button>
            </form>
        )
    }
}