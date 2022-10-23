import React, { useContext } from "react";
import { CounterContext } from "../UseReducerWithContextComponent";
import "../UseReducerWithContextComponent.css";

const ReducerContextA = () => {
  const { counter, dispatch } = useContext(CounterContext);

  return (
    <div className="wrapper">
      <div className="ex-wrapper">
        <h3>useContext+useReducer - Component A.</h3>
        <p>
          <em>This will invoke only the 'increment' action</em>
        </p>
        <h2>{counter}</h2>
        <button onClick={() => dispatch("increment")}>Increment</button>
      </div>
    </div>
  );
};

export default ReducerContextA;
