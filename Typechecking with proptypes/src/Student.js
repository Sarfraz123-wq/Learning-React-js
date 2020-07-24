// import React from 'react';
// const Student = props =>{
//     return(
//         <div>
//             <h1>Hello {props.name}</h1>
//             <h2>Your Roll: {props.roll} </h2>
//         </div>
//     )
// }
// export default Student;

// Class based Component
import React, {Component} from 'react';
import { render } from '@testing-library/react';
class Cricketer extends Component{
render(){
    return(
        <div>
            <h1> Hello, {this.props.name}</h1>
            <h2> Your Roll: {this.props.roll} </h2>
        </div>

    )
} 
}
export default Cricketer;