import React, { useReducer, useEffect } from 'react'
import { todoReducer } from './todoReducer'

import './todoApp.scss'
import { TodoList } from './components/TodoList';
import { Todo } from './types/TodoInterface';
import { TodoAdd } from './components/TodoAdd';


export const TodoApp = () => {


    const init = () => {
        return JSON.parse( localStorage.getItem('todos')! ) || [];
    }
    const [ todos, dispatch ] = useReducer( todoReducer, [], init )
    
    

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify( todos ))
    }, [ todos ]);



    

    const handleDelete = ( todoId:number ) => {
  ;
        const action = {
            type: 'delete',
            payload: todoId
        }
        dispatch(action);
    } 
    const handleToggle = ( todoId:number ) => {
        dispatch({
            type: 'toggle',
            payload: todoId
        })        
    }
    const handleAdd = ( newTodo:Todo ) => {

        dispatch({
            type: 'add',
            payload: newTodo
        })

    }



  return (
    <div>
        <h1>TODO APP </h1>
        <hr />

        <div className='row' >
            <div className="col-12 col-md-7">
            <h4>TODOs( { todos.length } )</h4>
            <hr />
            {/* Todo List */}
            <TodoList
                todos = { todos }
                handleDelete ={ handleDelete }
                handleToggle = { handleToggle } />
            </div>


            <div className="col-12 col-md-5">
                <TodoAdd handleAdd = { handleAdd }/>
                


            </div>
                        
        </div>

        


    </div>
  )
}

