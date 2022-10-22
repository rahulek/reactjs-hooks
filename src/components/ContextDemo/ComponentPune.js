import React, { useContext } from "react";
import "../UseContextComponent.css";

//step 3: Import the exported Context
import { UserContext } from "../UseContextComponent";

const ComponentPune = () => {
  //step 4: Use the useContext() hook to get the context value
  //provided by the provider
  const userInfo = useContext(UserContext);

  return (
    <div className="wrapper">
      <div className="ex-wrapper">
        <h3>useContext Hook - High level component provides a context</h3>
        <p>
          <em>
            The context information shared by the parent is consumed here.
          </em>
        </p>
        <p>
          <strong>{`${userInfo.firstName} ${userInfo.lastName}`}</strong>
          <em>{`  died ${userInfo.died}`}</em>
        </p>
      </div>
    </div>
  );
};

export default ComponentPune;
