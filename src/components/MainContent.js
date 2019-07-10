import React from "react";
import TodoItem from "./TodoItem";
import todosData from "./todosData.js";

class MainConent extends React.Component {
  constructor() {
    super();

    this.state = {
      todoItemComponent: todosData.map(data => (
        <TodoItem key={data.id} stuff={data} />
      ))
    };
  }
  render() {
    return <div className="todo-list">{this.state.todoItemComponent}</div>;
  }
}

// function MainConent() {
//   return <div className="todo-list">{todoItemComponent}</div>;
// }

export default MainConent;
