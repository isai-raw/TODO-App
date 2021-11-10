import React from "react";
import './App.css';
import { AppUI } from "./AppUI";
import { TodoProvider } from "./components/TodoContext";

// const defaultTodos = [
//   { text: 'tomate', completed: false },
//   { text: 'carne', completed: false },
//   { text: 'pizza', completed: false },
//   { text: 'pescado', completed: false },
// ]




function App() {
  return (
  <TodoProvider>
    <AppUI />
  </TodoProvider>
  );
}

export default App;
