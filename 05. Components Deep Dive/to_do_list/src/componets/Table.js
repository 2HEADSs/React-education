export default function Table() {
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

            </tbody>
        </table>
    )
}