import React, {useState} from 'react'
import classes from './ToDoItem.module.css'
import CrossButton from '../CrossButton/CrossButton'
import Modal from "../Modal/Modal";
import ImportantBtn from "../ImportantBtn/ImportantBtn";
import {updateLocaleItemToImportant} from "../../../utils/localeStorage";


export default function ToDoItem(props) {
    const [modal, setModal] = useState(false)
    const [importantState, setImportantState] = useState(props.todo.important)

    const remove = (event) => {
        event.stopPropagation()
        props.deleteTodo(props.todo.id)
    }

    const markAsImportant = (event) => {
        event.stopPropagation()
        setImportantState(!importantState)
        updateLocaleItemToImportant(props.todo.id)
        props.sortList()
    }


    return (
        <div>
            <div className={classes.todoItem} onClick={() => setModal(true)}>
                <div className={classes.todoItemContent}>{props.todo.title}</div>
                <div className={classes.todoItemBtns}>
                    <CrossButton onClick={(event) => remove(event)}/>
                    <ImportantBtn important={importantState} onClick={(event) => markAsImportant(event)}/>
                </div>
            </div>
            <Modal visible={modal} setVisible={setModal}>
                <div className={classes.todoItemModalContent}>
                    <h2 className={classes.todoItemModalTitle}>{props.todo.title}</h2>
                    <p className={classes.todoItemModalText}>{props.todo.text}</p>
                </div>
            </Modal>
        </div>

    )
}

