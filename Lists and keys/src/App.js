import React, { Component } from 'react'

export default class App extends Component {
    state = {
        users:[
            {id: 101, name:"Sarfraz",password:"1a2b3c"},
            {id: 102, name:"tahir",password:"abcdefg"},
            {id: 103, name:"Basit",password:"uvwxyz"},
        ],
        // we can use other properties as well.
        isMarried: false
    }
    // How can we access them?

    render() {
        // We have to come here in render() method.
        // we have to use this keeyword with state because of class.
        // if we don't use this keyword it gives an error state is not defined.
        const newUsers = this.state.users.map( (user)=>{
           // console.log(user);
           return <h1 key={user.id}> ID: {user.id} Name: {user.name} Password: {user.password} </h1>
        } )






        //const arr = [10,20,30,40];
        // if we have to take input as props.
        
        //const arr = this.props.numbers;
        
        // Method#1:
        // const newArr = arr.map(  (num)=>{
        //     console.log("Num = ",num)
        // return <li> {num*2} </li>
        // // for using javascript we have to use {}.
        // }  );
        // console.log("Old Array: ",arr);
        // console.log("New Array: ",newArr);
        // return <ul> {newArr} </ul>

        return (
            // Method #2 in return 
            newUsers
            // <div>
            //     {/* Here we can use JSX */}
            //     <ul>
            //         {arr.map((num)=>{
            //             return <li> {num} </li>
            //         })}
            //     </ul>
            // </div>
        
        // It gives warning by saying..
        // index.js:1 Warning: Each child in a list should have a unique "key" prop.
        // so we can fix it by using id property of each because id is unique for all. or we can use index number as well because each element has it's own index number. so we can use index number in map method. it takes 2nd parameter as index number.
        )
    }
}
