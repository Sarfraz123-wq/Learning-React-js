import React, { Component } from 'react'
export default class App extends Component {
   state={
       name: "",
       password: ""
   }
   fixTheProblem = (e)=>{
       this.setState({[e.target.name]: e.target.value})
   }
   handleForm = (e) =>{
       console.log(e.target[0].name)
       // simply ye name print krega q k ye input[0].name he   
       console.log(e.target[1].name)
     // password print 
        e.preventDefault();//ye mthod onSubmit pe lagana zaroori hota he nahi to ye usi time gayab ho jata he.

   }
    render() {
         return (
            <React.Fragment>
                <form onSubmit={this.handleForm}>
                    <h2> Controlled by React</h2>
                    <input type="text" name ="name" value={this.state.name} onChange={this.fixTheProblem}   /> <br /> <br />
                    <input type="text" name ="password" value={this.state.password} onChange={this.fixTheProblem}/>
                    <input type="submit" value="Submit"/>
                {/* default value sahih kam karta he agar hm value likhtte hain to hamen onChange handler use krna parta he */}
            {/* same code works for textarea as well */}
                </form>
           
        </React.Fragment>
        )
    }
}
