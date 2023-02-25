import { useState } from "react";

const Counter = (props) => {
    const [counter, setCounter] = useState(props.start);

    const decrementCounterHnadler = (e) => {
        setCounter((oldCounter) => oldCounter - 1);
        // console.log(e);
        // console.log("Clicked");
    };

    const clearCounterHnadler = (e) => {
        setCounter(props.start);
        // setCounter(0);
        // console.log(e);
        // console.log("Clicked");
    };

    const incrementCounterHnadler = (e) => {
        setCounter((oldCounter) => oldCounter + 1);
        // console.log(e);
        // console.log("Clicked");
    };
    return (
        <div>
            <h3>Counter: {counter} </h3>
            <button onClick={decrementCounterHnadler}>-</button>
            <button onClick={clearCounterHnadler}>Reset</button>
            <button onClick={incrementCounterHnadler}>+</button>
        </div>
    );
};

export default Counter;
