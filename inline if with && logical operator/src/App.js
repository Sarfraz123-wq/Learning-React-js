import React, { Component, Fragment } from 'react'
import User from './User'

export default class App extends Component {
    render() {
        const isPrime = this.props.primeMember;
        // if(isPrime){
        //    return <User />
        // }
        //agar me aise if condition use krta hn to srf ye part render ho raha he is App me niche return me jo likh raha hn wo display nahi ho raha islye hm inline if with && logical operator use krte hain
        return (  
            <Fragment>
            <h1> Welcome User</h1>
            {isPrime && <User />}
            {/* iska matlab agar isPrime true he to user component render krdo ye b if ki tarah he  */}
        </Fragment>
        )
    }
}
