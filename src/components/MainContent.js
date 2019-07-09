import React from "react";
import TodoItem from "./TodoItem";
import todosData from "./todosData.js";

const todoItemComponent = todosData.map(data => (
  <TodoItem key={data.id} stuff={data} />
));

function MainConent() {
  return <div className="todo-list">{todoItemComponent}</div>;
}

export default MainConent;
