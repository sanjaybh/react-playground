import React from "react";

import TodoItem from "./TodoItem.js";
import todoData from "./todoData.js";

class TodoMain extends React.Component {

    constructor() {
      super()
    
      this.state = {
         todos : todoData
      }

      this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange(id){
        //console.log('Welcome', id)        
        
        this.setState(prevState => {            
            const updatedState = prevState.todos.map(todo => {
                if(todo.id === id){
                    todo.completed = !todo.completed
                }
                return todo
            })

            return {
                todos: updatedState
            }            
        })

    }

    render(){
        const todoItems = this.state.todos.map(item => (
          <TodoItem
            key={item.id}
            item={item}
            handleChange={this.handleChange}
          />
        ));

        return <div className="todo-list">{todoItems}</div>;
    } 
  
}

export default TodoMain;
