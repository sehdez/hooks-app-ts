interface Action {
    type: string;
    payload: {
        id   : number;
        todo : string;
        done : boolean
    }
}


export const initialState = [{
    id   : 1,
    todo : 'Comprar Pan',
    done : false,
}];

export const todoReducer = ( state = initialState, action?:Action ) => {
    
    if ( action?.type === 'agregar' ) {
        return[ ...state, action.payload ]
    }
    
    return state;
}


export let todos = todoReducer();

const newTodo = {
    id   : 2,
    todo : 'Comprar leche',
    done : false,
};

const action = {
    type: 'agregar',
    payload: newTodo
}

todos = todoReducer( todos, action );


