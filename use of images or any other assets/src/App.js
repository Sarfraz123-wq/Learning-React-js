import React, { Component } from 'react'
import style from './App.module.css'
import User from './User'
import pic1 from './bg-2.jpg'
//agar hm yahan user ki css file ko import kr rahe hain to object name change rakhnge warna error dega name clash ka. 

//import style2 from './User.module.css'

export default class App extends Component {
    render() {
         return (
            <React.Fragment>
            {/* if the image is in Public folder then we use code this in app.js file. */}
            <img src={process.env.PUBLIC_URL + "/bg-0.jpg"} width="500px"/>
            {/* if the image is in src folder then we use code this in app.js file. */}
            {/* first we have to import it. */}
            <img src={pic1} alt="pic1" width="500px" />
            </React.Fragment>
        )
    }
}
