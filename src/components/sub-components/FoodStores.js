import React from "react";
import "../components-styles/foodStoresStyle.css";
import { ShopCard } from "./ShopCard";

export const FoodStores = ({ baseUrl }) => {
  const shopes = [
    {
      imgUrl:
        "http://cz.pma.pl:51080/rest/Co_Na_Zdjeciu(3369)/Foto?$imageformat=best&$version=1&$expand=Foto",
      name: "Zapinka",
      variety: ["Ozdoby", "Bizuteria"],
      price: ``,
      rating: 5
    },
    {
      imgUrl: "https://cutt.ly/fvhcMaH",
      name: "Rohtash",
      variety: ["Rasmalai", "Halwa"],
      price: `${"\u20A8"} 100 per person`,
      rating: 2
    }
  ];
  return (
    <div className="foodStoresStyle">
      {shopes.map((shop) => (
        <ShopCard shop={shop} baseUrl={baseUrl} key={shop.imgUrl} />
      ))}
    </div>
  );
};
