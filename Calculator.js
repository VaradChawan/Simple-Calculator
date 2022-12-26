import React, { useState } from "react";
import "./Calculator.css";


function Calculator(props) {
  const [result, setResult] = useState("");

  const handleClick = (e) => {
    setResult(result.concat(e.target.name));
  };

  const allClear = () => {
    setResult("");
  };

  const backSpace = () => {
    setResult(result.slice(0, -1)); //or -1
  };

  const calculate = () => {
    try {
      setResult(eval(result).toString());
    } catch (err) {
      setResult("Error");
    }
  };

  return (
    <>
      <div className="container">
        <div className="calculator-grid">
          <form className="form">
            <input type="text" value={result} />
          </form>
          <div className="keypad">
                  <button onClick={allClear} className="highlight" id="clear">
                    AC
                  </button>
                  <button onClick={backSpace} id="backSpace" className="highlight">Del</button>
                  <button onClick={handleClick} className="highlight" name="/">
                    /
                  </button>
                  <button onClick={handleClick} name="1">
                    1
                  </button>
                  <button onClick={handleClick} name="2">
                    2
                  </button>
                  <button onClick={handleClick} name="3">
                    3
                  </button>
                  <button onClick={handleClick} className="highlight" name="*">
                    *
                  </button>
                  <button onClick={handleClick} name="4">
                    4
                  </button>
                  <button onClick={handleClick} name="5">
                    5
                  </button>
                  <button onClick={handleClick} name="6">
                    6
                  </button>
                  <button onClick={handleClick} name="+" className="highlight">
                    +
                  </button>
                  <button onClick={handleClick} name="7">
                    7
                  </button>
                  <button onClick={handleClick} name="8">
                    8
                  </button>
                  <button onClick={handleClick} name="9">
                    9
                  </button>
                  <button className="highlight" onClick={handleClick} name="-">
                    -
                  </button>
                  <button onClick={handleClick} name="0">
                    0
                  </button>
                  <button onClick={handleClick} name=".">
                    .
                  </button>
                  
                  <button onClick={calculate} className="highlight" id="result">
                    =
                  </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Calculator;
