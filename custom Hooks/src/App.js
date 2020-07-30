import React, { Fragment } from 'react';
import useCustomCounter from './Custom.js';
function App(){
    const data = useCustomCounter();
    // we can use multtiple custom Hooks
    // we just have to declare it with different variable name b/c we gonna declare it with useCustomCounter which is already been imported here.
    const data1 = useCustomCounter();

    return(
        <Fragment>
            {/* data.count, count which we took return in Custom.js */}
            <h1> Count up: {data.count} </h1>
            <button onClick={data.handleIncrement}> Increment </button>

            <h1> Count up: {data1.count} </h1>
            <button onClick={data1.handleIncrement}> Increment </button>
        </Fragment>
    );
}
export default App;
