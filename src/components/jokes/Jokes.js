import React from "react"

function Jokes(props){
    return (
        <div>
            <h5 style={{display: props.question ? "block" : "none"}}>Question: {props.question} </h5>
            <h6 style={{color: props.question ? "#000" : "#888888"}}>Answer: {props.punchLine} </h6>
            <hr />
        </div>
    )
}

export default Jokes