interface Action{
  type: string;
  payload: any;
}
interface Todo{
  id   : number;
  desc : string;
  done : boolean;
}

export const todoReducer = ( state:any = [], action: Action )=> {
  switch( action.type ) {
    case 'add':
      return [...state, action.payload]

    case 'delete':
      return state.filter( (todo:Todo) => todo.id !== action.payload );

      case 'toggle':
        return state.map( (todo: Todo) => 
              ( todo.id === action.payload )
                  ? { ...todo, done: !todo.done }
                  : todo
        )


      // Forma Larga
      case 'toggle-old':
        return state.map( (todo: Todo) => {
            
          
          if ( todo.id === action.payload ) {
              return{
                    ...todo,
                    done: !todo.done
                  }
            }else{
              return todo
            }
        } )

    default:
    return state;
  }
}
