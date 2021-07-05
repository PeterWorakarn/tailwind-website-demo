import { connect } from 'react-redux'
import ACTIONS from '../redux/reducers/ACTIONS'

function Counter(props) {
    const depositHandler = (amount) => {
        props.dispatch({
            type: ACTIONS.DEPOSIT_ACCOUNT,
            payload: amount
        })
    }
    const withdrawHandler = (amount) => {
        props.dispatch({
            type: ACTIONS.WITHDRAW_ACCOUNT,
            payload: amount
        })
    }

    return (
        <div className="flex items-center justify-between shadow-md my-2 px-4 py-5 bg-white sm:p-6 rounded-md">
            <h4 className="w-3/4">Account Balance: {props.account}</h4>
            <div className="w-1/4 flex">
                <button onClick={(() => depositHandler(1000))} className="mt-2 mr-2 w-1/2 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Deposit</button>
                <button onClick={(() => withdrawHandler(1000))} className="mt-2 mr-2 w-1/2 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Withdraw</button>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return  {
    account: state.account
    }
}

export default connect(mapStateToProps)(Counter)