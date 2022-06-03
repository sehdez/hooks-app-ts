export interface TodoListProps {
    handleDelete : Function;
    handleToggle : Function;
    todos        : Todo[];
}
export interface TodoListItemProps {
    i            : number
    handleDelete : Function;
    handleToggle : Function;
    todo        : Todo;
}

export interface Todo { 
    id   : number;
    desc : string;
    done : boolean;
}