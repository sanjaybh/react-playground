import React from "react"
import ReactDOM from "react-dom"

function MyInfo(){
    const myInfo = {
        fname :'Samarth', lname:'Bhan',
        desc: 'Some text will go here',
        places: ['Amritsar', 'Goa', 'Kashmir']
    }
    return (
        <div className="container">
            <hr />
            <h2>{myInfo.fname} {myInfo.lname}</h2>
            <p>{myInfo.desc}</p>
            <ul>
                <li>Amritsar</li>
                <li>Goa</li>
                <li>Kashmir</li>
            </ul>
            <hr />
        </div>
    )
}
//ReactDOM.render(<MyInfo />, document.getElementById('root'))

export default MyInfo