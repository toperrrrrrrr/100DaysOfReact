import { useState } from 'react';
import ReactDOM from 'react-dom/client';

const App = () => {
 
    const [name, setName] = useState("");
  
    return (
      <>
      <form>
        <label>Enter your name:
          <input
            type="text" 
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
      </form>

      <h1>{name}</h1>
      </>
    )
}


export default App;