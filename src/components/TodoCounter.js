import React from "react";
import '../styles/TodoCounter.css'

function TodoCounter(props){
  const { total, completed } = props;
  return (
    <h2 className="TodoCounter">Has Completado {completed} de {total} TODOs</h2>
  )
}

export { TodoCounter }