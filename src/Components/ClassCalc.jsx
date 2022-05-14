import { Component } from "react";
import './ClassCalc.css'

class Calculator extends Component{
    constructor(props){
        super(props);
        this.state = {
            num1: "0",
            num2: "0",
            res: "0",
            readOnly: true
        }
    }
    add = () => {
        this.setState({res: parseInt(this.state.num1)+parseInt(this.state.num2)});
    }
    sub = () => {
        this.setState({res: parseInt(this.state.num1)-parseInt(this.state.num2)});
    }
    mult = () => {
        this.setState({res: parseInt(this.state.num1)*parseInt(this.state.num2)});
    }
    divide = () => {
        this.setState({res: parseInt(this.state.num1)/parseInt(this.state.num2)});
    }
    mod = () => {
        this.setState({res: parseInt(this.state.num1)%parseInt(this.state.num2)});
    }
    clear = () => {
        this.setState({num1:"0", num2:"0", res:"0" })
    }
    _changedInput = (eve1) =>{
        const {name, value} = eve1.target;
        this.setState({[name]: value});
    }
    render(){
         const {num1, num2, res} = this.state;
        return(
            <div className="MainDiv">
                <h3>Enter values</h3>
                <div className="inputValue">
                <input type={"text"} onChange={this._changedInput} name="num1"/>
                <input type={"text"} onChange={this._changedInput} name="num2"/>                
                </div>
                <div className="buttonDiv">
                    <button onClick={this.add}>+</button>
                    <button onClick={this.sub}>-</button>
                    <button onClick={this.mult}>*</button>
                    <button onClick={this.divide}>/</button>
                    <button onClick={this.mod}>%</button>
                    <button onClick={this.clear}>Clear</button>
                </div>
                <input type={"number"} disabled={true} value={this.state.res} />
                
            </div>
        );
    }
}

export default Calculator;