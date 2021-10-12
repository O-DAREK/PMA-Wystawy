import React, { Fragment, useState } from "react";
import { SearchBox } from "./SearchBox";
import "../components-styles/headerStyle.scss";

export const TrueHeader = (props) => {
  const [serveDestination, setServeDestination] = useState("India");

  return (
    <div>
      <header className="headerStyle">
        <main style={{ clear: "both", textAlign: "center", color: "white" }}>
          <h1
            style={{
              fontFamily: "Aldine",
              margin: "0px"
            }}
          >
            Wystawy PMA
          </h1>
          <h2>Poznaj kolekcje Muzeum Archeologicznego {serveDestination}</h2>
          <SearchBox setServeDestination={setServeDestination} />
        </main>
      </header>
    </div>
  );
};
