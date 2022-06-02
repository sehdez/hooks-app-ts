import React from 'react'
import './effects.scss'
import { useForm } from '../../hooks/useForm';


export const FormWithCustomHook = () => {
    

    const [formValues , handleInputChange] = useForm ({
        name    : '',
        email   : '',
        password: ''
    });
    const { name, email, password } = formValues

    const handleSubmit = ( e:any ) => {
        e.preventDefault();
        console.log(formValues);
    }

  return (
    <form onSubmit={ handleSubmit } >
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
            <input 
                type="password" 
                name='password'
                className='form-control'
                placeholder='Ingresa tu contraseña'
                value={password}
                onChange={ handleInputChange } />
                <br />

            <button type='submit'  className='float-start btn btn-primary' >Enviar</button>


        </div>
    </form>
  )
}
