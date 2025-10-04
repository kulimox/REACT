import React from "react";
import CarProps from "./CarProps";

const GarageProps = () => {
  const carInfoObj = {
    name: "Ford",
    model: "Mustang",
    color: "red",
    year: 1969
  };

  const carYearsArray = [1964, 1965, 1966];

  return (
    <div>
      <h1>Garage with Props Examples</h1>

      {/* Passing object as prop */}
      <CarProps carinfo={carInfoObj} />

      {/* Passing array as prop */}
      <CarProps carinfo={["Ford", "Mustang"]} years={carYearsArray} />

      {/* Passing single prop */}
      <CarProps carinfo={{ name: "BMW", model: "X5", color: "blue", year: 2023 }} />
    </div>
  );
};

export default GarageProps;
