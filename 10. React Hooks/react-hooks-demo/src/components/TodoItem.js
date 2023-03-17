import ListGroup from 'react-bootstrap/ListGroup';


export const TodoItem = ({ text, isCompleted }) => {
    return (
        <ListGroup.Item action >
            {text}
        </ListGroup.Item>
    );
};