import React, { Component } from 'react';

class WelcomeComponent extends Component{
    constructor(props){
        super(props)
        this.state = {
        }
        
        this.handleSuccessfulResponse = this.handleSuccessfulResponse.bind(this)
        this.handleError = this.handleError.bind(this)
    }

    render() {
        return(
            <div className="welcome">
                <h1 className="title-welcome">Welcome!</h1>
                <p className="welcome-info">
                    Welcome to the TODO List Application <br></br>
                </p>
                <p className="welcome-summary">
                    Once signed in you can either: <br></br><br></br>   
                </p>
                <dl>
                    <dt>Home Page</dt>
                    <dd>Visit this page which is the Home Page</dd> <br></br>
                    <dt>TODO List</dt>
                    <dd>Go to the TODO list page, where you can add or remove reminders of task</dd><br></br>
                    <dt>Logout</dt>
                    <dd>Logout which will take you back to the login screen</dd>
                </dl>
            </div>
        )
    }

    handleSuccessfulResponse(response){
        this.setState( {welcomeMessage : response.data.message})
    }

    handleError(error){
        console.log(error.response);
        this.setState({welcomeMessage: error.response.data.message})
    }
}

export default WelcomeComponent