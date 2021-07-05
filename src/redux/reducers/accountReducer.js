import ACTIONS from './ACTIONS'

const accountReducer = (state = 0, action) => {
    switch (action.type) {
        case ACTIONS.DEPOSIT_ACCOUNT:
            return state + action.payload
        case ACTIONS.WITHDRAW_ACCOUNT:
            return state - action.payload
        default:
            return state
    }
}

export default accountReducer