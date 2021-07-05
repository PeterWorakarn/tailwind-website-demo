import ACTIONS from './ACTIONS'

const countReducer = (state = 0, action) => {
    switch (action.type) {
        case ACTIONS.INCREMENT_COUNT:
            return state + action.payload.value            
        case ACTIONS.DECREMENT_COUNT:
            return state - action.payload.value
        default:
            return state
    }
}

export default countReducer
