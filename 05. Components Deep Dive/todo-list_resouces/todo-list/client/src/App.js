import './App.css';

function App() {
  return (
    <div className="App">


  <header class="navigation-header">
    <span class="navigation-logo">
      <img src="./static/images/todo-icon.png" alt="todo-logo"/>
    </span>
    <span class="spacer"></span>
    <span class="navigation-description">Todo List</span>
  </header>

  <main class="main">


    <section class="todo-list-container">
      <h1>Todo List</h1>

      <div class="add-btn-container">
        <button class="btn">+ Add new Todo</button>
      </div>

      <div class="table-wrapper">


        <div class="loading-container">
          <div class="loading-spinner">
            <span class="loading-spinner-text">Loading</span>
          </div>
        </div>


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


  <footer class="footer">
    <p>Copyright © designed by Mihail Valkov</p>
  </footer>

    </div>
  );
}

export default App;
