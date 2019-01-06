import React from 'react'
import ReactDom from "react-dom";

class LifeCycle extends React.Component {
    constructor(props) {
      super(props)
    
      this.state = {
         
      }
    }

    componentDidMount() { 
        //lifecycle method - 1 (component just born)
        //mostly used for API calls
        
    }

    render(){

        return (
            <h1>Code goes here</h1>
        )
    }
    
}
export default LifeCycle