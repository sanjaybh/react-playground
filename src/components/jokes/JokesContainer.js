import React from "react"
import Jokes from "./Jokes"
import jokesData from "./JokesData.js"

function JokesContainer(){
    /*
    const num = [1,2,3,4]//{JokesData}
    const double = num.map(function(item){
        return item*2
    })//use map, reduce etc

    console.log("HERE-"+double)
    */

   //const jokescomponent = jokesData.map(joke =>  <Jokes question={joke.question} punchLine={joke.punchLine} />)
   //OR
   const jokescomponent = jokesData.map(joke => {
        return (
            <Jokes key={joke.id} question={joke.question} punchLine={joke.punchLine} />
        )
    })
    //jokecomponent is an array and can be used directly in react JSX
   //console.log(jokesData)
    return (
        <div>
            <h3><u>Jokes and the Punchline</u></h3>
            {jokescomponent}
        </div>
    )
}

export default JokesContainer