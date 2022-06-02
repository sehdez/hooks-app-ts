import React from 'react'

interface Props{
    increment: Function;
}

export const ShowIncrement = React.memo(({ increment }: Props ) => {
  console.log('Me generé')
  return (
    <button
        className='btn btn-primary'
        onClick={ () => {
            increment( 5 );
        } }>
            Incrementar

    </button>
  )
})
