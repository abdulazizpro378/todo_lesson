import React, { Component } from "react";

export class TodoDoneItem extends Component {
  render() {
    const { id, title, deleteTodo } = this.props;
    return (
      <div className="p-3 d-flex justify-content-between align-Items-center border mb-3">
        <span>{title}</span>
        <button onClick={() => deleteTodo(id)} className="btn  btn-danger">
          Delete
        </button>
      </div>
    );
  }
}

export default TodoDoneItem;
