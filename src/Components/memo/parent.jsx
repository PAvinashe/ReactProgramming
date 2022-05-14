import { useState } from "react";
import ChildFunc from "./child"

const Checkmemo  = () => {
    const [count, setCount] = useState(0)

    return(
        <>
        <p>Counter: {count}</p>
        <button onClick={() => setCount(count + 1)}>New Counter</button>
        <ChildFunc />
        </>
    );
};

export default Checkmemo;