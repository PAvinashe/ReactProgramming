import {memo} from "react"

const ChildFunc = () => {
    console.log("Hi, This child")
    return(
        <p>Hello, This is child</p>
    );
};

export default memo(ChildFunc);