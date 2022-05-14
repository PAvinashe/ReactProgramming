import { useState } from "react";
import ShowErrorMsg from "./ShowErrorMsg"
import './GoogleForm.css'
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

    const handleError = () => {
        if(firstName === "" && lastName === ""){
            setErrMessageFLN("Enter Firstname and Lastname");
        }
        else{

            if(firstName === ""){
                setErrMessageFN("Enter Firstname");
                
            }  
            else{
                setErrMessageFN("");
            }
            
            if(lastName === ""){
                setErrMessageLN("Enter Lastname");
    
            }
            else{
                setErrMessageLN("");
            }
            
                setErrMessageFLN("");
            
        }
        
        if(userName === ""){
            setErrMessageUN("Enter Username");

        }else{
          setErrMessageUN("");
        }

        if(password === ""){
            setErrMessagePW("Enter Password");

        }else{
          setErrMessageUN("");
        }

        if(confirm === "") {
          setErrMessageCP("Confirm your password");
            
        }
        else if(confirm === setPassword){
            setErrMessageCP("Those passwords didn’t match. Try again.");

        }else{
          setErrMessageCP("");
        }

                
    }

    
    return (
      <div className="gForm">
        <p>Create your Google Account</p>
        <div className="text">
          <div className="divFirst">
            <div className="first">
              <input
                className="in1"
                type={"text"}
                placeholder="First Name"
                onChange={(e) => setFirstName(e.target.value)}
                value={firstName}
                height="48"
              />
              {errMessageFN && <ShowErrorMsg message={errMessageFN} />}
            </div>
            <div className="last">
              <input
                className="in2"
                type={"text"}
                placeholder="Last Name"
                onChange={(e) => setLastName(e.target.value)}
                value={lastName}
              />
              {errMessageLN && <ShowErrorMsg message={errMessageLN} />}
            </div>
            {errMessageFLN && <ShowErrorMsg message={errMessageFLN} />}
          </div>
          <div className="divSec">
            <input
              className="in3"
              type={"text"}
              placeholder="Username        @gmail.com"
              onChange={(e) => setUserName(e.target.value)}
              value={userName}
            />
            {errMessageUN && <ShowErrorMsg message={errMessageUN} />}
          </div>
          <div className="divThird">
            <div className="first2">
              <input
                className="in4"
                type={"password"}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
              {errMessagePW && <ShowErrorMsg message={errMessagePW} />}
            </div>
            <div className="last2">
              <input
                className="in5"
                type={"password"}
                placeholder="confirm"
                onChange={(e) => setConfirm(e.target.value)}
                value={confirm}
              />
              {errMessageCP && <ShowErrorMsg message={errMessageCP} />}
            </div>
          </div>
          <div className="divFour">
            <input type={"checkbox"} /> Show Password
          </div>
        </div>
        <div className="submitOp">
          <div>
            <a href="//">Sign in instead</a>
          </div>
          <div>
            <button onClick={handleError}>Next</button>
          </div>
        </div>
      </div>
    );
};

export default GoogleForm;