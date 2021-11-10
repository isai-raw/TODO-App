import React from "react";
import '../styles/CreateTodoButton.css'

function CreateTodoButton(props){
    const onClickButton = () => {
        // props.openModal? props.setOpenModal(false) : props.setOpenModal(true)
        props.setOpenModal(!props.openModal)
    }
    return (
        <button onClick={onClickButton} className={`newTodobtn ${props.openModal && 'x'}`} >+</button>
    );
}

export { CreateTodoButton };