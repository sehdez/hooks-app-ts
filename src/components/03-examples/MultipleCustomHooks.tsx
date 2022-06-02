import React from 'react'
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch'


export const MultipleCustomHooks = () => {
    const {counter, increment, decrement} = useCounter(1);
    const state = useFetch(`https://www.breakingbadapi.com/api/quotes/${ counter }`);

    const { loading, data } = state;

    
    const { author, quote } = !!data && data[0]
    console.log(author, quote)

   return (
    <div>
        <h1>BreakingBad Quotes </h1> 
        <hr />
        {
            loading
                ?
                    (
                        <div className='alert alert-info' >
                            Loading
                        </div>
                    )
                :
                    (
                        <blockquote className='blockquote text-danger '>
                            <p className=' float-end mb-0' > { quote } </p> <br /> <br />
                            <footer className='float-end blockquote-footer'> { author } </footer>
                        </blockquote>

                    )
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
