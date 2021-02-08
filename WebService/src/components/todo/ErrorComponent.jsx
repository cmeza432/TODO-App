import React, { Component } from 'react';

export class ErrorComponent extends Component{
    render(){
        return (
            <div className="error">
                <h1>Oops!</h1>
                <p>Something went wrong. Try to navigate to a correct link!</p>
            </div>
        )
    }
}

export default ErrorComponent