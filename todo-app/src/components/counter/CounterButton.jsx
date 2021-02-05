import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import './CounterButton.css'

// Component represents each counter button
class CounterButton extends Component {
    
    // Define the initial state in constructor
    // state => counter 0
    constructor() {
        super(); //Error 1, you have to call super

        this.increment = this.increment.bind(this);
        // this.decrement = this.decrement.bind(this);
    }

    render(){
        return (
            <div className="counter">
                <button onClick={this.increment}>+{this.props.by}</button>
                {/* Another way to run the arrow function within the buttonclick */}
                <button onClick={() => this.props.decrementMethod(this.props.by)}>-{this.props.by}</button>
            </div>
        )
    }

    // Update the state counter
    increment(){
        this.props.incrementMethod(this.props.by)
    }

    // // Update the state counter
    // decrement(){
    //     this.props.decrementMethod(this.props.by)
    // }
}

// Set the default value of the prop if not given
// Counter.defaultProps = {
//     by : 1
// }

// Check if Prop types is correct value expected
// Counter.propTypes = {
//     by : PropTypes.number
// }

export default CounterButton