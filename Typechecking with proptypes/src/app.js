// For achieving typechecking with proptypes means if you want to have own data type you have to install this pkg.
// npm install prop-types
// We can check in package.json file
import React, { Component } from "react";
import PropTypes from 'prop-types';

// Class Component
class Cricketer extends Component{
    render(){
        return(
            <div>
            <h1> Welcome, {this.props.name}  </h1>
            <h2> You should {this.props.roll} </h2>
            </div>
        );
    }
}
// Yahan end me likhenge 
// yahan pe cricker.proptypes me p small hona lazmi he ye keyword he
// baqi Proptypes.string me P depend krta he hmne ooper import me kese likha he PropTypes k ilawa b doosra name likh sakte hain import k waqt
Cricketer.propTypes ={
    name: PropsTypes.string,
    roll: PropsTypes.number,

}
// agar hm datatype rakhtte hain string or pass krte hain koi number to
// print to karta he lekin console me warning error deta he.