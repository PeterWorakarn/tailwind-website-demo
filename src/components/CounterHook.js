import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import ACTIONS from '../redux/reducers/ACTIONS'

function CounterHook() {
    const count = useSelector(state => state.count)
    const dispatch = useDispatch();

    const increment = () => {dispatch({type:ACTIONS.INCREMENT_COUNT,payload:{value:1}})}
    const decrement = () => {dispatch({type:ACTIONS.DECREMENT_COUNT,payload:{value:1}})}

    return (
        <div className="flex items-center justify-between shadow-md my-2 px-4 py-5 bg-white sm:p-6 rounded-md">
            <h4 className="w-3/4">Counter Balance: {count}</h4>
            <div className="w-1/4 flex">
                <button onClick={() => increment()} className="mt-2 mr-2 w-1/2 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Increment</button>
                <button onClick={() => decrement()} className="mt-2 mr-2 w-1/2 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Decrement</button>
            </div>
        </div>
    )
}

export default CounterHook
