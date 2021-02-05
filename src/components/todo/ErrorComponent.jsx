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

// Way to show success and login failed messages without jsx login on top
// function ShowInvalidCredentials(props){
//     if(props.hasLoginFailed) {
//         return <div>Invalid Credentials</div>
//     }
//     return null
// }

// function ShowLoginSuccessMessage(props){
//     if(props.showSuccessMessage) {
//         return <div>Success!</div>
//     }
    // return null
// }

export default ErrorComponent