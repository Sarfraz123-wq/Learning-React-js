// Theory + Concepts ..

// State is similar to props, but it is private and fully controlled by component. We can create state only in class component. It is possible to update or Modify the state.

// import React, {Component} from 'react';
// class Person extends Component{
//     state = {
//         name: "Sarfraz",
//         rollNo: this.props.roll
//     }
    
//     render(){
//         return(
//             <h1> Hey, My name is {this.state.name} and My roll number is {this.state.rollNo} </h1>
//         )
//     }
// }
// export default Person;

// agar render() method se pehle state define kr rahe hain to this nahi likhte agar render() method likhne k bad state define kren to this.state likhna he.
// or hm state me props b use kr sakte hain input lene k lye.
// agar hm input ko state se use kren to {this.state.variableName} likhenge or dooosra tariqa access krne ka {this.props.attribute} matlab jese yahan {this.props.roll} rollNO nahi q k wo variable name he.

// Method:2
// Inside Constructor.
import React, {Component} from 'react';
class Person extends Component{
    constructor(props){
        // It is req to call the parent class constuctor 
        super(props);
        // q k state within constructor bana rahe hain to zaroori he k this.state likhen.
        this.state = {
            name: "Sarfraz",
            rollNo: this.props.roll
        } 
    }
    render(){
        return(
            <h1> Hey, My name is {this.state.name} and My roll number is {this.state.rollNo} </h1>
        )
    }
}
export default Person;
// same he dono methods lekin jab hum constructor k zariye banayen to zaroori he k super() method call kren q k is k zariye se hm parent class ko ya iske properties/elements ko call karte hain.