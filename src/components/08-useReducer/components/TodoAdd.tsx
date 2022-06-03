import React from 'react'
import { useForm } from '../../../hooks/useForm';

interface TodoProps {
    handleAdd : Function
}

export const TodoAdd = ({ handleAdd }: TodoProps ) => {

    const [ {description}, handleInputChange, reset ] = useForm({
        description:''
    });

    const handleSubmit = ( e:any ) => {
        e.preventDefault();

        if ( description.trim().length <=2 ){
            return
        }


        const newTodo = {
            id   : new Date().getTime(),
            desc : description,
            done : false
        };
        handleAdd( newTodo )
        reset();
    }



  return (
    <>
        <h4>Agregar TODO</h4>
                <hr />
                <form autoComplete='off' onSubmit={ handleSubmit }>
                    <input type="text" 
                        className='form-control'
                        name='description'
                        placeholder='Ingresa un TODO'
                        value={ description }
                        onChange={ handleInputChange }  />

                    <button 
                        type='submit'
                        className='btn btn-block btn-outline-primary mt-3 '
                        >
                        Agregar
                    </button>
                </form>
    </>
  )
}
