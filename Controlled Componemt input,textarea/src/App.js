import React, { Component } from 'react'
import style from './App.module.css'
import User from './User'
import pic1 from './bg-2.jpg'
//agar hm yahan user ki css file ko import kr rahe hain to object name change rakhnge warna error dega name clash ka. 

//import style2 from './User.module.css'

export default class App extends Component {
   state={
       value: "User Name:"
   }
    fixTheProblem = (e)=>{
      this.setState({value:e.target.value.toUpperCase().substr(10)})
    //   e aik event object he jabke target currrent target batata hhe oor uski jo value he wo krdo. ye mene likha he
    // is sey hm 10 letters se zyada input nahi likh sakte 
    }
    render() {
         return (
            <React.Fragment>
                <form>
                    <h2> Controlled by React</h2>
                    <input type="text" value={this.state.value} onChange={this.fixTheProblem}   /> <br /> <br />
                    <input type="password" defaultValue="password:" />
                {/* default value sahih kam karta he agar hm value likhtte hain to hamen onChange handler use krna parta he */}
            {/* same code works for textarea as well */}
                </form>
           
        </React.Fragment>
        )
    }
}
