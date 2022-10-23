import React, { useContext } from "react";
import { CounterContext } from "../UseReducerWithContextComponent";
import "../UseReducerWithContextComponent.css";

const ReducerContextC = () => {
  const { counter, dispatch } = useContext(CounterContext);

  return (
    <div className="wrapper">
      <div className="ex-wrapper">
        <h3>useContext+useReducer - Component C.</h3>
        <p>
          <em>This will invoke only the 'reset' action</em>
        </p>
        <h2>{counter}</h2>
        <button onClick={() => dispatch("reset")}>Reset</button>
      </div>
    </div>
  );
};

export default ReducerContextC;
