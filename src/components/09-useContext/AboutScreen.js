import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const AboutScreen = () => {

  const { user, setUser } = useContext( UserContext );




  return (
    <div>
        <h2>AboutScreen</h2>
        <hr className='color-white'/>

        <pre className='color-white'>
          { JSON.stringify( user, null, 3 ) }
        </pre>
        <button
          className='btn btn-primary'
          onClick={ () => { setUser( {}) } }>
            logout
        </button>
    </div>
  )
}
