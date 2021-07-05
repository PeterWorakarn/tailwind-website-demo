import ACTIONS from '../reducers/ACTIONS'
import store from '../store'

export const fetch_post = () => {
    return {
        type:ACTIONS.FETCH_USER
    }
}
export const reiceived_post = (payload) => {
    return {
        type:ACTIONS.FETCHED_USER,
        data:payload.post
    }
}
export const received_error = () => {
    return {
        type:ACTIONS.RECEIVED_ERROR
    }
}

export const thunk_action_creator = username => {
    const user = username.replace(/\s/g,"")
    store.dispatch(fetch_post())
    return function(dispatch, getState) {
        return fetch(`https://api.github.com/users/${user}`)
                .then(data => data.json())
                .then(data => {
                    if (data.message === "Not Found") {
                        throw new Error("No such user")
                    } else dispatch(reiceived_post({payload:{post:data}}))
                })
                .catch(err => dispatch(received_error()))
    }
}