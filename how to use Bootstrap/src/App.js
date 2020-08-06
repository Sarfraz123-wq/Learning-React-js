import React, { Component } from 'react'
import style from './App.module.css'
import User from './User'
import pic1 from './bg-2.jpg'
//agar hm yahan user ki css file ko import kr rahe hain to object name change rakhnge warna error dega name clash ka. 

//import style2 from './User.module.css'

export default class App extends Component {
    render() {
         return (
        //   we can install bootstrap in our react projects as.
        // npm i bootstrap or we can simply copy paste css links in index.html head section
        // and we have to import it by import "../node_modules/bootstrap/dist/css/bootstrap.css"
        <button className="btn btn-primary">Primary Button</button>
        
        )
    }
}
