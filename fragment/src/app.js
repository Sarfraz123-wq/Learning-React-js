// import React, {Component} from "react";

// class App extends Component{
//     render(){
//         return <h1> Hello Sarfraz Rasheed </h1>
//     }
// }
// export default App;


// Fragment
// It is used to group a list of children without adding extra nodes to the DOM.
// Ye 1 se zyada return lene k lye useful he.
// Syntax.
/* <React.Fragment>
    <h1> Hello World</h1>
    <h2> Hello World</h2>
</React.Fragment> */
// <> <> also denotes fragment in latest browsers




import React, {Component} from "react";

class App extends Component{
    render(){
        return (
        <React.Fragment>
        <h1> Hello Sarfraz Rasheed </h1>
        <h2> Hello Sarfraz Kehar </h2>
        </React.Fragment>
        )
        // we can also write <> </> for fragment.
        // If we only write <Fragment> instead of React.Fragment then we should import Fragment after {Component} by separating it with comma.
    }
}
export default App;
