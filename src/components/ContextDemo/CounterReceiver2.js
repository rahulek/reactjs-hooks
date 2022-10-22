import React, { useContext } from "react";
import "../UseContextComponent.css";

import { CounterContext } from "../UseContextComponent";

const CounterReceiver2 = () => {
  const { counter } = useContext(CounterContext);

  return (
    <div className="wrapper">
      <div className="ex-wrapper">
        <h3>useContext Hook - CounterContext Child</h3>
        <p>
          <em>
            The context should display counter in-sync with the parent's counter
          </em>
        </p>
        <h2
          style={{
            display: "inline-block",
            backgroundColor: "lightgrey",
            padding: "15px",
            border: "2px solid black",
          }}
        >
          {counter}
        </h2>
      </div>
    </div>
  );
};

export default CounterReceiver2;
