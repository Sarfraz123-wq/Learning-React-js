import React, { Component } from 'react'

export default class User extends Component {
    render() {
        return (
            <div>
                <h3> User Component </h3>
                {this.props.Name}
            </div>
        )
    }
}
