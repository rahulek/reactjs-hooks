import React, { useReducer } from "react";
import "./UseReducerComponent.css";

//Ex1 - simple reducer with only an action
const initialState1 = 0;
//Ex1 reducer - increment/decrement/reset action handler
const reducer1 = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState1;
    default: //return the unmodified state if the action is unclear
      return state;
  }
};

//Ex2 - complex reducer with an action and payload
const initialState2 = 0;
//action param is now an object - {type: 'increment|decrement|reset', payload: byValue}
const reducer2 = (state, action) => {
  switch (action.type) {
    case "increment":
      return state + action.payload;
    case "decrement":
      return state - action.payload;
    case "reset":
      return initialState2;
    default: //return the unmodified state if the action is unclear
      return state;
  }
};

const UseReducerComponent = () => {
  const [counter, dispatch] = useReducer(reducer1, initialState1);
  //dispatch function needs an object type {type, payload}
  const [counter2, dispatch2] = useReducer(reducer2, initialState2);

  //JSX
  return (
    <div className="wrapper">
      <div className="ex-wrapper">
        <h3>useReducer Hook 1 - Simple action</h3>
        <p>
          <em>Counter incremented/decremented/reset</em>
        </p>
        <h2>{counter}</h2>
        <button onClick={() => dispatch("increment")}>Increment</button>
        <button onClick={() => dispatch("decrement")}>Decrement</button>
        <button onClick={() => dispatch("reset")}>Reset</button>
      </div>

      <div className="ex-wrapper">
        <h3>useReducer Hook 2 - Complex action</h3>
        <p>
          <em>
            Counter incremented by <strong>5</strong>
          </em>
        </p>
        <p>
          <em>
            Counter decremented by <strong>1</strong>
          </em>
        </p>
        <h2>{counter2}</h2>
        <button onClick={() => dispatch2({ type: "increment", payload: 5 })}>
          Increment
        </button>
        <button onClick={() => dispatch2({ type: "decrement", payload: 1 })}>
          Decrement
        </button>
        <button onClick={() => dispatch2({ type: "reset" })}>Reset</button>
      </div>
    </div>
  );
};

export default UseReducerComponent;
