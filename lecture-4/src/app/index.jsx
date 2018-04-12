import {Provider, connect} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import React from 'react'
import ReactDOM from 'react-dom'
import './style.css'

const BUTTON_PUSH = 'BUTTON_PUSH'
const buttonPush = () => ({type: BUTTON_PUSH})

const BLA_PUSH = 'BLA_PUSH'
const blaPush = () => ({type: BLA_PUSH})

function reducer(state = {numPushes: 0, blafoo: 0}, action) {
    switch (action.type) {
        case BUTTON_PUSH: {
            return {...state, numPushes: state.numPushes + 1}
        }
        case BLA_PUSH: {
            return {...state, blafoo: state.blafoo + 1}
        }
        default:
            console.log('unknown action')
            return state
    }
}

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(thunk)))


function mapStateToProps(state) {
    console.log('mapping state to props')
    return {
        nums: state.numPushes,
        bla: state.blafoo,
    }
}

@connect(mapStateToProps)
class NumPushes extends React.Component {
    render() {
        console.log('render num pushes')
        return <div>{this.props.nums}</div>
    }
}

@connect()
class PushButton extends React.Component {
    constructor() {
        super()

        this.handleClick = () => this.props.dispatch(buttonPush())
    }

    render() {
        console.log('render push button')
        return <button onClick={this.handleClick}>PUSH ME!</button>
    }
}

@connect()
class BlaButton extends React.Component {
    constructor() {
        super()

        this.handleClick = () => this.props.dispatch(blaPush())
    }

    render() {
        console.log('render push button')
        return <div>
            <PushButton/>
            <button onClick={this.handleClick}>BLA ME!</button>
        </div>
    }
}

ReactDOM.render(
    <Provider store={store}>
        <div className="appContainer">
            <NumPushes/>
            <BlaButton/>
        </div>
    </Provider>,
    document.getElementById('main'))
