import React, { Component } from 'react'
export default class App extends Component {
   state = {
    name:"Name",
    password:"12345678"
   }
   changeHandler = (e)=>{
       this.setState({[e.target.name]: e.target.value })
   }
   submitForm = (e)=>{
       e.preventDefault();
       console.log([e.target.name.value])
   }
    refVariable = React.createRef();  
    componentDidMount = ()=>{
        this.refVariable.current.focus();
    }
    render() {
         return (
            <React.Fragment>
             <form onSubmit={this.submitForm}>
                <input type="text" name="name" onChange={this.changeHandler} value={this.state.name} ref={this.refVariable}/>
                <input type="text" name="password" onChange={this.changeHandler} value={this.state.password}/>
                <input type="submit" />
             </form>
           
        </React.Fragment>
        )
    }
}
