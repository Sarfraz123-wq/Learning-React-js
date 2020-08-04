import React, { Component } from 'react'
import style from './User.module.css'
export default class User extends Component {
    render() {
        return (
            <React.Fragment>
                <h1 className={style.myName}> This is Sarfraz Rasheed </h1>
            </React.Fragment>
        )
    }
}
