import {Component} from 'react'
import './ClassForm.css'


class ClassCreateForm extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            firstName: "Priyanka",
            lastName: "Deshpande",
            city: "Pune",
            eduacation: "Bachelor",
            email: "avinashe.priyanka@gmail.com",
            mobileNo: "9587524552"
        }
    }
    
    _handleEvent = (eve) => {
        console.log(eve.target.name);    
        const{name, value} = eve.target;
        //console.log("ln 22", name, value);
        this.setState({ [name]: value})
    };
    render() {
        const {firstName, lastName, city, eduacation, email, mobileNo } = this.state;
        return(
            
            <div className='main'>
                <p>Fill Information in below form</p>
                <h3>Person Details</h3>
                <div>        
                                
                    <form>
                       <label htmlFor="fname">Firstname: {firstName} </label><br/>
                       <input type={"text"} onChange={this._handleEvent} name="firstName" /> <br/><br/>
                       <label htmlFor="lname">Lastname: {lastName}</label><br/>
                       <input type={"text"} onChange={this._handleEvent} name="lastName" /> <br/><br/>
                       <label htmlFor="pcity">City: {city}</label><br/>
                       <input type={"text"} onChange={this._handleEvent} name="city" /> <br/><br/>
                       <label htmlFor="pedu">Education: {eduacation}</label><br/>
                       <input type={"text"} onChange={this._handleEvent} name="eduacation" /> <br/><br/>
                       <label htmlFor="pemail">Email: {email}</label><br/>
                       <input type={"text"} onChange={this._handleEvent} name="email" /> <br/><br/>
                       <label htmlFor="pnum">Contact Number: {mobileNo}</label><br/>
                       <input type={"text"} onChange={this._handleEvent} name="mobileNo" />
                   </form>
                    
                </div>                    
                
            </div>            
        )
    }
}

export default ClassCreateForm;