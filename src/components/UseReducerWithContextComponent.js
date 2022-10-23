import React, { useReducer, useContext } from "react";
import "./UseReducerWithContextComponent.css";
import ReducerContextA from "./ReducerContextDemo/ReducerContextA";
import ReducerContextB from "./ReducerContextDemo/ReducerContextB";
import ReducerContextC from "./ReducerContextDemo/ReducerContextC";

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

export const CounterContext = React.createContext(null);

const UseReducerWithContextComponent = () => {
  const [counter, dispatch] = useReducer(reducer, initialState);

  return (
    <CounterContext.Provider value={{ counter, dispatch }}>
      <div className="wrapper">
        <div className="ex-wrapper">
          <h3>
            useContext+useReducer - Context used to share the reducer state.
          </h3>
          <p>
            <em>Each child component will invoke an 'action' on a reducer.</em>
          </p>
          <span>Global State: </span>
          <h2
            style={{
              display: "inline",
              marginLeft: "2px",
              color: "goldenrod",
              backgroundColor: "black",
              padding: "5px",
            }}
          >
            {counter}
          </h2>
          <ReducerContextA />
          <ReducerContextB />
          <ReducerContextC />
        </div>
      </div>
    </CounterContext.Provider>
  );
};

export default UseReducerWithContextComponent;
