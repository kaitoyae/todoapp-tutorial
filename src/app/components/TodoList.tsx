import React from 'react'

import { Todo } from '../../../utils/interface';


type props = {
    todos: Todo[];
    onDelete: (id: number) => void;
}

const TodoList = (props: props) => {

    const { todos, onDelete } = props;



  return (
    <div>
        <ul>
            {todos.map((todo) => (
                <div key={todo.id}className="flex bg-orange-200 rounded-md mt-2 mb-2 p-2 justify-between">
                    <li>{todo.title}</li>
                    <span className="cursor-pointer" onClick={() => onDelete(todo.id)}>✖️</span>
                </div>
            )
            )}

        </ul>
    </div>
  )
}

export default TodoList