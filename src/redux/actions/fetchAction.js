import ACTIONS from '../reducers/ACTIONS'
import store from '../store'

export const fetch_post = () => {
    return {
        type:ACTIONS.FETCH_USER
    }
}
export const fetched_post = () => {
    return {
        type:ACTIONS.FETCHED_USER
    }
}
export const received_error = () => {
    return {
        type:ACTIONS.RECEIVED_ERROR
    }
}

