import React, { Component } from 'react'
import style from './App.module.css'
import User from './User'
import pic1 from './bg-2.jpg'
//agar hm yahan user ki css file ko import kr rahe hain to object name change rakhnge warna error dega name clash ka. 

//import style2 from './User.module.css'

export default class App extends Component {
   state={
       name: "User Name:",
       password: "Password:"
   }
    fixTheProblem = (e)=>{
       // this.setState({[e.target.name]: e.target.value});
     const value = e.target.name === "name" ? 
     e.target.value.toUpperCase() : e.target.value;
     this.setState({[e.target.name]:value})
        //   e aik event object he jabke target currrent target batata hhe oor uski jo value he wo krdo. ye mene likha he
    // is sey hm 10 letters se zyada input nahi likh sakte 
    };
    render() {
         return (
            <React.Fragment>
                <form>
                    <h2> Controlled by React</h2>
                    <input type="text" name ="name" value={this.state.name} onChange={this.fixTheProblem}   /> <br /> <br />
                    <input type="text" name ="password" value={this.state.password} onChange={this.fixTheProblem}/>
                {/* default value sahih kam karta he agar hm value likhtte hain to hamen onChange handler use krna parta he */}
            {/* same code works for textarea as well */}
                </form>
           
        </React.Fragment>
        )
    }
}
