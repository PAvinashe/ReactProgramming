import { useState, useEffect } from "react";

const CounterSet = () => {
    const [counter, setCounter] = useState(0);

    return(
        <div>
            <p>Counter: {counter}</p>
            <button onClick={() =>  setCounter(counter + 1)}>Count</button>
        </div>
    );
};

export default CounterSet;