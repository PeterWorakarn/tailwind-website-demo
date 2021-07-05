import React, {useRef} from 'react'
import {useDispatch} from 'react-redux'
import {thunk_action_creator} from '../redux/actions/fetchAction'

export default function GithubSearch() {
    const userSearch = useRef()
    const dispatch = useDispatch();
    
    const handleSubmit = (e) => {
        e.preventDefault()
        const username = userSearch.current.value
        dispatch(thunk_action_creator(username)) 
        userSearch.current.value = ""
    }

    return (
        <form onSubmit={handleSubmit} className="flex items-center">
            <input ref={userSearch} type="text" required className="h-9 focus:ring-indigo-500 focus:border-indigo-500 w-full py-2 px-4 sm:text-sm border border-gray-300 rounded-md"/>
            <button type="submit" className="ml-2  inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Submit</button>
        </form>
    )
}
