import React from "react";

const strike = {
  textDecoration: "line-through"
};

function TodoItem(props) {
  return (
    <div className="todo-item">
      <input type="checkbox" checked={props.stuff.completed} />
      <p style={{ textDecoration: props.stuff.completed && "line-through" }}>
        {props.stuff.text}
      </p>
    </div>
  );
}
export default TodoItem;
