import { useState, useEffect } from "react";

const RenderFunction = () => {
    const [resourceType, setResourceType] = useState('posts')

    useEffect(() => {
        console.log("render");
    })

    return(
        <>
        <button onClick={() => setResourceType('posts')}>Posts</button>
        <button onClick={() => setResourceType('Message')}>Message</button>
        <button onClick={() => setResourceType('comments')}>Comments</button>
        <h1>{resourceType}</h1>
        </>
    );
}

export default RenderFunction;