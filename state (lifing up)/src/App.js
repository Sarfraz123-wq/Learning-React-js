import React, { Component } from 'react'
import User from './User';
import Guest from './Guest';
export default class App extends Component {
    state={
        name:"Sarfaraz",
        roll:"007"
    }
        render() {
        return (
            <React.Fragment>
                
                <User Name = {this.state.name}/>
                <Guest ROLL = {this.state.roll } />
            </React.Fragment>
            )
    }
}
