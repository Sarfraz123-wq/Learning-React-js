import React, { Component } from 'react'
import './User.css'
export default class User extends Component {
    render() {
        return (
            <React.Fragment>
                <h2 className="txt">This is User.js File {this.props.name} </h2>
                {/* how to create dynamic class ? */}
                <h2 className={this.props.color}> Hello Color </h2>
            </React.Fragment>
        )
    }
}
