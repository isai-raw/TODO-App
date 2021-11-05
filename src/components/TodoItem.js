import React from "react";
import '../styles/TodoItem.css'

function TodoItem (props) {
  return (
    <li>
      <span className={`Check ${props.completed && 'Checked'}`} onClick={props.onComplete}></span>
      <p className={`${props.completed && 'textChecked'}`}>{props.text}</p>
      <span className="Erase" onClick={props.onDelete}>X</span>
    </li>
  );
}

export { TodoItem };