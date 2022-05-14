import HeaderView from "./Header";
import { useState } from "react";

const RejectedUsers = () => {

    let rejectedm = JSON.parse(localStorage.getItem("rejectedUserList"));

  return (
    <div className = "rejected">
			<HeaderView />      
             
			<h1> Rejected Candidate List </h1> {
				rejectedm.map((item) => (
                    <div className="rUserList">			
                        <ol key = { item.id } className="listItem" >
                        <ol>id: { item.id }</ol>
                        <ol>User_Name: { item.username }</ol>
                        <ol>Full_Name: { item.name }</ol>
                        <ol>User_Email: { item.email }</ol>
                        </ol>					
                    </div>
                    ))
			}			
			
		</div>   
  );
};

export default RejectedUsers;
