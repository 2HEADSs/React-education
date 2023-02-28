// import "./App.css";
import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Loading from "./components/Loading";
import TodoList from "./components/TodosList";

function App() {
    const [todos, setTodos] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:3030/jsonstore/todos`)
            .then((res) => res.json())
            .then((data) => {
                const result = Object.keys(data).map((id) => ({
                    id,
                    ...data[id],
                }));
                setTodos(result);
            });
    }, []);

    const toggleTodoStatus = (id) => {
        setTodos((state) =>
            state.map((t) =>
                t.id === id ? { ...t, isCompleted: !t.isCompleted } : t
            )
        );
    };
    return (
        <div className="App">
            <Header />
            <main className="main">
                <section className="todo-list-container">
                    <h1>Todo List</h1>

                    <div className="add-btn-container">
                        <button className="btn">+ Add new Todo</button>
                    </div>

                    <div className="table-wrapper">
                        {/* <Loading /> */}

                        <TodoList
                            todos={todos}
                            toggleTodoStatus={toggleTodoStatus}
                        />
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}

export default App;
