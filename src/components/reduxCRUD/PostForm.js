import React, { Component } from 'react'
import {connect} from 'react-redux'
import ACTIONS from '../../reducers/ACTIONS'

class PostForm extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        const title = this.getTitle.value;
        const message = this.getMessage.value;
        const data = {
            id: new Date(),
            title,
            message,
            editing:false
        }
        this.props.dispatch({
            type: ACTIONS.ADD_POST,
            payload: {...data}
        })
        this.getTitle.value = ""
        this.getMessage.value = ""
    }
    render() {

        return (
            <form onSubmit={this.handleSubmit}>
                <label className="block text-md font-medium text-gray-700 mt-3">Title</label>
                <input ref={(input) => this.getTitle = input} 
                    className="focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2 sm:text-sm border border-gray-300 rounded-md"
                    name="title" 
                    placeholder="Enter Title" 
                    type="text" 
                    required />
                <label className="block text-md font-medium text-gray-700 mt-3">Content</label>
                <textarea ref={(input) => this.getMessage = input}
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-2 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md" 
                    name="content" 
                    placeholder="Enter Content" 
                    required/>
                <button className="mt-2 w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" type="submit">submit</button>
            </form>
        )
    }
}
export default connect()(PostForm)