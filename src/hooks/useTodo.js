import {useEffect} from "react";

export const useTodo = (todoList, setTodoList) => {
    useEffect(() => {
        let localeTodoList = []
        let keys = Object.keys(localStorage)
        keys.forEach(key => localeTodoList.push(JSON.parse(localStorage.getItem(key))))
        setTodoList([...todoList, ...localeTodoList])


    }, [])
}

