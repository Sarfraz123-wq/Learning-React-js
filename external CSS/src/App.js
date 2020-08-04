import React, { Component } from 'react'
import './App.css';
import User from './User';
// External CSS global ka sccope rkhta he ismen agar same class k do different element/component honge to wo classes clash hongi or style dono ka same hojayega. ye aik problem create kr sakta he. 
export default class App extends Component {
    render() {
        let style=false;
        return (
            <React.Fragment>
                <h1 className="txtb txtb2"> Hello App</h1> 
                {/* ab dono ka color orange dikha raha he ye problem create hoti he external css se  */}
                <User color={style ? "txtb" : "txtg"} />
                {/* agar style property true he to txtb class hogi nahi to txtg */}
             
            </React.Fragment>
        )
    }
}
