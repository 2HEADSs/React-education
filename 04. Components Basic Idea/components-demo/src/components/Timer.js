import { useState } from "react";

const Timer = (props) => {
    const [seconds, setSeconds] = useState(0);

    console.log(`seconds ${seconds}`);
    setTimeout(() => {
        setSeconds(6);
    }, 1000);

    return <div>Time: {seconds}sec.</div>;
};

export default Timer;
