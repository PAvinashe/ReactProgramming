import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import HeaderView from "./Header";

const UserDetails = () => {
  
  const params = useParams();
  const id2 = Number(params.id);
  //console.log("LN10", typeof id2);
  const userDataList = JSON.parse(localStorage.getItem("userDataList"));
  
  const userRecord = userDataList.find((item) => item.id === id2);
  //console.log("LN23", userRecord);


const selection = () => {

    if(localStorage.getItem("selectedUserList") === null){
        localStorage.setItem("selectedUserList", JSON.stringify(userRecord))
    }else{
        const sUser =JSON.parse(localStorage.getItem("selectedUserList"));
        sUser.push(userRecord);  
        localStorage.setItem("selectedUserList", JSON.stringify(sUser))
    }
}

const rejection = () => {

    if(localStorage.getItem("rejectedUserList") === null){
        localStorage.setItem("rejectedUserList", JSON.stringify(userRecord))
    }else{
        const rUser =JSON.parse(localStorage.getItem("rejectedUserList"));
        rUser.push(userRecord);
        localStorage.setItem("rejectedUserList", JSON.stringify(rUser))
    }
}

  return (
    <div className="userDeatails">
      <HeaderView />
      <h1> Candidate Details </h1>
      <div className="checkUser">
          <ol>
            <ol>Name:  {userRecord.name}</ol>
            <ol>Id:  {userRecord.id}</ol>
            <ol>Username:  {userRecord.username}</ol>
            <ol>Phone No.: {userRecord.phone}</ol>
            <ol>Email-Id: {userRecord.email}</ol>
            <ol>Website: {userRecord.website}</ol>          
          </ol>
          <div>
            <button onClick={selection}>Select</button>
            <button onClick={rejection}>Reject</button>
          </div>
      </div>

    </div>
  );
};

export default UserDetails;