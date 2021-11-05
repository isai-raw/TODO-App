import React from "react";
import { TodoCounter } from './components/TodoCounter';
import { TodoSearch } from './components/TodoSearch';
import { TodoList } from './components/TodoList';
import { TodoItem } from './components/TodoItem';
import { CreateTodoButton } from './components/CreateTodoButton';

function AppUI({
      todo,
      saveTodo,
      search,
      setSearch,
      searchedTodos,
      completeTodo,
      deleteTodo,
      totalTodos,
      completedTodos,
      withoutResults,
}){
  return(
    <React.Fragment>
      <TodoCounter total={totalTodos}
      completed={completedTodos} />
      <TodoSearch
        search={search}
        setSearch={setSearch}
      />
      {withoutResults()}
      <TodoList>
        {searchedTodos.map(todo => (
          <TodoItem key={todo.text} text={todo.text} completed={todo.completed} onComplete={() => completeTodo(todo.text)} onDelete={() => deleteTodo(todo.text)} />
        ))}
      </TodoList>
      <CreateTodoButton />
    </React.Fragment>
  )
}

export { AppUI };