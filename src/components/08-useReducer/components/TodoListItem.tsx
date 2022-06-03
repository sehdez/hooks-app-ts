import React from 'react'
import { TodoListItemProps } from '../types/TodoInterface';

export const TodoListItem = ({
    i, 
    handleDelete, 
    handleToggle, 
    todo}: TodoListItemProps
) => {
  return (
    <li className='list-item mb-2'
        key={todo.id}
        >
            <p 
                onClick={ () => handleToggle(todo.id) } 
                className={ `${ todo.done && 'complete' }` }>
                    { i + 1 }. - { todo.desc } 
                </p> 
            <button 
                className=' btn btn-danger' 
                onClick={ (e) => handleDelete( todo.id ) }> 
                    Eliminar
                </button>
            {/* <button className='btn btn-secondary' > Modificar</button> */}
    </li>
  )
}
