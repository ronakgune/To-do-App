import React from "react";
import TodoItem from "./TodoItem";
import todosData from "./todosData.js";

class MainConent extends React.Component {
  render() {
    const todoItemComponent = todosData.map(data => (
      <TodoItem key={data.id} stuff={data} />
    ));
    return <div className="todo-list">{todoItemComponent}</div>;
  }
}
// function MainConent() {
//   return <div className="todo-list">{todoItemComponent}</div>;
// }

export default MainConent;
