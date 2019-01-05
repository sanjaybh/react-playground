import React from "react";

import TodoItem from "./TodoItem.js";
import todoData from "./todoData.js";

class TodoMain extends React.Component {

    constructor(props) {
      super(props)
    
      this.state = {
         tododata : todoData
      }
    }
    
    render(){
        const todoItems = this.state.tododata.map(function(item) {
          return <TodoItem key={item.key} item={item} />;
        });
        return (
            <div className="todo-list">
                {todoItems}
            <hr />
            </div>
        );
    } 
  
}

export default TodoMain;
