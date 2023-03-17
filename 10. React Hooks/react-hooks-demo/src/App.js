import { useState, useEffect } from 'react';
import { TodoContext } from './contexts/todoContext';

import 'bootstrap/dist/css/bootstrap.min.css';

import { Header } from './components/Header';
import { TodoList } from './components/TodoList';
import { AddTodoModal } from './components/AddTodoModal';

const baseUrl = 'http://localhost:3030/jsonstore/todos'

function App() {
    const [todos, setTodos] = useState([]);
    const [showAddTodo, setshowAddTodo] = useState(false);

    useEffect(() => {
        fetch(baseUrl)
            .then(res => res.json())
            .then(result => {
                setTodos(Object.values(result))
            })
    }, []);

    const onTodoAddSubmit = async (values) => {
        const response = await fetch(baseUrl, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({...values, isCompleted: false})
        });
        const result = await response.json();
        setshowAddTodo(false);

        setTodos(state => [...state, result])
    };



    const onTodoAddClick = () => {
        setshowAddTodo(true)
    };

    const onTodoAddClose = () => {
        setshowAddTodo(false)
    }

    const onTodoDeleteClick = async (todoId) => {
        await fetch(`${baseUrl}/${todoId}`, { method: 'DELETE' });

        //must check if response is OK?
        setTodos(state => state.filter(x => x._id !== todoId))
    }

    const onTodoClick = async (todoId) => {
        const todo = todos.find(x => x._id === todoId)
        await fetch(`${baseUrl}/${todoId}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ ...todo, isCompleted: !todo.isCompleted })
        });

        //must check if response is OK?
        setTodos(state => state.map(x => x._id === todoId ? { ...x, isCompleted: !x.isCompleted } : x))
    }

    const contextValue = {
        onTodoDeleteClick,
        onTodoClick
    }

    return (
        <TodoContext.Provider value={contextValue}>

            <div>
                <Header />
                <TodoList todos={todos} onTodoAddClick={onTodoAddClick} />
                <AddTodoModal show={showAddTodo} onTodoAddSubmit={onTodoAddSubmit} onTodoAddClose={onTodoAddClose} />
            </div>
        </TodoContext.Provider>
    );
}

export default App;
