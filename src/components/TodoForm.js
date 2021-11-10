import React from "react";
import { TodoContext } from "../components/TodoContext";
import '../styles/TodoForm.css'

function TodoForm(){
  const [newTodo, setNewTodo] = React.useState("");

  const {
    addTodo,
    setOpenModal,
    todo
  } = React.useContext(TodoContext);

  const alreadyExist = () => {
    for (let i = 0; i < todo.length; i++) {
      if (todo[i].text === newTodo) {
        return true;
      }
    }
  }


  const onCancel = () => {
    setOpenModal(false);
  };

  const onChange = (event) => {
      setNewTodo(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    if (newTodo.length <= 0 || alreadyExist()) {
      alert("No puedes agregar TODOs vacios o duplicados.");
    } else {
      addTodo(newTodo);
      setOpenModal(false);
    }
  };

  return (
      <form onSubmit={onSubmit}>
        <label>Escribe aqui tu TODO</label>
        <textarea value={newTodo} onChange={onChange}
          placeholder="Hacer la tarea de quimica"
        />
        <div>
          <button
              type="submit"
          >Agregar</button>
          <button
            onClick={onCancel}
            className="cancel"
          >Cancelar</button>
        </div>
        <p>{todo.text}</p>
      </form>
  );
}

export { TodoForm };