import React, { useReducer, useState } from 'react'

const ACTIONS = {
    ADD_TODO: 'add-todo',
    TOGGLE_TODO: 'toggle-todo',
    DELETE_TODO: 'delete-todo'

}

function reducer(todos, action) {
    // single function for one component
    switch (action.type) {
        case ACTIONS.ADD_TODO:
            return [...todos, newTodo(action.payload.name)]
        case ACTIONS.TOGGLE_TODO:
            return todos.map((todo) => {
                if (todo.id === action.payload.id) {
                    return { ...todo, complete: !todo.complete }
                }
                return todo
            })
        case ACTIONS.DELETE_TODO:
            return todos.filter((todo) => {
                return todo.id !== action.payload.id
            })
        default:
            return todos
    }
}

function newTodo(name) {
    return { id: Date.now(), name: name, complete: false }
}

export default function useReducer2() {
    const [todos, dispatch] = useReducer(reducer, [])
    const [name, setName] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } })
        setName('')
    }


    return (
        <div className="container max-w-xl mx-auto p-3">
            <h2 className="text-2xl text-center font-bold mb-5">TODOLIST USING REDUCER</h2>
            <form onSubmit={handleSubmit} className="flex">
                <input className="w-full pl-3 rounded border-2 border-indigo-500" type="text" value={name} onChange={e => setName(e.target.value)} />

                <button type="submit" className="flex items-center mx-2 px-2 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-600 rounded-md dark:bg-gray-800 hover:bg-blue-500 dark:hover:bg-gray-700 focus:outline-none focus:bg-blue-500 dark:focus:bg-gray-700">
                    <span className="mx-1">Submit</span>
                </button>
            </form>
            <main className="min-h-screen">
                {todos.map((todo) => {
                    return (
                        <articles className="bg-gray-200 px-2 py-3 rounded-md flex justify-between items-center mt-3" key={todo.id}>
                            <p className={todo.complete ? "text-gray-300 line-through text-md uppercase" : "text-md text-gray-900 uppercase"}>{todo.name}</p>
                            <div className="flex gap-3">
                                <button onClick={() => dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: todo.id } })} type="submit" className="flex items-center px-2 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-600 rounded-md dark:bg-gray-800 hover:bg-blue-500 dark:hover:bg-gray-700 focus:outline-none focus:bg-blue-500 dark:focus:bg-gray-700">Toggle</button>
                                <button onClick={() => dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id } })} type="submit" className="flex items-center px-2 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-600 rounded-md dark:bg-gray-800 hover:bg-blue-500 dark:hover:bg-gray-700 focus:outline-none focus:bg-blue-500 dark:focus:bg-gray-700">Delete</button>
                            </div>
                        </articles>
                    )
                })}
            </main>
        </div>
    )
}
