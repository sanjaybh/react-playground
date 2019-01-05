import React from "react"

import TodoItem from "./TodoItem.js"
import todoData from "./todoData.js";

function TodoMain(){
    const todoItems = todoData.map(function(item){
        return <TodoItem key={item.key} item={item} />;
    })
    return <div className="todo-list">
        {todoItems}
        <hr />
      </div>;
}

export default TodoMain