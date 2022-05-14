import { useState, useEffect } from "react";

const GoogleForm = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");

    const [errMessageFN, setErrMessageFN] = useState("");
    const [errMessageLN, setErrMessageLN] = useState("");
    const [errMessageFLN, setErrMessageFLN] = useState("");
    const [errMessageUN, setErrMessageUN] = useState("");
    const [errMessagePW, setErrMessagePW] = useState("");
    const [errMessageCP, setErrMessageCP] = useState(""); 
};