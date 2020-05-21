import React from "react";

export default class TodoItem extends React.Component {
  render() {
    return (
      <div className="container item-div">
        <div className="card">
          <div className="input-group todo-item-div container mb-3">
            <input
              type="text"
              className="form-control list-input"
              readOnly
              placeholder={this.props.todoText}
            />
            <div className="input-group-append">
              <button
                onClick={this.props.deleteTodoItem}
                className="btn btn-outline-danger btn-delete"
                type="button"
              >
                <i class="fas fa-trash-alt"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
