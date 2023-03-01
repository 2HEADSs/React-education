import SingleLine from "./SingleLine";

export default function Table(todos, toggleTask) {

    console.log({todos});
    return (
        <table className="table">
            <thead>
                <tr>
                    <th className="table-header-task">Task</th>
                    <th className="table-header-status">Status</th>
                    <th className="table-header-action">Action</th>
                </tr>
            </thead>
            <tbody>
                {todos.todos.map(todo => <SingleLine key={todo._id} {...todo} toggleTask = {toggleTask} />)}
                {/* <SingleLine singleTodo = {todos.todos.map(x => )} /> */}

            </tbody>
        </table>
    )
}