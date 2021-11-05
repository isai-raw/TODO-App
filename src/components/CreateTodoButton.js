import React from "react";
import '../styles/CreateTodoButton.css'

function CreateTodoButton(props){
    const onClickButton = () => alert("que pasa chaval")
    return (
        <button onClick={onClickButton}>+</button>
    );
}

export { CreateTodoButton };