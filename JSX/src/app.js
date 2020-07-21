import React from 'react';
import './app.css';
// // Simple String
// const el =  <h1>Hello Sarfraz</h1>
// export default el;
// Variable
// const name = "Tahir";
// const el =  <h1>Hello {name}</h1>
// export default el;

// Math Expression
// const el =  <h1> {10+20} </h1>
// export default el;

// Property

// let user = {
//     fistName : "kehar"
// }
// const el = <h1> Hello {user.fistName} </h1>
// export default el;

// // Only one default export per module.

// // Simple Arrow Method
// const El = ()=> {return <h1>Hello Sarfraz</h1>}
// export default El;

// with attributes
const el = <h1 className = 'bgcolor'>Hello Sarfraz</h1>
// ab hm css ki file banayenge jahan isko style denge
// css ki file ko link krne k lye import use krte hain or ye bible ki  zimedari he k ise aisa banaye k sab browsers k lye link ho jaaye.
// or hm import top pe likhte hain warna error deta he. 
export default el;
