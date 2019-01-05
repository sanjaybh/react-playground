import React from "react";

class Logged extends React.Component {

    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: true
      }
    }
    
    render(){
        let displayState
        if(this.state.isLoggedIn){
            displayState = "In"
        }
        else{
            displayState = "Out"
        }
        return <h1>User is logged {this.state.isLoggedIn ? "In" : "Out"} </h1>;
    }
}

export default Logged