import React, { Component } from "react";

export class TodoItem extends Component {
  render() {
    const { id, title, donetodo ,editTodo } = this.props;
    return (
      <div className="p-3 d-flex justify-content-between align-Items-center border mb-3">
        <span>{title}</span>
        <div>
          <button
            onClick={() => editTodo(id)}
            className="btn  btn-primary me-3"
          >
            Edit
          </button>
          <button onClick={() => donetodo(id)} className="btn  btn-success">
            Done
          </button>
        </div>
      </div>
    );
  }
}

export default TodoItem;
