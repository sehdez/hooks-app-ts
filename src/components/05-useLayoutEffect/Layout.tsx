import React, { useLayoutEffect } from 'react'
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch'
import { useRef } from 'react';


export const Layout = () => {
    const {counter, increment, decrement} = useCounter(1);
    const state = useFetch(`https://www.breakingbadapi.com/api/quotes/${ counter }`);

    const pTag = useRef<any>()
    const { loading, data } = state;
    
    
    const { author, quote } = !!data && data[0]
   
    useLayoutEffect( () => {
        console.log( pTag.current )
    },[ quote ] );

   return (
    <div>
        <h1>Layout Effects </h1> 
        <hr />
        {
            <blockquote className='blockquote text-danger '>
                <p 
                    className=' float-end mb-0' 
                    ref={ pTag }> { quote } </p> <br /> <br />
            </blockquote>

        }
        <button disabled={ counter === 1 }
             onClick={ ()=> decrement() } 
             className='btn btn-primary me-2' >
                 Anterior</button>
        <button 
             onClick={ ()=> increment() } 
             className='btn btn-primary'
             disabled={ counter === 30 } >
                 Siguiente</button>

        

    </div>
  )
}
