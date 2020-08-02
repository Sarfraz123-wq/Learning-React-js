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
        if(kyaLoginHe){
            return <User logoutData = {this.logoutFunction}/>
        }
        else{
            return <Guest loginData = {this.loginFunction}/> 
        }
    }
}
