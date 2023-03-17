import { useContext } from 'react';

import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { TodoContext } from '../contexts/todoContext';

export const TodoItem = ({ _id, text, }) => {
    const { onTodoDeleteClick } = useContext(TodoContext)
    return (
        <ListGroup.Item action style={{ display: 'flex', justifyContent: 'space-between' }}>
            {text}
            <Button variant="dark" onClick={() => onTodoDeleteClick(_id)}>X</Button>
        </ListGroup.Item>
    );
};