import ACTIONS from './ACTIONS'

const postReducer = (state = [], action) => {
    switch (action.type) {
        case ACTIONS.ADD_POST:
            return state.concat([action.payload])
        case ACTIONS.EDIT_POST:
            return state.map((post) => post.id === action.payload ? { ...post, editing: true } : post)
        case ACTIONS.UPDATE_POST:
            return state.map((post) => {
                if (post.id === action.payload.id) {
                    return ({
                        ...post,
                        title: action.payload.data.editTitle,
                        message: action.payload.data.editMessage,
                        editing: action.payload.data.editing
                    })
                }
                else return post
            })
        case ACTIONS.DELETE_POST:
            return state.filter((post) => post.id !== action.payload)
        default:
            return state;
    }
}

export default postReducer;