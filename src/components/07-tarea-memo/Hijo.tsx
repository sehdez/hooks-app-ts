import React from 'react'

interface PropsHijo{
    numero: number;
    incrementar: Function;
}

export const Hijo = React.memo(({ numero, incrementar }: PropsHijo ) => {

    console.log('  Me volví a generar :(  ');

    return (
        <button
            className="btn btn-primary me-3"
            onClick={ () => incrementar( numero ) }
        >
            { numero }
        </button>
    )
})
