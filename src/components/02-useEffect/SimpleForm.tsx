import React, { useEffect, useState } from 'react'
import './effects.scss'
import Message from './Message';

const SimpleForm = () => {

    const [formState, setFormState] = useState ({
        name  : '',
        email : ''
    });
    const { name, email } = formState;

    useEffect( () => {
        // console.log('Hola')
    }, []);

    useEffect( () => {
        // console.log('cambio el estado del name')
    }, [name])
    
    useEffect( () => {
        // console.log('cambio el estado del email')
    }, [email])
    
    const handleInputChange = ( e: any ) => {
        const { name:input, value } = e.target;
        setFormState({
            ...formState,
            [input]: value
        })
    }

  return (
    <div>
        <h1>useEffect</h1>  <hr />
        <div className='form-group' >
            <input 
                type="text" 
                name='name'
                className='form-control'
                placeholder='Ingresa tu nombre'
                autoComplete='off'
                value={name}
                onChange={ handleInputChange } /> <br />
            <input 
                type="email" 
                name='email'
                className='form-control'
                placeholder='Ingresa tu email'
                autoComplete='off'
                value={email}
                onChange={ handleInputChange } />
                <br />
            { name==='123' && <Message />}

        </div>
    </div>
  )
}

export default SimpleForm