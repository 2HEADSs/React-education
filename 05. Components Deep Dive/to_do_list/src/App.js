import { useState, useEffect } from "react";
import Footer from "./componets/Footer";
import Header from "./componets/Header";
import Table from "./componets/Table";
import Spinner from "./componets/Spinner";


function App() {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch("http://localhost:3030/jsonstore/todos")
      .then(res => res.json())
      .then(data => {
        // const resultArray = Object.keys(data).map(id=> ({id,...data[id]}))
        const resultArray = Object.keys(data).map(id => data[id])
        setIsLoading(false)
        setTodos(resultArray)
      });

  }, [])


  function toggleTask(id) {
    setTodos(state => state.map(x => x._id === id ? ({ ...x, isCompleted: !x.isCompleted }) : x))
  }

  function addTodo() {
    let newId = Number(todos.length)
    let text = prompt("New task:")
    console.log(newId, text);
    let newObject = { _id: newId, text: text, isCompleted: false }
    console.log(newObject);
    setTodos(state => [newObject, ...state])
  }



  return (

    <div className="App">

      <Header />

      <main className="main">

        <section className="todo-list-container">
          <h1>Todo List</h1>

          <div className="add-btn-container">
            <button className="btn" onClick={addTodo}>+ Add new Todo</button>
          </div>

          <div className="table-wrapper">

            {isLoading ? <Spinner /> : <Table todos={todos} toggleTask={toggleTask} />}



          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
