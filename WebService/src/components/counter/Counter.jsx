import React, { Component } from 'react'
import CounterButton from './CounterButton'
// import PropTypes from 'prop-types'
import './Counter.css'

// Represent all the counter buttons
class Counter extends Component{
    // Define the initial state in constructor
    // state => counter 0
    constructor() {
        super() //Error 1, you have to call super
        
        this.state = {
            totalCounter: 0
        }

        this.increment = this.increment.bind(this)
        this.decrement = this.decrement.bind(this)
        this.reset = this.reset.bind(this)
    }

    render() {
        return (
          <div className="counter">
            <CounterButton by={1} incrementMethod={this.increment} decrementMethod={this.decrement}/>
            <CounterButton by={10} incrementMethod={this.increment} decrementMethod={this.decrement}/>
            <CounterButton by={25} incrementMethod={this.increment} decrementMethod={this.decrement}/>
            <span className="count">{this.state.totalCounter}</span>
            <div><button className="reset" onClick={this.reset}>Reset</button></div>
          </div>
        )
      }

      
    // Increment the value in span by the prop value clicked
    increment(value){
        // Correct format using arrow function
        this.setState(
            (prevState) => {
            return {totalCounter: prevState.totalCounter + value}
        })
    }

    // Decrement the span value
    decrement(value){
        // Correct format using arrow function
        this.setState(
            (prevState) => {
            return {totalCounter: prevState.totalCounter - value}
        })
    }

    // Reset button will set state back to start
    reset(){
        this.setState({
                totalCounter: 0
            })
    }
}

export default Counter