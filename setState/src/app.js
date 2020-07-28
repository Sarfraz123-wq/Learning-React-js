import React, {Component, Fragment} from 'react';
import { func } from 'prop-types';
class Ohyes extends Component{
    constructor(props){
        super(props);    
    this.state = {
        name: "Sarfraz",
        roll: this.props.rollNo
    };
}
// hum direct state ki properties ko is tarah change nahii krsakte.
// this.state.name = "kehar",
// this.state.roll = '107'
// is trah backend me change to hojata he lekin react ko pata nahi chalta is lye react me setState method he wo use krte hain.

    myFunction = () => {
        this.setState({
            name:"Skehar",
            roll: "95"
        })

        // It takes two parameters 
        // this.setState(function(state,props)
        // {
        //     console.log(state);
        //     //prints all properties of state including with props 
        //     console.log(props);
        //     //prints all properties of props 
        // })
    }
    render(){
        return(
            <Fragment>
            <h1> Hello, My name is {this.state.name} and my roll number is {this.state.roll} </h1>
            <button onClick={this.myFunction}> Click Me  </button>
            </Fragment>
        )
       
    }    
}
export default Ohyes;