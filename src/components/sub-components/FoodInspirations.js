import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "../components-styles/slideShowStyle.css";

export const FoodInspirations = () => {
  const slideImages = [
    "http://cz.pma.pl:51080/rest/Dzialy(9)/Ilustracja?$imageformat=best",
    "https://atom.pma.pl/uploads/r/panstwowe-muzeum-archeologiczne-w-warszawie/3/2/326/KRUK-6205-1-1-1_141.jpg",
    "https://atom.pma.pl/uploads/r/panstwowe-muzeum-archeologiczne-w-warszawie/conf/logo.png"
  ];
  return (
    <div style={{ backgroundColor: "#F5F5F5", padding: "10px" }}>
      <h2 style={{ textAlign: "left" }}>Wystawy</h2>
      <Slide>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[0]})` }}></div>
          <span>Skarby wieków średnich</span>
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[1]})` }}></div>
          <span>Monety</span>
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[2]})` }}></div>
          <span>Stanowiska</span>
        </div>
      </Slide>
    </div>
  );
};
