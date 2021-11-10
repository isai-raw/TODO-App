import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider(props){

  const {
    item:todo,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage('TODOs_v1', []);
  const [search, setSearch] = React.useState('');
  const [openModal, setOpenModal] = React.useState(false);

  const completedTodos = todo.filter(todo => todo.completed).length;
  const totalTodos = todo.length;

  let searchedTodos = []

  if (!search.length > 0) {
    searchedTodos = todo
  } else {
    searchedTodos = todo.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = search.toLowerCase();
      return todoText.includes(searchText);
    })
  }

  const addTodo = (text) => {
    const newTodos = [...todo]
    newTodos.push({
      completed: false,
      text,
    })
    saveTodos(newTodos)
  }

  const completeTodo = (text) => {
    const todoIndex = todo.findIndex(todo => todo.text === text);
    const newTodo = [...todo];
    newTodo[todoIndex].completed = !newTodo[todoIndex].completed
    saveTodos(newTodo);
  }
  const deleteTodo = (text) => {
    const todoIndex = todo.findIndex(todo => todo.text === text);
    const newTodo = [...todo];
    newTodo.splice(todoIndex, 1);
    saveTodos(newTodo);
  }

  return(
    <TodoContext.Provider value={{
        loading,
        error,
        todo,
        saveTodos,
        search,
        setSearch,
        openModal,
        setOpenModal,
        searchedTodos,
        completeTodo,
        deleteTodo,
        addTodo,
        totalTodos,
        completedTodos,
      }}>
      {props.children}
    </TodoContext.Provider>
  )
}
export {TodoProvider, TodoContext};