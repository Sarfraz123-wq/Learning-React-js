import React, { Component } from 'react'
import { myContext } from './Context'

export default class User extends Component {
    static contextType = myContext;
    render() {
        return (
            <React.Fragment>
                <h3> Guest Component </h3>
                <h4> Name:{this.context.data.name} Roll No: {this.context.data.roll}
                </h4>
                <button onClick={this.context.meraFunction}>Click Here </button>
            </React.Fragment>
        )
    }
}
