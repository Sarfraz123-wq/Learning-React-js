// // Components are the building blocks of any react app.
// // Components let you splitt the UI into independant,reusable pieces and think aboutt each in isolation.
// // Components are like js functions
// // Always start component with capital letter.
// // React treats starting with lowercase letters as DOM tags. for example <div> h1 etc

//const { Component } = require("react");

// import React from 'react';
// // function student(){
// //     return <h1> Hello Sarfraz </h1>
// //     // Hm yahan pe h1 element create kr rahe hain to hamen react.createElement k lye react ko import karna hoga
// // }
// // const Stud = () =>{
// //     return <h1>Hello Sarfraz Student</h1>
// //     // Hm yahan pe h1 element create kr rahe hain to hamen react.createElement k lye react ko import karna hoga
// // }
// // export default Stud;
// // // ab isko render hm index.js me karenge
// // me isko commment krta hn q k error de raha he k only one default export allowed per module.



// const Stud2 = props =>{
//    return <h1> Hello {props.name} Student </h1>
// }
// export default Stud2;


// Now for class component
// import React, {Component} from 'react';
// class Student extends Component{
//     render(){
//         return <h1>Hello Student from class</h1>
//     }
// }
// export default Student;


import React, {Component} from 'react';
class Student extends Component{
    render(){
        return <h1>Hello Student from {this.props.name}</h1>
    }
}
export default Student;

// class me agar props use kr rahe hain to function me to hm props as a paramter lete hain or {} me props.name likhte hain or render krte waqt name me value pass krdete hain lekin yahan class me parameter nahi lete hain simply {} me this.props.name likhte hain yahan this class ko denote kr raha he or render krte waqt name me value pass krdenge.