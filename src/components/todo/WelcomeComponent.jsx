import React, { Component } from 'react';

class WelcomeComponent extends Component{
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
}

export default WelcomeComponent