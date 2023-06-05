import React, {useState} from "react";

function Logins(){

  const [userName, setUserName] = useState("");
  const [userPass, setUserpass] = useState("");

  return (

    <div>
    <input
      type="text"
      value={userName}
      onChange={(e) => setUserName(e.target.value)}/>
    
    <input 
      type="password" 
      value={userPass}
      onChange={(as) => setUserpass (as.target.value)}/>

    <input type="submit"></input>
    
    <h1>{userName}</h1>
    <h1>This is my password {userPass}</h1>
    </div>
  );
};

export default Logins