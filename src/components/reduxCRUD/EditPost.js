import React, { Component } from 'react'
import ACTIONS from '../../reducers/ACTIONS'
import {connect} from 'react-redux'

class EditPost extends Component {
    handleEdit = (e) => {
        e.preventDefault()
        const editTitle = this.getTitle.value;
        const editMessage = this.getMessage.value;
        const data = {
            editTitle,
            editMessage,
            editing:false
        }
        this.props.dispatch({
            type: ACTIONS.UPDATE_POST,
            payload: {id:this.props.post.id, data:data}
        })
    }
    render() {
        return (
            <form onSubmit={this.handleEdit}>
                <label className="block text-md font-medium text-gray-700 mt-3">Title</label>
                <input className="focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2 sm:text-sm border border-gray-300 rounded-md" ref={(input) => this.getTitle = input} defaultValue={this.props.post.title} name="title" placeholder="Enter Title" type="text" required />
                <label className="block text-md font-medium text-gray-700 mt-3">Content</label>
                <textarea className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-2 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md" ref={(input) => this.getMessage = input} defaultValue={this.props.post.message} name="content" placeholder="Enter Content" required/>
                <button className="mt-2 w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" type="submit">update</button>
            </form>
        )
    }
}
export default connect()(EditPost)