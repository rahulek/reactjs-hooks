import React from "react";
import "./AsyncDataUseEffect.css";

const APODCardComponent = (data) => {
  return (
    <div className="wrapper">
      <div className="apod-card">
        <a href={data.url} style={{ cursor: "pointer" }}>
          <img src={data.url} alt={data.title} height={120} width={"100%"} />
        </a>
        <p>
          <strong>{`${data.title.substring(0, 20)}...`}</strong>
        </p>
        <p>{`${data.date} by ${data.copyright}`}</p>
      </div>
    </div>
  );
};

export default APODCardComponent;
