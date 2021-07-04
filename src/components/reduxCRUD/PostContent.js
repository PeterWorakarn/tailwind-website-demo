import React, { Component } from 'react'
import {connect} from 'react-redux'
import Post  from './Post'
import EditPost from './EditPost'


class PostContent extends Component {
    render() {
        return (
            <div>
                {this.props.posts.length === 0 ? <p className="block text-md font-medium text-gray-700 mt-3 text-center">Post not found</p> : null}

                {this.props.posts.map((post) => {
                    return (
                        <article key={post.id}>
                            {post.editing ? <EditPost key={post.id} post={post} /> : <Post key={post.id} post={post}/>}
                        </article>
                    )
                })}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return  {
    posts: state
    }
}

export default connect(mapStateToProps)(PostContent)