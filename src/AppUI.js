import React from "react";
import { TodoCounter } from './components/TodoCounter';
import { TodoSearch } from './components/TodoSearch';
import { TodoList } from './components/TodoList';
import { TodoItem } from './components/TodoItem';
import { CreateTodoButton } from './components/CreateTodoButton';
import { TodoContext } from './components/TodoContext';
import { Modal } from './components/Modal';
import { TodoForm } from "./components/TodoForm";

function AppUI(){
  const {
          loading,
          error,
          searchedTodos,
          completeTodo,
          deleteTodo,
          openModal,
          setOpenModal,
        } = React.useContext(TodoContext);

  return(
    <React.Fragment>
      <TodoCounter />
      <TodoSearch/>

      <TodoList>
        {loading && <p>Loading...</p>}
        {error && <p>Opa! Algo salio mal</p>}
        {!loading && !searchedTodos.length && <p>No hay TODOs</p>}

        {searchedTodos.map(todo => (
          <TodoItem key={todo.text} text={todo.text} completed={todo.completed} onComplete={() => completeTodo(todo.text)} onDelete={() => deleteTodo(todo.text)} />
        ))}
    </TodoList>
    {openModal && (
      <Modal>
        <TodoForm></TodoForm>
      </Modal>
    )}
      <CreateTodoButton
        setOpenModal={setOpenModal}
        openModal={openModal}
      />
    </React.Fragment>
  )
}

export { AppUI };