import React from "react"

import TodoItem from "./TodoItem.js"

function TodoMain(){
    return (
        <div className="todo-list">
            <TodoItem />
            <TodoItem />
            <TodoItem />
            <TodoItem />

            <hr />
        </div>
    )
}

export default TodoMain