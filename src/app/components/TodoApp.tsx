"use client"

import React, { useState, useEffect } from 'react'
import TodoList from '../components/TodoList'
import { getAllTodos, addTodo, deleteTodo } from '../../../utils/supabaseFunctions';

const TodoApp = () => {

    const [todos, setTodos] = useState<any>([]);
    const [title, setTitle] = useState<string>("");

    useEffect(() => {
        const getTodos = async () => {
            const todos = await getAllTodos();
            setTodos(todos);
        }
        getTodos();
    }, []);

    const handleSubmit = async(e: any) => {
        e.preventDefault();

        if (title === "") {
            return;
        }

        //todoの追加
        await addTodo(title);

        // ⭐ 追加後に再読み込み
        const updatedTodos = await getAllTodos();
        setTodos(updatedTodos || []);
    
        // 入力欄をクリア
        setTitle("");
    };

        // ⭐ この関数を追加
    const handleDelete = async (id: number) => {
        await deleteTodo(id);
        const updatedTodos = await getAllTodos();
        setTodos(updatedTodos || []);
    };

  return (
    <section className="text-center mb-2 text-2xl font-bold" >
        <h3>
           Supabase Todo App 
        </h3>
        <form onSubmit={(e) => handleSubmit(e)} >
            <input type="text"  className="mr-2 shadow-lg p-1 outline-none" onChange={(e) => setTitle(e.target.value)} value={title}/>
            <button className="shadow-md border-2 px-1 py-1 rounded-lg bg-green-200">Add</button>
        </form>
        <TodoList todos={todos} onDelete={handleDelete}/>
    </section>
  )
}

export default TodoApp