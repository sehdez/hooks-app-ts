import React from 'react'
import { Todo, TodoListProps } from '../types/TodoInterface';
import { TodoListItem } from './TodoListItem';


export const TodoList = React.memo(({
    handleDelete, 
    handleToggle, 
    todos}: TodoListProps) => {
  return (
    <ul className='list-group '>
        {
            todos.map( (todo:Todo, i : number) => (
                // TodoList
                    <TodoListItem
                        key={ todo.id }    
                        todo = { todo }
                        i    ={ i }
                        handleDelete ={ handleDelete }
                        handleToggle = { handleToggle } />
                
            )) 
        } <hr />
    </ul>
  )
})








