import React,{useState} from 'react';
import './Greeting.css';

function Greeting(props) {
    

    const [flag, setFlag] = useState(1);
    
    const [currentText, setNewText] = useState(null);
    
    const inputChange = (event) => {
        setNewText(event.target.value);
    
        //console.log(event.target.value);
      };
    const printText = (e) => {
        e.preventDefault();
        if (flag) {
          let newText = "Hello " + currentText;    
          setNewText(newText);
          document.getElementById("resultTextPara").innerHTML = newText;
          setFlag(0);
        }
      };  

return(
    <>
        <div className="container mainBody">
        <h4>{props.heading}</h4>
        <input
          type="text"
          className="calAnswer"
          id="calAnswer"
          placeholder="Enter your name"
          onChange={inputChange}
        />
        <p className="p resultText" id="resultTextPara">
          {currentText}
        </p>

        <button className="btn btn-primary" onClick={printText}>
        Click Here
      </button>
      </div>
      
    </>
    
);

}

export default Greeting;