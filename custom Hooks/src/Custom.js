import {useState} from 'react';
//
function useCustomCounter(){
    // using useState with initial value 0
    const [count,setCount] = useState(0);
    const handleIncrement = () =>{
        setCount(count+1);
    };
    return{
        // we take returns these, so we can use them in App.js
        count,
        handleIncrement
    };
}
export default useCustomCounter;