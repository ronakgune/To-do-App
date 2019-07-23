import React from "react";
import TodoItem from "./TodoItem";
import todosData from "./todosData.js";

class MainConent extends React.Component {
  constructor() {
    super();

    this.state = {
      todos: todosData
    };
  }

  handleChange(id) {
    console.log(id);
  }

  render() {
    const todoItemComponent = this.state.todos.map(data => (
      <TodoItem key={data.id} stuff={data} handleChange={this.handleChange} />
    ));

    return <div className="todo-list">{todoItemComponent}</div>;
  }
}

export default MainConent;
