import React, { Component } from 'react'
import Guest from './Guest'
import User from './User'

export default class App extends Component {
    state = {
        isLogged : false
    }
    loginFunction = ()=>{
       // return <User />
         this.setState({isLogged : true});
    }
    logoutFunction = ()=>{
        this.setState({isLogged : false});
        //return <Guest />
    }
    render() {
        const kyaLoginHe = this.state.isLogged;
        return(
            // ternary operator..
            // ye ham JSX me likh sakte hain
            kyaLoginHe ? (<User logoutData={this.logoutFunction}/>) : (<Guest loginData={this.loginFunction} />)
        )
    }
}
