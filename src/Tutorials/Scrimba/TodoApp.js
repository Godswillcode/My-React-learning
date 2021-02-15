import React, { Component } from 'react'
import TodoItem from './TodoItem'
import {todoData} from './todoData'

// function TodoApp() {
//     const todoItems = todoData.map((Item) => <TodoItem  {...Item} key={Item.id}/>)
//     return (
//         <div className="todo-list">
//            {todoItems}
//         </div>
//     )
// }

class TodoApp extends Component{
    constructor(props) {
        super(props)
    
        this.state = {
             todos: todoData
        }

        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange(id){
       this.setState(prevState => {
           const updatedTodos = prevState.todos.map(todo => {
               if(todo.id === id){
                   todo.completed = !todo.completed
               }
               return todo
           })
           return {todo: updatedTodos}
       })
    }

    render(){
        const todoItems = this.state.todos.map((Item) => <TodoItem  {...Item} key={Item.id} handleChange={this.handleChange}/>)
     
        return(
            <div className="todo-list">
                {todoItems}
            </div>
        )
    }
}
export default TodoApp
