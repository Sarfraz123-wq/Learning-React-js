import React, { Component } from 'react'
import style from './App.module.css'
import User from './User'
//agar hm yahan user ki css file ko import kr rahe hain to object name change rakhnge warna error dega name clash ka. 

//import style2 from './User.module.css'

export default class App extends Component {
    render() {
         return (
            <React.Fragment>
                {/* agar hm module css use krte hain to className object ko use kr k dete hain */}
            <h1 className={style.myName}> This is App.js File </h1>
             <User />
             {/* <h3 className={style2.myName}> Tahir Rasheed</h3> */}
            </React.Fragment>
        )
    }
}
