import React, { useState } from 'react';    
function App(){
    const nameStateVariable = useState("Sarfraz");
    // Assign index numbers in variable names for more readability.
    const name = nameStateVariable[0];
    const setName = nameStateVariable[1];
    // we can use object de structuring here as well.
    // const [name,setName] = useState("Sarfraz");
    // we can use more than one useState if we needed.
    const [roll,setRoll] = useState(101); 
    const handleClick = () =>{
        setName("Kehar");
	      setRoll(102);
    };
    return(
        <React.Fragment>
            <h1> {name} </h1>
            <h1> {roll}</h1>
            <button type="button" onClick={handleClick}> Change </button>
        </React.Fragment>
    );
}
export default App;
