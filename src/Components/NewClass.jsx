import { Component } from "react"

class NewComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: "Priyanka",
            city: "Pune"
        }
    }

    _handleInputChange = (data) => {
        //console.log("LN 13", data.target.value);
        this.setState({ name: data.target.value });
    }
    render(){
        const {name, city} = this.state;
        return(
            <div>
                <p>
                Enter yout details 
                {name}{city}
                </p>
                <div>
                    <input type={"text"} onChange={this._handleInputChange} />
                </div>
            </div>
        )
    }
}

export default NewComponent;