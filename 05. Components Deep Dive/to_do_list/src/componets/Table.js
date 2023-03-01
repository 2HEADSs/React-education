export default function Table(){
    return (
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
    )
}