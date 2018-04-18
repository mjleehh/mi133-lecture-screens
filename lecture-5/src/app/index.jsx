import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import {connect} from 'react-redux'
import React from 'react'
import ReactDOM from 'react-dom'
import './style.css'
import axios from 'axios'

const SET_DATA = 'SET_DATA'
const setData = (data) => ({type: SET_DATA, payload: data})

function initialState() {
    return {
        data: []
    }
}

function reducer(state = initialState(), {type, payload}) {
    switch (type) {
        case SET_DATA: {
            return {...state, data: payload}
        }
        default:
            return state
    }
}

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(thunk)))

// API ABSTRACTION

async function retrieveData(dispatch) {
    dispatch({type: 'FETCHING_DATA'})
    const {data} = await axios.get('/api/data')
    console.log('got data', data)
    dispatch({type: 'SET_DATA', payload: data.data})
}

// UI


class RawApp extends React.Component {
    constructor() {
        super()

        this.handleFetch = () => {
            this.props.dispatch(retrieveData)
        }
    }

    render() {
        console.log(this.props)
        const dataUi = this.props.data.map(elem => <div>{elem}</div>)

        return <div>
            <button onClick={this.handleFetch}>fetch data</button>
            {dataUi}
        </div>
    }
}
const App = connect(({data}) => ({data}))(RawApp)

ReactDOM.render(
    <Provider store={store}>
        <div className="pageContent">
            <App/>
        </div>
    </Provider>,
    document.getElementById('main'))
