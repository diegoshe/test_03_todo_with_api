import React, { useState, useEffect } from 'react'

import TodoForm from './TodoForm'
import Todo from './Todo'
import TodosService from '../api/TodosService'


const todosService = new TodosService()


function TodoList() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [todos, setTodos] = useState([])

    useEffect(() => {
        todosService.getTodos()
        .then((result) => {
            // setTodos({ todos:  result.data, nextPageURL:  result.nextlink})
            setIsLoaded(true)
            setTodos((result.data).reverse())
            // console.log(result.data)
        },
        (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }, [])

    const addTodo = todo => {
        if (!todo.text || /^s*$/.test(todo.text)) {
            return 
        }

        todosService.createTodo({'text': todo.text})
        .then((result) => {
            setTodos([result.data, ...todos])
            // console.log(result)
        })
        .catch(() => {alert('Упс, что-то пошло не так')})
    }

    const updateTodo = (todoId, newValue) => {
        if (!newValue.text || /^s*$/.test(newValue.text)) {
            return 
        }

        todosService.updateTodo({'pk':todoId, 'text':newValue.text})
        .then((result) => {
            setTodos(prev => prev.map(item => (item.id === todoId ? result.data : item)))
        })
        .catch(() => {alert('Упс, что-то пошло не так')})
    }

    const removeTodo = id => {
        const removeArr = [...todos].filter(todo => todo.id !== id)

        todosService.deleteTodo(id)
        .then(() => {
            setTodos(removeArr)
        })
        .catch(() => {alert('Упс, что-то пошло не так')})
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

    if (error) {
        return <div className='error'>Ошибка: {error.message}</div>;
    } else if (!isLoaded) {
        return <div className="preloader">
            <div class="circle circle-1"></div>
            <div class="circle circle-2"></div>
            <div class="circle circle-3"></div>
            <div class="circle circle-4"></div>
            <div class="circle circle-5"></div>
      </div>
    } else {
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
}

export default TodoList
