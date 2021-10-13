import React, { Fragment } from "react";
import { SearchBox } from "../sub-components/SearchBox";

export const SecondaryHeader = () => {
  return (
    <Fragment>
      <h1 style={secondaryHeaderStyle}>
        <img
          src={require("/public/pma-logo.png")}
          className="App-logo"
          alt="logo"
        />
        <p style={{ fontSize: "0.3em" }}>Państwowe Muzeum Archeologiczne</p>
      </h1>
      <div
        style={{
          float: "left",
          margin: "10px 50px"
        }}
      >
        <SearchBox />
      </div>
      <div style={{ clear: "both", marginTop: "100px" }}>
        <hr />
      </div>
    </Fragment>
  );
};

const secondaryHeaderStyle = {
  //fontFamily: "Trebuchet MS",
  fontSize: "2em",
  margin: "0px",
  float: "left"
};
