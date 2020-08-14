import React, { Component } from 'react'
import { myContext } from './App'

export default class User extends Component {
 
    render() {
        return (
            <React.Fragment>
                <h3> Guest Component </h3>
                {/* {this.props.naam} */}
                <myContext.Consumer>
                { ({data,meraFunction}) => <div><h4> Name:{data.name} Roll No: {data.roll}
            
                </h4>
                <button onClick= {meraFunction}>Click Here </button>
                </div>}
                </myContext.Consumer>
                </React.Fragment>
        )
    }
}
