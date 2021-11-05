import React from "react";
import '../styles/TodoSearch.css'

function TodoSearch({ search, setSearch }){
  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    setSearch(event.target.value);
  }

  return (
    <input type="search" placeholder="Buscar TODOs" value={search} onChange={onSearchValueChange} />
  )
}

export { TodoSearch }