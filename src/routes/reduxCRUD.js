import React, { Component } from 'react'
import PostForm from '../components/reduxCRUD/PostForm'
import PostContent from '../components/reduxCRUD/PostContent'

import {createStore} from 'redux'
import {Provider} from 'react-redux'
import postReducer from '../reducers/postReducer'
const store = createStore(postReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


export default class reduxCRUD extends Component {
    render() {
        return (
            <Provider store={store}>
            <div className="py-5 w-full min-h-screen bg-gray-100">
                <div className="max-w-2xl mx-auto">
                <h3 className="text-2xl leading-6 mt-12 py-2 font-medium text-gray-900">Create new Post</h3>
                <PostForm />
                <h3 className="text-2xl leading-6 mt-12 py-2 font-medium text-gray-900">All Post</h3>
                <PostContent />
                </div>
            </div>
            </Provider>
        )
    }
}
