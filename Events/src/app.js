import React, {Component} from 'react';
class Pakistan extends Component{
    // handleClick(){ 
        // agar hm regular expression se function create krte hain to this keyword undefined deta he islye arrow function use krte hain. wo this likhne se poora object print krta he.

        //     handleClick = ()=>{
    //     console.log("Button Clicked", this);
    // }

    // Method2 by using regular expression function 
    constructor(props){
        super(props);
        // we can use props as well 
        this.state = {
            name: "Kehar",
            rollNo: this.props.roll
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        console.log("Button Clicked",this)
    }
    
    

    // ab yahan this keyword use kr raha he hamen bind use krna hota he
    render(){
        function startLink(e) {
            e.preventDefault();
            // ye likhne se link open nahi hoti he.
            console.log("Link's behaviour is changed")
        }

        return(
            <div>
                <h1>Hello {this.state.name} Your roll is {this.state.rollNo}</h1>
            <button onClick={this.handleClick}> Click Me </button>
            {
            /* agar hmen aisa link create krna he jispe click krne se link open na ho to hm html me kuch code is tarah likhte hain
            <a href = "www.google.com.pk" onclick ="startLink(); return false">Click Me </a>             
            */}
            {/* 
            lekin react me aise krte hain */}
            <a href="http://google.com.pk" onClick={startLink}>Click Here</a>
        
            
            </div>
        )
    }
}

export default Pakistan;