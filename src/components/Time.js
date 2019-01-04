import React from "react"
import ReactDOM from "react-dom"

function Time() {
  const date = new Date(2019, 1, 3, 9) //9, 15, 22
  const hours = date.getHours()
  let timeOfDay

  const styles = {
    fontSize: 30
  }
  
  if (hours < 12) {
    timeOfDay = "morning"
    styles.color = "#04756F"
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "afternoon"
    styles.color = "#8914A3"
  } else {
    timeOfDay = "night"
    styles.color = "#D90000"
  }
  
  const styles_1 = {
    color: "#FF8C00", 
    backgroundColor: "#FF2D00",
    fontSize: 16
  }

  return (
    <h3 style={styles}>Good {timeOfDay}!</h3>
  )
}
export default Time
