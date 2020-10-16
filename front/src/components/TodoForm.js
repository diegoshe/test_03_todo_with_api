import React, { useState, useEffect, useRef } from 'react'

function TodoForm(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value : '')

    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    })

    const handleChange = e => {
        setInput(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()

        props.onSubmit({
            id: Math.floor(Math.random() * 1000),
            text: input
        })

        setInput('')
    }

    return (
        <div>
            <form className='todo-form' onSubmit={handleSubmit}>
                {props.edit ? (
                <>
                    <input
                        className='todo-input edit'
                        type='text'
                        placeholder='Обновить заметку'
                        value={input}
                        name='text'
                        onChange={handleChange}
                        ref={inputRef}
                    />
                    <button className='todo-button edit'>Обновить заметку</button>
                </>
                ) : (
                <>
                    <input
                        className='todo-input'
                        type='text'
                        placeholder='Добавить заметку'
                        value={input}
                        name='text'
                        onChange={handleChange}
                        ref={inputRef}
                    />
                    <button className='todo-button'>Добавить заметку</button>
                </>
                )
                    
                }
            </form>
        </div>
    )
}

export default TodoForm
