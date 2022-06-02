import React, { useMemo, useState } from 'react'
import { procesoPesado } from '../../helpers/ProcesoPesado';
import { useCounter } from '../../hooks/useCounter';

export const MemoHook = () => {
  
    const {counter, increment, decrement} = useCounter(1000);
    const [show, setShow] = useState(true)


    const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter])

    return (
    <div>
        <h1> MemoHook </h1>
        <h3>Counter <small> { counter } </small> </h3>
        <hr />
        <p> { memoProcesoPesado } </p>

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
