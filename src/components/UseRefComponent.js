import React, { useState, useEffect, useRef } from "react";
import "./UseRefComponent.css";

const UseRefComponent = () => {
  //Timer count as a state
  let [counter, setCounter] = useState(0);
  //Ref (example 1) to the timer is needed
  let timerRef = useRef(0);
  //Ref (example 2) to access the DOM element
  let button2Ref = useRef(null);

  //Use the side effect to set a timer
  //and increment counter every 1s
  useEffect(() => {
    timerRef.current = setTimeout(() => {
      setCounter(counter + 1);
    }, 1000);

    //cleanup function returned
    return () => {
      console.log(`timer cleaned up:`);
      clearTimeout(timerRef.current);
    };
  }, [counter]);

  //"Stop me" button click handler
  const handleStopClick = () => {
    //Get ref to the timer and clear it.
    console.log(`Clearing up the timer.`);
    //Clear the timer
    clearTimeout(timerRef.current);
  };

  //"Click me" button handler
  const handleClickMe = () => {
    //Generate a random color
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    //Change the background color of the button
    //Ref to this is stored in button2Ref
    button2Ref.current.style.backgroundColor = `#${randomColor}`;
  };

  //JSX
  return (
    <div className="wrapper">
      <div className="ex-wrapper">
        <h3>useRef Hook 1 - Cleanup the timer</h3>
        <p>
          <em>The timer should also be cleaned up on a button click.</em>
        </p>
        <p>
          <em>The timer display should stop when the "Stop me" is clicked.</em>
        </p>
        <h2>{counter}</h2>
        <button onClick={handleStopClick}>Stop me!</button>
      </div>

      <div className="ex-wrapper">
        <h3>useRef Hook 2 - Access the DOM element.</h3>
        <p>
          <em>
            Click "Click me" button to see other button's background color
            change.
          </em>
        </p>
        <button onClick={handleClickMe}>Click me!</button>
        {/* Set the ref attribute of the button */}
        <button ref={button2Ref}>Watch me change!</button>
      </div>
    </div>
  );
};

export default UseRefComponent;
