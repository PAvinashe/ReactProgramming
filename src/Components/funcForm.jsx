import { useState } from "react";

const FuncForm = () => {
    // const [firstName, setFirstName] =useState("Priyanka");
    // const [lastName, setLastnmae] = useState("Deshpande");
    // const [city, setCityl] = useState("Pune");
    // const [eduacation, setEduacation] = useState("Bachelor");
    // const [email, setEmail] = useState("avinashe.priyanka@gmail.com");
    // const [mobileno, setMobile] = useState("9544157548");

    const [details, setDetails] = useState({
        firstName: "Priyanka",
        lastName: "Deshpande",
        city: "Pune",
        eduacation: "Bachelor",
        email: "avinashe.priyanka@gmail.com",
        mobileno: "9544157548"
    })

    const handleEventchange = (eve) => {
        const{name, value} = eve.target;
        setDetails({...details, [name]: value});
    }

    return(
        <div className="formInfo">
            <h3>Fill Information in below form</h3>
                <p>Person Details like, Firstname: {details.firstName} </p>
                <div>        
                                
                    <form>
                       <label htmlFor="fname">Firstname: {details.firstName} </label><br/>
                       <input type={"text"} placeholder="Firstname" value={details.firstName} onChange={handleEventchange} name="firstName"/> <br/><br/>
                       <label htmlFor="lname">Lastname: {details.lastName}</label><br/>
                       <input type={"text"} placeholder="Lastname" onChange={handleEventchange} name="lastName"/> <br/><br/>
                       <label htmlFor="pcity">City: {details.city}</label><br/>
                       <input type={"text"} placeholder="City" onChange={handleEventchange} name="city"/> <br/><br/>
                       <label htmlFor="pedu">Education: {details.eduacation}</label><br/>
                       <input type={"text"} placeholder="Education" onChange={handleEventchange} name="eduacation"/> <br/><br/>
                       <label htmlFor="pemail">Email: {details.email}</label><br/>
                       <input type={"text"} placeholder="Email" onChange={handleEventchange} name="email"/> <br/><br/>
                       <label htmlFor="pnum">Contact Number: {details.mobileNo}</label><br/>
                       <input type={"text"} placeholder="Contact Number" onChange={handleEventchange} name="mobileNo"/> <br/><br/>
                   </form>
                    
                </div>    
                
        </div>
    );
};

export default FuncForm;