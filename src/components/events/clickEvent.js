import React from "react"

function handleClick() {
    alert("I was clicked");
}

function ClickEvent() {
    return (
        <div>
            <img onMouseOver={() => console.log("Hovered!")} src="https://www.fillmurray.com/200/100" />
            <br />
            <br />
            <button onClick={() => alert("I was clicked!")}>Click me</button>
        </div>
    )
}

export default ClickEvent;
