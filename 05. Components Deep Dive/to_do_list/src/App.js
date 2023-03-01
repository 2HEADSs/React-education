import Footer from "./componets/Footer";
import Header from "./componets/Header";
import Table from "./componets/Table";
// import Spinner from "./componets/Spinner";


function App() {
  return (
    <div className="App">

      <Header />

      <main class="main">

        <section class="todo-list-container">
          <h1>Todo List</h1>

          <div class="add-btn-container">
            <button class="btn">+ Add new Todo</button>
          </div>

          <div class="table-wrapper">

            {/* <Spinner /> */}

            <Table />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
