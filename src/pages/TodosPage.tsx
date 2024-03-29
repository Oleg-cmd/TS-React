import React, { useState, useEffect } from 'react';
import { ITodo } from '../components/interfaces';
import { ToDoForm } from '../components/ToDoForm'
import { TodoList } from '../components/TodoList';

declare var confirm: (question: string) => boolean


export const TodosPage: React.FC = () => {
    const [todos, setTodos] = useState<ITodo[]>([])

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[]
        setTodos(saved)
    }, [])


    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])



    const addHandler = (title: string): void => {
        const newTodo: ITodo = {
            title: title,
            id: Date.now(),
            completed: false,
        }
        // setTodos([newTodo, ...todos])
        setTodos(prev => [newTodo, ...prev])
    }

    const toggleHandler = (id: number) => {
        setTodos(prev =>
            prev.map(todo => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                }
                return todo
            }))
    }

    const removeHandler = (id: number) => {
        const shouldRemove = confirm("Are you sure you want to remove this elem?")

        if (shouldRemove) {
            setTodos(prev => prev.filter(todo => todo.id !== id))
        }

    }
    return (
        <>
            <ToDoForm onAdd={addHandler} />
            <TodoList todos={todos} onToggle={toggleHandler} onRemove={removeHandler} />
        </>
    )
}