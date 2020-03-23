import React, { Component } from "react";
import "./todo-list-item.css";

export default class TodoListItem extends Component {
    state = {
        done: false,
        important: false
    };
    onLabelClick = () => {
        this.setState(({done}) => {
            return {
                done: !done
            }
        })
    };
    onMarkImportant = () => {
        this.setState(({important}) => {
            return {
                important: !important
            }
        })
    };
    render() {
        const { label, onDeleted } = this.props;
        const { done, important } = this.state;
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
                    onClick={ this.onLabelClick }
                    className={ classNames }
                >{label}</span>
                <div className="float-right">
                    <button
                        className="btn btn-default"
                        onClick={ this.onMarkImportant }
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