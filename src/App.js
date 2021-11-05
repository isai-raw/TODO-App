import React from "react";
import './App.css';
import { AppUI } from "./AppUI";

// const defaultTodos = [
//   { text: 'tomate', completed: false },
//   { text: 'carne', completed: false },
//   { text: 'pizza', completed: false },
//   { text: 'pescado', completed: false },
// ]

function useLocalStorage(itemName, initialValue) {
  const localStorageItem = localStorage.getItem(itemName)
  let parsedItem = initialValue

  if (!localStorageItem) {
    localStorage.setItem(itemName, JSON.stringify(initialValue))
    parsedItem = initialValue
  } else {
    parsedItem = JSON.parse(localStorageItem)
  }
  const [item, setItem] = React.useState(parsedItem);

  const saveItem = (newItem) => {
    const stringifiedItem = JSON.stringify(newItem)
    localStorage.setItem(itemName, stringifiedItem)
    setItem(newItem)
  }
  return [item, saveItem]
}


function App() {
  const [todo, saveTodos] = useLocalStorage('TODOs_v1', [])
  const [search, setSearch] = React.useState('');
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

  const withoutResults = () => {
    if (searchedTodos.length === 0) {
    return (
      <p>No hay TODOs</p>
    )
  }
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


  return (
    <AppUI
      todo={todo}
      saveTodos={saveTodos}
      search={search}
      setSearch={setSearch}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      withoutResults={withoutResults}
    />
  );
}

export default App;
