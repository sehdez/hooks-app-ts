import React from 'react'
import { useCounter } from '../../hooks/useCounter';

const CounterWhitCustomHook = () => {

    const { counter, increment, decrement, reset } = useCounter( 150 );



  return (
    <div className='counterCustom'>
        <h1>Counter Whit Hook: { counter } </h1> <hr />

        <button onClick={ ()=>decrement(10) } className='btn btn-primary' >-1</button>
        <button onClick={ reset } className='btn btn-primary' >Reset</button>
        <button onClick={ ()=>increment(10) } className='btn btn-primary ' >+1</button>
        <div className='chat' ><h3>Chat</h3></div>
    
        
        <div className='contenedor'><h1 className='sticky' >Menu Uno</h1></div>
        <div className='contenedor'><h1 className='sticky' >Menu Dos</h1> </div>
        <div className='contenedor'><h1 className='sticky' >Menu Tres</h1></div>

        </div>
  )
}

export default CounterWhitCustomHook