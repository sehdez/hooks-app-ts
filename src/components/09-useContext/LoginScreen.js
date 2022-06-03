import React, { useContext } from 'react'
import { UserContext } from './UserContext';

export const LoginScreen = () => {

  const { setUser } = useContext( UserContext );
  return (
    <div>
        <h2>LoginScreen</h2>
        <hr />
        <button 
          className='btn btn-primary'
          onClick={ () => setUser({
            id: 12345,
            name: 'Sergio Hernández'
          }) }>
          Login
        </button>
    </div>
  )
}
