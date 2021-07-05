import React, { Component } from 'react'
import PostForm from '../components/reduxCRUD/PostForm'
import PostContent from '../components/reduxCRUD/PostContent'
import Counter from '../components/Counter'
import CounterHook from '../components/CounterHook'
import GithubSearch from '../components/GithubSearch'
import GithubUser from '../components/GithubUser'

import {Provider} from 'react-redux'
import store from '../redux/store'



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
                <h3 className="text-2xl leading-6 mt-12 py-2 font-medium text-gray-900">Counter App</h3>
                <Counter />
                <h3 className="text-2xl leading-6 mt-12 py-2 font-medium text-gray-900">CounterHook App</h3>
                <CounterHook />
                <h3 className="text-2xl leading-6 mt-12 py-2 font-medium text-gray-900">Github User Search</h3>
                <GithubSearch />
                <GithubUser />
                </div>
            </div>
            </Provider>
        )
    }
}
