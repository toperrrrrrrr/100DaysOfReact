import React, {useState} from "react";
import './Login.css';

function Logins(){

  const [userName, setUserName] = useState("");
  const [userPass, setUserpass] = useState("");

  return (
    <>
    <header></header>
      <section>

        <h1>twst</h1>
      <input
        type="text"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}/>
      
      <input 
        type="password" 
        value={userPass}
        onChange={(as) => setUserpass (as.target.value)}/>

      <input type="submit"></input>
      </section>
<div className="curve"></div>
      <footer></footer>
    </>
  );
};

export default Logins