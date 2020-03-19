import React from 'react';
import './todo-list-item.css';

const TodoListItem = ({ label, important = false }) => {
    const style = {
        color: important ? 'tomato' : 'black'
    }
    return (
        <div>
            <span style={style}>{ label }</span>
            <div className="float-right">
                <button className="btn btn-default"><i className="fa fa-exclamation" aria-hidden="true"></i></button>
                <button className="btn btn-default"><i className="fa fa-trash-o" aria-hidden="true"></i></button>
            </div>
        </div>

    )
}

export default TodoListItem;