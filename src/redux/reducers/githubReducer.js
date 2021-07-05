import ACTIONS from "./ACTIONS";

const initialState = {
    userData: {},
    isFetching: false,
    isError: false
}

const githubReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTIONS.FETCH_USER:
            return Object.assign({},state, {
                isFetching: true,
                userData: {},
                isError: false
            });
        case ACTIONS.FETCHED_USER:
            return Object.assign({},state, {
                userData: action.data,
                isFetching: false,
                isError: false
            });
        case ACTIONS.RECEIVED_ERROR:
            return Object.assign({},state, {
                isFetching: false,
                isError: true
            });
        default:
            return state;
    }
}

export default githubReducer