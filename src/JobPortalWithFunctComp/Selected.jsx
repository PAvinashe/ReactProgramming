import { useState } from "react";
import HeaderView from "./Header";

const SelectedUsers = () => {
   
   let selectedm = JSON.parse(localStorage.getItem("selectedUserList"))   
   //console.log("LN8", selected)
  return (
    
      <div className = "selected">
			<HeaderView />      
             
			<h1> Selected Candidate List </h1> {
				selectedm.map((item) => (
				<div className="sUserList">			
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

export default SelectedUsers;
