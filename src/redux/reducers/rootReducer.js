import { combineReducers } from 'redux'
import accountReducer from './accountReducer'
import countReducer from './countReducer'
import postReducer from './postReducer'
import githubReducer from './githubReducer'

const reducers = combineReducers ({
    account: accountReducer,
    post: postReducer,
    count: countReducer,
    github: githubReducer
})

export default reducers