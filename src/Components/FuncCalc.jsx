import { useState } from "react";

const FuncCalculator = () => {
    const [num1, setNum1] = useState("");
    const [num2, setNum2] = useState("");
    const [res, setRes] = useState("0");   
    
    const add = () => {
        setRes(Number(num1)+Number(num2));
    }
    const sub = () => {
        setRes(Number(num1)-Number(num2));
    }
    const mult = () => {
        setRes(Number(num1)*Number(num2));
    }
    const divide = () => {
        setRes(Number(num1)/Number(num2));
    }
    const mod = () => {
        setRes(Number(num1)%Number(num2));
    }
    const clear = () => {
        setRes(Number("0"));
        setNum1("");
        setNum2("")
    }

    return(
        <div className="Calcy">
            <h3>Enter Numbers</h3>
               
                <div className="InputBox">        
                   <input type={"number"} onChange={(eve) => setNum1(eve.target.value)} value={num1}/> {num1}
                   <input type={"number"} onChange={(eve) => setNum2(eve.target.value)} value={num2}/>                      
                    
                </div> 
                <div className="buttonOp">
                    <button onClick={add}>+</button>
                    <button onClick={sub}>-</button>
                    <button onClick={mult}>*</button>
                    <button onClick={divide}>/</button>
                    <button onClick={mod}>%</button>
                    <button onClick={clear}>Clear</button>
                </div>               
            
                 <input type={"number"} disabled={true} value={res}/>                 
                
        </div>
    );
};

export default FuncCalculator;