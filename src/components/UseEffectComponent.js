import React, { useState, useEffect } from "react";
import "./UseEffectComponent.css";

const UseEffectComponent = () => {
  //Store a counter state
  let [counter1, setCounter1] = useState(0);
  let [counter2, setCounter2] = useState(0);
  let [counter3, setCounter3] = useState(0);

  //useEffect 1 - no dependency list
  //The effect runs every time the componet is rendered
  useEffect(() => {
    const timer1 = setTimeout(() => {
      setCounter1((prevCounter) => prevCounter + 1);
    }, 1000);

    //BAD code -> timer1 is never cleared.
  });

  //useEffect 2 - empty 2nd parameter - run the effect only once
  useEffect(() => {
    const timer2 = setTimeout(() => {
      setCounter2(counter2 + 1);
    }, 1000);

    //BAD code -> timer2 is never cleared.
  }, []); //<-- Notice the empty array of dependencies

  //useEffect 3 -
  //2nd parameter - dependency list - "counter3"
  //every time: counter 3 changes, the effect will run
  useEffect(() => {
    const timer3 = setTimeout(() => {
      setCounter3(counter3 + 1);
    }, 1000);

    return () => {
      console.log(`Timer3 is being cleared`);
      clearTimeout(timer3);
    };
  }, [counter3]); //<-- Notice the empty array of dependencies

  //JSX
  return (
    <div className="wrapper">
      <div className="ex1-wrapper">
        <h3>Timer - useEffect with no dependency</h3>
        <p>
          <em>The counter runs all the time.</em>
        </p>
        <h2>{counter1}</h2>
      </div>

      <div className="ex2-wrapper">
        <h3>Timer - useEffect runs only once</h3>
        <p>
          <em>The counter will be incremented only by 1</em>
        </p>
        <h2>{counter2}</h2>
      </div>

      <div className="ex3-wrapper">
        <h3>Timer - useEffect runs every time the "count" state changes</h3>
        <p>
          <em>The counter will be incremented every 1 second.</em>
        </p>
        <p>
          <em>
            The useEffect also returns the function that clears the timer.
          </em>
        </p>
        <h2>{counter3}</h2>
      </div>
    </div>
  );
};

export default UseEffectComponent;
