import React from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'
import {devToolsEnhancer} from 'redux-devtools-extension'
import {Provider, connect} from 'react-redux'


import './style.css'

const initialState = {
        clickCount1: 0,
        clickCount2: 0,
    a: 'foo',

}

const COUNT1_CLICKED = 'COUNT1_CLICKED'
const COUNT2_CLICKED = 'COUNT2_CLICKED'

function reducer(state = initialState, {type, payload}) {
    switch(type) {
        case COUNT1_CLICKED: {
            return {...state, clickCount1: state.clickCount1 + 1}
        }
        case COUNT2_CLICKED: {
            return {...state, clickCount2: state.clickCount2 + 1}
        }
        default:
            return state
    }
}

const store = createStore(reducer, devToolsEnhancer())

@connect(({clickCount1, clickCount2}) => ({clickCount1, clickCount2}))
class App extends React.Component {
    constructor() {
        super()

        this.clicked1 = () => this.props.dispatch({type: COUNT1_CLICKED})
        this.clicked2 = () => this.props.dispatch({type: COUNT2_CLICKED})
    }

    render() {
        return <div className="appContainer">app
            <div>
                Click count 1: {this.props.clickCount1}
            </div>
            <div>
                Click count 2: {this.props.clickCount2}
            </div>

            <button onClick={this.clicked1}>click me!</button>
            <button onClick={this.clicked2}>click me!</button>
        </div>
    }
}

ReactDOM.render(
    <Provider store={store}>
        <div className="pageContent">
            <App/>
        </div>
    </Provider>,
    document.getElementById('main'))
