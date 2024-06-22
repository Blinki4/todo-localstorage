import React, {useEffect, useState} from 'react'
import CustomBtn from '../components/UI/CustomButton/CustomBtn'
import CustomInput from '../components/UI/CustomInput/CutomInput'
import {Link} from 'react-router-dom'
import Modal from "../components/UI/Modal/Modal";
import CustomTextArea from "../components/UI/CustomTextArea/CustomTextArea";
import TodoLeftSection from "../components/TodoLeftSection";
import TodoList from "../components/TodoList";
import {getSearchedTodoList} from "../utils/todo";
import ErrorPopup from "../components/UI/ErrorPopup/ErrorPopup";
import {removeFromLocaleStorage, setToLocaleStorage} from "../utils/localeStorage";
import {useTodo} from "../hooks/useTodo";

export default function Todo() {

    const [todoList, setTodoList] = useState([])
    const [todoCreateModal, setTodoCreateModal] = useState(false)
    const [errorPopup, setErrorPopup] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const [todoTitle, setTodoTitle] = useState('')
    const [todoText, setTodoText] = useState('')
    const [searchQuery, setSearchQuery] = useState('')


    const createTodo = () => {
        try {
            const newTodo = {
                title: todoTitle,
                text: todoText,
                id: Date.now(),
                important: false,
            }

            if (!todoTitle) {
                throw new Error('Title can\'t be empty')
            }

            setToLocaleStorage(newTodo.id, newTodo)
            setTodoList([...todoList, newTodo])
            setTodoTitle('')
            setTodoText('')
            setTodoCreateModal(false)
        } catch (e) {
            setErrorMessage(e.message)
            setErrorPopup(true)
            setTimeout(() => {
                setErrorPopup(false)
            }, 2500)

        }
    }


    const sortTodoList = () => {
        const sortedList = todoList.sort((a, b) => {
            if (a.important === true && b.important === false) {
                return -1;
            }
            return 1
        })

        setTodoList([...sortedList])

        console.log(todoList)
    }


    const searchedTodoList = getSearchedTodoList(todoList, searchQuery)

    useTodo(searchedTodoList, setTodoList)

    const deleteTodo = (todoId) => {
        setTodoList(todoList.filter(item => item.id !== todoId))
        removeFromLocaleStorage(todoId)
    }

    const searchTodo = (query) => {
        setSearchQuery(query)
    }


    return (
        <div className="todo">
            <header className="todo__header">
                <div className="to-do__logo">
                    <svg
                        fill="#05386b"
                        version="1.1"
                        width="100px"
                        height="100px"
                        viewBox="0 0 512 512"
                    >
                        <g id="7935ec95c421cee6d86eb22ecd11b2b6">
                            <path
                                d="M460.46,93.056c0-32.737-48.543-36.405-48.543-36.405l-114.063-7.286
		c0,0-2.433-31.538-25.5-42.467c-23.056-10.929-70.961-4.591-89.151-4.391c-18.214,0.187-22.481,23.803-22.481,46.06
		c0,22.245,0.399,32.362,0.399,48.531c0,16.181-8.321,23.853-21.333,23.878H75.164c-18.09-1.21-32.162,1.822-32.162,16.692
		c0,14.858,21.258,171.54,50.489,200.77c16.954,16.954,120.626,28.882,142.471,28.882c21.833,0,14.559-65.522,20.622-65.522
		c6.076,0,12.75,37.002,47.121,45.71c34.396,8.684,80.306,7.074,82.738,31.951c3.193,32.811,6.063,75.24-15.171,78.271l-48.08,1.946
		c-32.948-2.396-24.128-38.986-9.569-38.986c14.571,0,21.845-0.574,21.845-0.574l1.821-40.046c0,0-75.478-9.082-78.671,42.666
		c-2.932,47.308,5.053,69.589,10.916,74.43c5.864,4.866,15.97,14.334,108.413,14.334C508.191,511.5,460.46,125.817,460.46,93.056z
		 M397.146,250.423c-3.244,3.032-17.342-8.907-28.507-8.907c-11.166,0-20.822,9.107-23.642,5.664
		c-2.832-3.431,2.607-31.139,23.642-31.139C389.673,216.041,400.377,247.379,397.146,250.423z M131.99,109.648
		c-13.337,0-72.808,0-72.808,0l89.8-89.4c0,0-1.609,69.988-1.609,76.451C147.373,103.174,145.339,109.648,131.99,109.648z"
                            ></path>
                        </g>
                    </svg>
                </div>
                <Link to="/">
                    <CustomBtn>Back</CustomBtn>
                </Link>
                <ErrorPopup visible={errorPopup} setVisible={setErrorPopup} error={errorMessage}/>
            </header>

            <CustomBtn onClick={() => sortTodoList()}>
                Show important
            </CustomBtn>


            <div className="todo__content">
                <TodoLeftSection
                    value={searchQuery}
                    setValue={searchTodo}
                    setTodoCreateModal={setTodoCreateModal}/>
                <div className='todo__right-section'>
                    <TodoList sortList={sortTodoList} list={searchedTodoList} deleteTodo={deleteTodo}/>
                </div>
            </div>

            <Modal visible={todoCreateModal} setVisible={setTodoCreateModal}>
                <CustomInput
                    value={todoTitle}
                    onChange={event => setTodoTitle(event.target.value)}
                    placeholder='Title'/>
                <CustomTextArea
                    value={todoText}
                    onChange={event => setTodoText(event.target.value)}
                    placeholder='Text'/>
                <CustomBtn onClick={() => createTodo()}>Create</CustomBtn>
            </Modal>
        </div>
    )
}
