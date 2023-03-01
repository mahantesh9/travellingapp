import React from "react";
import "../../App.css";

export default function Services() {
  const object = [
    {
      name: "mantesh",
      age: 23,
      City: "vijaypur",
    },
    {
      name: "akash",
      age: 23,
      City: "vijaypur",
    },
    {
      name: "anil",
      age: 23,
      City: "vijaypur",
    },
    {
      name: "mantesh",
      age: 23,
      City: "vijaypur",
    },
    {
      name: "suresh",
      age: 23,
      City: "vijaypur",
    },
    {
      name: "mantesh",
      age: 23,
      City: "vijaypur",
    },
    {
      name: "daani",
      age: 23,
      City: "vijaypur",
    },
  ];

  return (
    <table style={{ border: "20px solid red" }}>
      <thead>
        <tr>
          <th style={{ border: "20px solid red" }}>Name</th>
          <th style={{ border: "20px solid red" }}>Age</th>
          <th style={{ border: "20px solid red" }}>City</th>
        </tr>
      </thead>
      <tbody>
        {object.map((item, index) => (
          <tr>
            <td style={{ border: "20px solid red" }}>{item.name}</td>
            <td style={{ border: "20px solid red" }}>{item.age}</td>
            <td style={{ border: "20px solid red" }}>{item.City}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
