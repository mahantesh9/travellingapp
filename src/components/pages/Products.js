import React from "react";
import "../../App.css";

export default function Products() {
  const object = {
    name: "Products",
    age: 21,
  };
  return <h1 className="products">{object.name}</h1>;
}
