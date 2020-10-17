import React, { useState } from 'react'

import TodoForm from './TodoForm'
import Todo from './Todo'
import TodosService from '../api/TodosService'


const todosService = new TodosService()


function TodoList() {
    const [todos, setTodos] = useState([])

    todosService.getTodos().then(function (result) {
        // setTodos({ todos:  result.data, nextPageURL:  result.nextlink})
        // setTodos(result.data)
        console.log(result.data)
    });

    const addTodo = todo => {
        if (!todo.text || /^s*$/.test(todo.text)) {
            return 
        }
        // console.log(todo)
        const newTodos = [todo, ...todos]
        // console.log(newTodos)
        setTodos(newTodos)
    }

    const updateTodo = (todoId, newValue) => {
        if (!newValue.text || /^s*$/.test(newValue.text)) {
            return 
        }

        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)))
    }

    const removeTodo = id => {
        const removeArr = [...todos].filter(todo => todo.id !== id)

        setTodos(removeArr)
    }

    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete
            }
            return todo
        })
        setTodos(updatedTodos)
    }

    return (
        <>
            <h1>Какие планы на сегодня?</h1>
            <TodoForm onSubmit={addTodo} />
            <Todo
                todos={todos}
                completeTodo={completeTodo}
                updateTodo={updateTodo}
                removeTodo={removeTodo}
            />
        </>
    )
}

export default TodoList
