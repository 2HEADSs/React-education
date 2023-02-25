import { useState } from "react";

const Counter = (props) => {
    const [counter, setCounter] = useState(props.start);

    const decrementCounterHanadler = (e) => {
        setCounter((oldCounter) => oldCounter - 1);
        // console.log(e);
        // console.log("Clicked");
    };

    const clearCounterHanadler = (e) => {
        setCounter(props.start);
        // setCounter(0);
        // console.log(e);
        // console.log("Clicked");
    };

    const multiplyCounterHandler = (e) => {
        setCounter((oldCounter) => (oldCounter *= 2));
        // setCounter(0);
        // console.log(e);
        // console.log("Clicked");
    };

    const incrementCounterHanadler = (e) => {
        setCounter((oldCounter) => oldCounter + 1);
        // console.log(e);
        // console.log("Clicked");
    };
    return (
        <div>
            <h3>Counter: {counter} </h3>
            <button onClick={decrementCounterHanadler}>-</button>
            <button onClick={clearCounterHanadler}>Reset</button>
            <button onClick={multiplyCounterHandler}>Multiply</button>
            <button onClick={incrementCounterHanadler}>+</button>
        </div>
    );
};

export default Counter;
