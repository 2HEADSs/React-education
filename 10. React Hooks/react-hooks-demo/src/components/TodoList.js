import ListGroup from 'react-bootstrap/ListGroup';
import { TodoItem } from './TodoItem';

export const TodoList = ({ todos }) => {
    return (
        <div style={{ width: '30%', margin: '10px auto' }}>
            <h1>TODO LIST</h1>
            <ListGroup >
                {todos.map(x => < TodoItem key={x._id} {...x} />)}
            </ListGroup>
        </div>
    )
}