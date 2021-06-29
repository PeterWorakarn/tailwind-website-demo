import React, {useReducer } from 'react'

// control keyword
const ACTIONS = {
    INCREMENT: 'increment',
    DECREMENT: 'decrement'
}

// register available function
function reducer(state, action) {
    switch (action.type) {
        case ACTIONS.INCREMENT:
            return { count: state.count + 1 }
        case ACTIONS.DECREMENT:
            return { count: state.count - 1 }
        default:
            return state
    }
}

export default function useReducer1() {
    // register state to watch and function
    const [state, dispatch] = useReducer(reducer, { count: 0 })

    // const [count, setCount] = useState(0)

    const increment = () => {
        // setCount(prevCount => prevCount + 1)
        dispatch({ type: ACTIONS.INCREMENT })
    }
    const decrement = () => {
        dispatch({ type: ACTIONS.DECREMENT })
        // setCount(prevCount => prevCount - 1)
    }

    return (
        <div className="container max-w-md mx-auto p-3">
            <span className="flex items-center justify-items-center">{state.count}</span>
            <div className=" flex items-center gap-5">
                <button onClick={decrement} className="flex items-center px-2 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-600 rounded-md dark:bg-gray-800 hover:bg-blue-500 dark:hover:bg-gray-700 focus:outline-none focus:bg-blue-500 dark:focus:bg-gray-700">
                    -
                <span className="mx-1">decrement</span>
                </button>
                <button onClick={increment} className="flex items-center px-2 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-600 rounded-md dark:bg-gray-800 hover:bg-blue-500 dark:hover:bg-gray-700 focus:outline-none focus:bg-blue-500 dark:focus:bg-gray-700">
                    +
                <span className="mx-1">increment</span>
                </button>
            </div>

        </div>
    )
}
