import React, { Component } from "react";
import "./todo-list-item.css";

export default class TodoListItem extends Component {
    state = {
        done: false,
        important: false
    };

    render() {
        const {
            label,
            onDeleted,
            onToggleImportant,
            onToggleDone,
            done,
            important,
        } = this.props;

        let classNames = 'todo-list-item';
        if(done) {
            classNames += ' done'
        }
        if(important) {
            classNames += ' important'
        }
        return (
            <div>
                <span
                    onClick={ onToggleDone }
                    className={ classNames }
                >{label}</span>
                <div className="float-right">
                    <button
                        className="btn btn-default"
                        onClick={ onToggleImportant }
                    >
                        <i className="fa fa-exclamation" aria-hidden="true"></i>
                    </button>
                    <button
                        className="btn btn-default"
                        onClick={ onDeleted }
                    >
                        <i className="fa fa-trash-o" aria-hidden="true"></i>
                    </button>
                </div>
            </div>
        )
    }
}