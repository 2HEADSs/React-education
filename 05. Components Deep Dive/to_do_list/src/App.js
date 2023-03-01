import { useState, useEffect } from "react";
import Footer from "./componets/Footer";
import Header from "./componets/Header";
import Table from "./componets/Table";
// import Spinner from "./componets/Spinner";


function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3030/jsonstore/todos")
      .then(res => res.json())
      .then(data => {
        // const resultArray = Object.keys(data).map(id=> ({id,...data[id]}))
        const resultArray = Object.keys(data).map(id => data[id])
        setTodos(resultArray)
      });

  }, [])


function toggleTask(id){
  setTodos(todos.map(x => console.log(x)))
}


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

            {/* <Spinner /> */}

            <Table todos={todos} toggleTask={toggleTask}/>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
