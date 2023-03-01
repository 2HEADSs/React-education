import Footer from "./componets/Footer";
import Header from "./componets/Header";
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

            <table class="table">
              <thead>
                <tr>
                  <th class="table-header-task">Task</th>
                  <th class="table-header-status">Status</th>
                  <th class="table-header-action">Action</th>
                </tr>
              </thead>
              <tbody>

                <tr class="todo is-completed">
                  <td>Give dog a bath</td>
                  <td>Complete</td>
                  <td class="todo-action">
                    <button class="btn todo-btn">Change status</button>
                  </td>
                </tr>

                <tr class="todo is-completed">
                  <td>Do laundry</td>
                  <td>Complete</td>
                  <td class="todo-action">
                    <button class="btn todo-btn">Change status</button>
                  </td>
                </tr>

                <tr class="todo">
                  <td>Vacuum floor</td>
                  <td>Incomplete</td>
                  <td class="todo-action">
                    <button class="btn todo-btn">Change status</button>
                  </td>
                </tr>

                <tr class="todo is-completed">
                  <td>Feed cat</td>
                  <td>Complete</td>
                  <td class="todo-action">
                    <button class="btn todo-btn">Change status</button>
                  </td>
                </tr>

                <tr class="todo">
                  <td>Change light bulbs</td>
                  <td>Incomplete</td>
                  <td class="todo-action">
                    <button class="btn todo-btn">Change status</button>
                  </td>
                </tr>

                <tr class="todo is-completed">
                  <td>Feed cat</td>
                  <td>Complete</td>
                  <td class="todo-action">
                    <button class="btn todo-btn">Change status</button>
                  </td>
                </tr>

                <tr class="todo">
                  <td>Change light bulbs</td>
                  <td>Incomplete</td>
                  <td class="todo-action">
                    <button class="btn todo-btn">Change status</button>
                  </td>
                </tr>

                <tr class="todo is-completed">
                  <td>Go to Store</td>
                  <td>Completed</td>
                  <td class="todo-action">
                    <button class="btn todo-btn">Change status</button>
                  </td>
                </tr>

                <tr class="todo">
                  <td>Fill gas tank</td>
                  <td>Incomplete</td>
                  <td class="todo-action">
                    <button class="btn todo-btn">Change status</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
