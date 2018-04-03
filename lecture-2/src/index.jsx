import React from 'react'
import ReactDOM from 'react-dom'

function MyComp2(props) {
    return <div>
        prop1 is {props.prop1}
        prop2 is {props.prop2}
    </div>
}

class MyComp extends React.Component {
    constructor() {
        super()

        this.state = {num: 0, otherField: 'bla'}
        this.buttonClicked = () => this.setState({num: 4})
    }

    render() {
        console.log('Comp render')
        return <div>
            <button onClick={this.buttonClicked}>Click Me</button>
            Current Num: {this.state.num}
            Otherfield: {this.state.otherField}
            <MyComp2 prop1="13" prop2={12}/>
        </div>
    }
}

class MyComp3 extends React.Component {
    constructor() {
        super()

        this.state = {num2: 0}
        this.buttonClicked = () => this.setState({num2: 4})
    }

    render() {
        console.log('Comp3 render')
        return <div>
            <button onClick={this.buttonClicked}>Click Me</button>
            Current Num: {this.state.num2}
            <MyComp/>
        </div>
    }
}
ReactDOM.render(
    <div>
        <MyComp3/>
    </div>,
    document.getElementById('main')
)