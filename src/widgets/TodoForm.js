import React from "react";
import TodoItem from "./TodoItem";

export default class TodoForm extends React.Component {
  state = {
    todoText: "",
    todoItems: [],
  };

  handleChange = (event) => {
    this.setState({ todoText: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    if (this.state.todoText.length < 3) {
      //alert("The todo is so short");
      console.log("The todo is so short");
      return;
    }

    let arr = this.state.todoItems;
    arr.push(this.state.todoText);
    this.setState({
      todoText: "",
      todoItems: arr,
    });
  };

  handleDelete = (key) => {
    let deleteArr = this.state.todoItems;
    deleteArr.splice(this.state.todoItems, 1);
    this.setState({
      todoText: "",
      todoItems: deleteArr,
    });
  };

  render() {
    let items = this.state.todoItems.map((val, key) => {
      return (
        <TodoItem
          key={key}
          todoText={val}
          deleteTodoItem={() => this.handleDelete(key)}
        />
      );
    });

    return (
      <div className="mt-5">
        <h1 className="todo-title pb-5 mb-5">My Todo List</h1>
        <form className="container" onSubmit={this.handleSubmit}>
          <div className="todo-form-input input-group">
            <input
              id="todo-item"
              className="form-control p-4 form-input"
              type="text"
              placeholder="Enter a todo..."
              value={this.state.todoText}
              onChange={this.handleChange}
            />
            <div className="input-group-append">
              <button className="btn btn-primary btn-add" type="submit">
                <i class="fas fa-plus icon-plus"></i>
              </button>
            </div>
          </div>
        </form>
        {items}
      </div>
    );
  }
}
