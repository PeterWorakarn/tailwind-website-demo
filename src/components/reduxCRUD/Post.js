import React, { Component } from 'react'
import ACTIONS from '../../reducers/ACTIONS'
import { connect } from 'react-redux'

class Post extends Component {
    render() {
        return (
            <div className="flex items-end justify-between shadow-md my-2 px-4 py-5 bg-white sm:p-6 rounded-md">
                <div className="w-2/4">
                    <h3 className="uppercase text-md font-medium text-gray-700">{this.props.post.title}</h3>
                    <p className="titlecase">{this.props.post.message}</p>
                </div>
                <div className="w-2/4 flex justify-end">
                    <button className="mt-2 mr-2 w-1/4 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={() => this.props.dispatch({ type: ACTIONS.EDIT_POST, payload: this.props.post.id })}>Edit</button>
                    <button className="mt-2 mr-2 w-1/4 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={() => this.props.dispatch({ type: ACTIONS.DELETE_POST, payload: this.props.post.id })}>Delete</button>
                </div>
            </div>
        )
    }
}
export default connect()(Post)