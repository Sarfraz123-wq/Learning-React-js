import React, { useState, useEffect } from 'react';    
function App(){
    const nameStateVariable = useState("Sarfraz");
     const [count,setCount] = useState(0);
    // we can use more than one useState if we needed.
    const [count1,setCount1] = useState(50); 
    const increment = () =>{
        setCount(count+1);
    };
    const decrement = () =>{
	    setCount1(count1-1);
    };
    // useEffect har render ya update hone k bad call hota he islye yee hamari applicattion ko slow krdege chance he islye hm isko srf wahin call krte hain jahan zaroorat ho matlab isko doosra arg wo array pass krenge jis ko use krne k bad ye call ho ab sab ki update pe ye call nahi hoga matlab hmne conndition lagadi he.

   useEffect(()=>{
        console.log("Use effect called")
    },[count])

    // iska matlab hm jab count+ karenge tab he useEffect call hoga ab dec pe call nai hoga
    return(
        <React.Fragment>
            <h1> {count} </h1>
            <button type="button" onClick={increment}> Increase </button>
            <h1> {count1}</h1>
            <button type="button" onClick={decrement}> Decrease </button>
           
        </React.Fragment>
    );
}
export default App;
