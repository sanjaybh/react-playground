import React from "react"
import Time from "./Time.js"

function Footer(){
    const date = new Date()
    
    return (
        <footer>
            <h6>Footer - @ {date.getHours() % 12}: {date.getMinutes()} o'clock!</h6>
            <Time />
        </footer>
    )
}
export default Footer