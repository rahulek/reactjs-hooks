import React, { useState } from "react";
import "./UseStateComponent.css";

const UseStateComponent = () => {
  //Create a state with useState
  //This stores the string that the use types in the input control
  //
  //useState param - '' -> initialState of a blank string
  //useState returns an array of 2 elements -
  //   1. text -> label for the state. Use it in the JSX
  //   2. setText -> function that writes a new value to the state
  let [text, setText] = useState("");

  //Example 2 - Counter State
  let [counterValue, setCounterValue] = useState(0);

  //Example 3 - Array state
  let [names, setNames] = useState([]);
  let [inputName, setInputName] = useState("");

  //Input event handler
  const handleTextChange = (e) => {
    //take the changed text from input event e
    //and set the new value using the state modificaion function

    setText(e.target.value);
  };

  //Button Click Event handler
  const handleButtonClick = (e) => {
    setCounterValue((prevValue) => prevValue + 1);
  };

  //Name input event handler
  const handleNameChange = (e) => {
    //save the text entered in the state
    setInputName(e.target.value);
  };

  //Name Add event handler
  const handleNameAdd = (e) => {
    //Use the ES6 spread operator syntax
    //to store the new name.
    //"inputName" is the state that contains the latest name entered.
    setNames((prevNames) => [...prevNames, inputName]);
  };

  //JSX
  return (
    <div className="wrapper">
      <div className="ex1-wrapper">
        <h3>useState Hook 1 - Simple state</h3>
        <p>
          <em>
            Text Entered into the input is stored in the state and also
            displayed{" "}
          </em>
        </p>
        <input type="text" value={text} onChange={handleTextChange} />
      </div>

      <div className="ex2-wrapper">
        <h3>useState Hook 2 - Safe State change</h3>
        <p>
          <em>Button Click increments the counter</em>
        </p>
        <p>Counter: {counterValue}</p>
        <button onClick={handleButtonClick}>Increment</button>
      </div>

      <div className="ex3-wrapper">
        <h3>useState Hook 3 - complex data type - array</h3>
        <p>
          <em>Name input keeps appending to the array</em>
        </p>
        <input type="text" onChange={handleNameChange} />
        <button onClick={handleNameAdd}>Add name!</button>
        <div>
          {names.map((n) => (
            <span>
              <em>{n + " "}</em>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UseStateComponent;
