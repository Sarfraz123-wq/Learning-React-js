import React, { Component } from 'react'

export default class User extends Component {
    render() {
        return (
            <React.Fragment>
                <h1> Hello Sarfraz </h1>
                <button onClick ={this.props.logoutData}> Log Out </button>
            </React.Fragment>
        )
    }
}
