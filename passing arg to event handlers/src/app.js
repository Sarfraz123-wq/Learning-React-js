import React,{Component} from 'react';
import { render } from '@testing-library/react';
class Student extends Component{
    // State without constructor or state property
    state = {
        name:"Sarfraz",
        // id:1
    };

    // Event Handler Arrow Function

    // handleClick = (id) => {
    //     console.log(id);
    // is tarah hm direct argument pass nahi kr sakte
    // };
    // handleClick = (id,e,j) => {
    handleClick = (id) => {
        console.log(id);
        // console.log(e);
        // console.log(j);
        //we can pass multiple arg as well.
    };
    // handleClickArg = (e) =>{
    // this.handleClick(this.state.id,e,j);
    handleClickArg = () =>{
       
        this.handleClick('007');
    }
    render(){
        return(
            <div>
                <h2> Hello, {this.state.name}</h2>
                {/* <button onClick={this.handleClick("101")}> Click Me</button> */}
                {/* is tarah hm direct argument pass nahi kar sakte is tarah function automatic call hojata he baghair event k */}
                <button onClick={this.handleClickArg}> Click Me</button>
           
            </div>
        ); 
    }
}
export default Student;