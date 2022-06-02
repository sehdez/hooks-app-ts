import React, { useRef } from 'react'

export const FocusScreen = () => {
    const ref = useRef();
    console.log( useRef )    

    const handleClick = () => {
        document.querySelector('input')?.select();
    }

  return (
    <div>
        <h1>Focus Screen</h1>
        <hr />

        <input 
            type="text" 
            className='form-control' 
            placeholder='Nombre'/>
        <button 
            className='btn btn-outline-primary mt-5' 
            onClick={ handleClick }>
            Focus
        </button>
    </div>
  )
}





