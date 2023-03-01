export default function ({ _id,
    text, isCompleted, toggleTask }) {
    // console.log(props);
    return (
        <tr className={isCompleted ? "todo is-completed " : "todo"}>
            <td>{text}</td>
            <td>{isCompleted ? "Completed" : "Not completed"}</td>
            <td className="todo-action">
                <button className="btn todo-btn" onClick={() =>
                    toggleTask(_id)}>Change status</button>
            </td>
        </tr>
    )
}