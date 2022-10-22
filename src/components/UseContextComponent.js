import React, { useState } from "react";
import ComponentIndia from "./ContextDemo/ComponentIndia";
import CounterReceiver from "./ContextDemo/CounterReceiver";

//Step 1: Create a Context
export const UserContext = React.createContext(null);

//Example 2 Context
export const CounterContext = React.createContext(null);

const UseContextComponent = () => {
  const [counter, setCounter] = useState(0);

  return (
    //Step 2: Setup a context provider high up in the component hierarchy
    //and wrap all the components with it
    //
    //Provide a "value" attribute on the provider with whatever needs to
    //be passed to any component interested.

    <div>
      <UserContext.Provider
        value={{ firstName: "Julius", lastName: "Caesar", died: "44 BC" }}
      >
        <ComponentIndia />
      </UserContext.Provider>

      <CounterContext.Provider value={{ counter, setCounter }}>
        <CounterReceiver />
      </CounterContext.Provider>
    </div>
  );
};

export default UseContextComponent;
