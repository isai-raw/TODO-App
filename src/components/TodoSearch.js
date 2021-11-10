import React from "react";
import '../styles/TodoSearch.css'
import {  TodoContext } from './TodoContext';

function TodoSearch(){

  const { search, setSearch } = React.useContext(TodoContext);

  const onSearchValueChange = (event) => {
    setSearch(event.target.value);
  }

  return (
    <input type="search" placeholder="Buscar TODOs" value={search} onChange={onSearchValueChange} />
  )
}

export { TodoSearch }