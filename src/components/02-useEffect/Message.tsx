import React, { useEffect, useState } from 'react'

const Message = () => {
    
    const [ coords, setCoords ] =  useState({
        x:'',
        y:''
    });
    const { x, y } = coords;

    useEffect(() => {
        const mouseMove = (e:any) => {
            setCoords({
                x: e.x,
                y: e.y
            })
        
        } 
        window.addEventListener('mousemove', mouseMove);
      return () => {
          window.removeEventListener('mousemove', mouseMove)
        
      }
    }, [])
    


  return (
    <div>
        <h2>Eres la verga</h2> <hr />
        <h5>{ x +' , '+ y }</h5>
    </div>
  )
}

export default Message