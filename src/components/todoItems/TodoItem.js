import React from "react"

function TodoItem(props) {
    const completedStyle = {
        fontStyle:"italic",
        color:"#cdcdcd",
        textDecoration:'line-through'
    }
    return (
        <div className="todo-item">
            <input
                type="checkbox"
                checked={props.item.completed}
                onChange={() => props.handleChange(props.item.id)}
            />
            <p style={props.item.completed ? completedStyle : null}>{props.item.text}</p>
        </div>
    )
}
/*
class TodoItem extends React.Component {
  //class based method

  constructor(props) {
    super(props);    
  }

  render() {
    return (
        <div className="todo-item">
            <input
                type="checkbox"
                checked={props.item.completed}
                onChange={() => props.handleChange(props.item.id)}
            />
            <p>{props.item.text}</p>
        </div>
    )
  }
}
*/
export default TodoItem;