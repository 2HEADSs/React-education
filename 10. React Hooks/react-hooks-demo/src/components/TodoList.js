import ListGroup from 'react-bootstrap/ListGroup';

export const TodoList = () => {
    return (
        <ListGroup >
            <ListGroup.Item action >
                Link 1
            </ListGroup.Item>
            <ListGroup.Item action >
                Link 2
            </ListGroup.Item>
            <ListGroup.Item action >
                This one is a button
            </ListGroup.Item>
        </ListGroup>
    )
}