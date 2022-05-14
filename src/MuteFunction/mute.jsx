import { useState } from "react";

const Mute = () => {
    const [isMuted, setIsMuted] = useState(false);

    return(
        <>
        <h1>{isMuted ? "Muted" : "Unmuted"}</h1>
        <button onClick={() => setIsMuted(!isMuted)}>{isMuted? "Unmute" : "Mute"}</button>
        </>
    );
}

export default Mute;