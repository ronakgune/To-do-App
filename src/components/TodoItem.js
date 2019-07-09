import React from "react";

const strike = {
  textDecoration: "line-through"
};

function TodoItem(props) {
  let value = props.stuff.completed;
  console.log(props.stuff.completed);
  let input;
  if (value === false) {
    input = <input type="checkbox" />;
  } else {
    input = <input type="checkbox" checked />;
  }
  return (
    <div className="todo-item">
      {input}
      <p style={{ textDecoration: props.stuff.completed && "line-through" }}>
        {props.stuff.text}
      </p>
    </div>
  );
}
export default TodoItem;
