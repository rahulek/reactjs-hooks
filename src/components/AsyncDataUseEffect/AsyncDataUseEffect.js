import React, { useState, useEffect } from "react";
import axios from "axios";
import APODCardComponent from "./APODCardComponent";

const AsyncDataUseEffect = () => {
  //Ex1 state
  // Loading means the data is not ready, its still loading
  // data -> null OR actual data returned by the NASA server
  // error -> null | string -> Error returned by the NASA server (if any)
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  //Ex2 State
  // date -> date string set inside the input control
  // dateFromClick -> final date state when the fetch button is clicked
  //               -> this is the date that will be used in the NASA API
  // loading2 ->  loading state as in Ex1
  // data2 -> data state as in Ex1
  // error2 -> error state as in Ex1
  const [date, setDate] = useState("");
  const [dateFromClick, setDateFromClick] = useState("");
  const [loading2, setLoading2] = useState(true);
  const [data2, setData2] = useState(null);
  const [error2, setError2] = useState("");

  //Ex1 - Run the side-effect only once on component-mount
  //Empty array passed as the 2nd parameter to the useEffect()
  useEffect(() => {
    axios
      .get("https://api.nasa.gov/planetary/apod", {
        params: {
          api_key: "bt8G2TwjWeSpudRpzt0ma8kgqGkiaVxlYuen574L",
        },
      })
      .then((response) => {
        setData(response.data);
        setLoading(false);
        setError("");
      })
      .catch((error) => {
        setError(`An error occurred: ${error.message}`);
        setData(null);
        setLoading(false);
      });
  }, []);

  //Ex2 - Run the side-effect every time the fetch button is clicked
  //Dependency array has one element - dateFromClick
  useEffect(() => {
    axios
      .get("https://api.nasa.gov/planetary/apod", {
        params: {
          api_key: "bt8G2TwjWeSpudRpzt0ma8kgqGkiaVxlYuen574L",
          date: dateFromClick,
        },
      })
      .then((response) => {
        setData2(response.data);
        setLoading2(false);
        setError2("");
      })
      .catch((error) => {
        setError2(`An error occurred: ${error.message}`);
        setData2(null);
        setLoading2(false);
      });
  }, [dateFromClick]);

  //Event handler when the input date changes
  //We simply change the state of the date input
  //This state change DOES NOT trigger the side-effect
  //The side-effect will run only when the "Fetch" button
  //is clicked
  const onDateChange = (e) => {
    setDate(e.target.value);
  };

  //Fetch button clicked
  const fetchClicked = () => {
    //Set the date that will trigger
    //the Ex2 side-effect to run and
    //get the image for the selected date
    setDateFromClick(date);
  };

  //JSX
  return (
    <div className="wrapper">
      <div className="ex-wrapper">
        <h3>Async HTTP Data Fetch - useState and useEffect</h3>
        <p>
          <em>NASA - APOD (Astronomy Picture of the Day)</em>
        </p>
        <h2>{loading ? "Loading Data" : ""}</h2>
        {data ? APODCardComponent(data) : null}
        <h4>{error ? error : null}</h4>
      </div>

      <div className="wrapper">
        <div className="ex-wrapper">
          <h3>Async HTTP Data Fetch - useState and useEffect</h3>
          <p>
            <em>NASA - APOD (Astronomy Picture of the Day)</em>
          </p>
          <p>
            <em>Enter the date and click on Fetch button</em>
          </p>
          <input type="date" value={date} onChange={onDateChange} />
          <button onClick={fetchClicked} style={{ marginLeft: "5px" }}>
            Fetch
          </button>
          <h2>{loading2 ? "Loading Data" : ""}</h2>
          {data2 ? APODCardComponent(data2) : null}
          <h4>{error2 ? error2 : null}</h4>
        </div>
      </div>
    </div>
  );
};

export default AsyncDataUseEffect;
