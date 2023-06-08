import React, {useState} from "react";
import './Login.css';

function Logins(){

  const [userName, setUserName] = useState("");
  const [userPass, setUserpass] = useState("");

  return (
 
    <>
    <header></header>
      <section>
        <div class="browser">
          <div id="container">

            <h1>Hello {userName}</h1>
              <input
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}/>
              
              <input 
                type="password" 
                value={userPass}
                onChange={(as) => setUserpass (as.target.value)}/>

              <input type="submit"></input>
          </div>
        </div>
      </section>

      <footer></footer>
    </>
  );
};

export default Logins