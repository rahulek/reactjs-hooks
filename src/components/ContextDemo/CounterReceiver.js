import React, { useContext } from "react";
import "../UseContextComponent.css";

import { CounterContext } from "../UseContextComponent";
import CounterReceiver2 from "./CounterReceiver2";

const CounterReceiver = () => {
  const { counter, setCounter } = useContext(CounterContext);

  return (
    <div className="wrapper">
      <div className="ex-wrapper">
        <h3>useContext Hook - CounterContext</h3>
        <p>
          <em>
            The context now has counter value and the modification function
          </em>
        </p>
        <h2>{counter}</h2>
        <button onClick={() => setCounter(counter + 1)}>Increment</button>
        <CounterReceiver2 />
      </div>
    </div>
  );
};

export default CounterReceiver;
