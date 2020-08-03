import React, { Component } from 'react'

export default class App extends Component {
    state = {
        changeBgcolorProperty: false
    };
    changeBgcolor = () =>{
        this.setState({changeBgcolorProperty: true})
    }
    render() {
       const btnStyle = {
            color: "Blue",
            backgroundColor: "Yellow"
        }
        // but if we have to use 2 objects of css in same button/component
        // but how?
        const btnStyle2 = {
            fontSize: "120px"
            
        }
        // for btn
        const styleCSS = {
            backgroundColor: "red",
            color: "black"
        }
        if(this.state.changeBgcolorProperty){
            styleCSS.backgroundColor = "white"
        }
        
        return (
            <div>
                {/* <button style={btnStyle}> Click Me </button> */}
                {/* if we have to use more than one styles objects in single component or add extra properties we have to use spread operator. */}
                <h1 style={{...btnStyle,...btnStyle2, ...{fontFamily:"sans-serif"}}}> Sarfraz </h1>
            	{/* -------------------------------------- */}
                {/* Here we the scenario is i want to make button if i click on it then it's bgcolor should be changed to white.  */}
                <button onClick={this.changeBgcolor} style={styleCSS}> Click Me </button>
            </div>
        )
    }
}
