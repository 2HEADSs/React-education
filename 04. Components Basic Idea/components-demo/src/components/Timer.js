import { useState } from "react";

const Timer = (props) => {
    const [seconds, setSeconds] = useState(props.start);

    console.log(`seconds ${seconds}`);
    setTimeout(() => {
        // setSeconds(seconds + 1);
        setSeconds((oldSeconds) => oldSeconds + 1);
    }, 1000);

    return <div>Time: {seconds}sec.</div>;
};

export default Timer;
