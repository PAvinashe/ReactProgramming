import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import HeaderView from "./Header";
import './JobPortal.css'


const UserDataList = () => {
    const [user, setUser] = useState([]);
    const navigate =useNavigate();
    const [DataisLoaded, setDataisLoaded] = useState(false);

    useEffect(() => {
        let userDataList = JSON.parse(localStorage.getItem("userDataList"));
        if(userDataList !== null){
            setUser(userDataList);
            return;
        }
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((data) => {                           
            setUser(data); 
            setDataisLoaded(true);
            localStorage.setItem("userDataList", JSON.stringify(data));
    });

    }, []);

    const PageLoad = () =>{
        if (!DataisLoaded) return("Pleses wait some time.... ");
    }

    return(
        <div className = "App">
			<HeaderView />      
             
			<h1> Candidate List </h1> {
				user.map((item) => (
				<div className="UserList">					
					<Link to={"/details/"+item.id}>
					<ol key = { item.id } className="listItem" >
					<ol>id: { item.id }</ol>
					<ol>User_Name: { item.username }</ol>
					<ol>Full_Name: { item.name }</ol>
					<ol>User_Email: { item.email }</ol>
					</ol>
					</Link>
				</div>
				))
			}			
			
		</div>       
        
    );

}


export default UserDataList