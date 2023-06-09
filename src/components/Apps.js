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

            <h1>Login</h1>
            <label ></label>
              <input className="creds"
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}/>
              
              <input 
                type="password" 
                className="creds"
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