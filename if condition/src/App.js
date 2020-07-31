import React, { Component } from 'react'
import User from './User'
import Guest from './Guest'

export default class App extends Component {
    render() {
        // if condition hm JSX me nahi likh sakte.
        // hm render() me likhte hain
        const isRegistered = this.props.consumer;
        if(isRegistered){
           return <User />
        }
        // hm yahan else b likh sakte the lekin simple he agar if condition true nahi he to niche wAla render hoga.else yahan unnecessary he.
        return <Guest />
        return (
            <div>
                
            </div>
        )
    }
}
