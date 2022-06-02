import React, { useState } from 'react'
import { useCounter } from '../../hooks/useCounter';
import { Small } from './Small';

export const Memorize = () => {
  
    const {counter, increment, decrement} = useCounter(10);
    const [show, setShow] = useState(true)

    return (
    <div>
        <h1>Counter: <Small value={ counter } /> </h1>
        <hr />

        <button 
            className='btn btn-primary me-2' 
            onClick={ ()=> decrement() }>
                decrementar    
            </button> 
            

        <button 
            className='btn btn-primary' 
            onClick={ ()=> increment() }>
                Incrementar    
        </button>

        <button 
            className='btn btn-outline-primary'  
            onClick={ ()=> {
                setShow( !show )
            }}>
                Show/Hide { JSON.stringify( show ) }
            </button>


    </div>
  )
}
