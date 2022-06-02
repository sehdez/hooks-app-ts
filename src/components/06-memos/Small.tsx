import React from 'react'
interface SmallProps{
  value: number | string;
}

export const Small = React.memo(( { value }: SmallProps ) => {
  console.log('Me volví a llamar :(')



  return (
    <small>{ value } </small>
  )
})
