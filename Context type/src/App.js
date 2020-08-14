// agar scenario ye h k App.js parent he User.js ka or User.js parent
// he Guest.js ka...
// or scenario ye h k state ki properties hamen direct use krni he guest me 
// app.js se. 
import React, { Component } from 'react'
import User from './User';
import {myContext} from './Context'
import {Provider} from './Context.js'
export default class App extends Component {
    state={
        name:"Sarfaraz",
        roll:"007",
    }
    myFunction = ()=>{
        this.setState({name:this.name="Tahir"});
    };
        render() {
            const contextValue = {
                data:this.state,
                meraFunction:this.myFunction
            };
        return (
            <React.Fragment>
            <Provider value={contextValue}>
               
                <User />
                {/* is sey user component render ho raha he or 
                user me Guest render hoo rha jis ki wajah se Context API
                work kr rhi he.
                
                */}
          </Provider>
        </React.Fragment>
        )
    }
}
