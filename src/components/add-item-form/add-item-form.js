import React, { Component } from "react";
import './add-item-form.css'

export default class AddItemForm extends Component {
    render() {
        return (
            <div className="add-item-form input-group">
                <input type="text" className="form-control add-item-input" placeholder="Add item"/>
                <button className="btn btn-success add-item-button">Add</button>
            </div>
        )
    }
}