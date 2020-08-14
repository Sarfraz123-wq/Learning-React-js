import React, { Component } from 'react'
export default class App extends Component {
   constructor(props){
       super(props);
   
    this.ref1 = null;
    this.ref2 = element =>{
       this.ref1 = element;
   }
}
componentDidMount = ()=>{
    // if(this.ref1){ No need of this.
        this.ref1.focus()
    //}
}
state = {
       name:"Name",
       password:"Password"
   }
   changeHhandler = (e)=>{
       this.setState({[e.target.name]:e.target.value})
   }
   render() {
         return (
            <React.Fragment>
             <form onSubmit={this.submitForm}>
                <input type="text" name = "name" value = {this.state.name} onChange={this.changeHhandler} />
                <input type="text" name = "password" value = {this.state.password} onChange={this.changeHhandler} ref={this.ref2} />
                <input type="submit" />
             </form>
           
        </React.Fragment>
        )
    }
}
