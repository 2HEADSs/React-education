import { useState } from "react";

const getTitle = (count) => {
    switch (count) {
        case 1:
            return "First Blood";
        case 2:
            return "Double Kill";
        case 3:
            return "Tripple Kill";
        case 4:
            return "Multy Kill";
        case 5:
            return "Godlike";
        case 6:
            return "Unstoppable";
        default:
            return "Counter";
    }
};

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

    // const title = getTitle(counter)

    return (
        <div>
            <h3>
                {counter > 6 ? "Unstoppable" : getTitle(counter)}: {counter}{" "}
            </h3>
            <button onClick={decrementCounterHanadler}>-</button>
            <button onClick={clearCounterHanadler}>Reset</button>
            <button onClick={multiplyCounterHandler}>Multiply</button>
            <button onClick={incrementCounterHanadler}>+</button>
        </div>
    );
};

export default Counter;
