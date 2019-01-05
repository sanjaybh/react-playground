import React from 'react'

class ClassComponent extends React.Component{
    constructor(){
        super()
        this.state = {
            answer : "Yes"
        }
    }
    render(){
        const date = new Date()
        return (
            <div>
                <h1>Code goes here {date.getHours()%12}:{date.getMinutes()}</h1>
                <h3>{this.state.answer}</h3>
            </div>
        )
    }
}
export default ClassComponent