import React from "react";

const App = () => {
    var inputs = document.getElementById('inputs');

    
    function toSentenceCase(text) {
        return text.toLowerCase().replace(/(^|\.)\s*([a-z])/g, function(match, p1, p2) {
          return p1 + p2.toUpperCase();
        });
      }
    

      const buss = ()=>  {
        var convertedText = toSentenceCase(inputs.value);
        inputs.value = convertedText;   
      };
      

    return (
            <div>
                <h3>Case Converter</h3> <br/>
                <textarea id="inputs" placeholder="Enter text to convert"></textarea>
                <button type="button" onClick={buss}>Sentence case</button>
            </div>
        );

}


export default App;