import React, { useContext } from "react";
import { CounterContext } from "../UseReducerWithContextComponent";
import "../UseReducerWithContextComponent.css";

const ReducerContextB = () => {
  const { counter, dispatch } = useContext(CounterContext);

  return (
    <div className="wrapper">
      <div className="ex-wrapper">
        <h3>useContext+useReducer - Component B.</h3>
        <p>
          <em>This will invoke only the 'decrement' action</em>
        </p>
        <h2>{counter}</h2>
        <button onClick={() => dispatch("decrement")}>Decrement</button>
      </div>
    </div>
  );
};

export default ReducerContextB;
