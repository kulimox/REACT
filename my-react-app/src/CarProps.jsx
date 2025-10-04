import React from "react";

const CarProps = (props) => {
  return (
    <div>
      <h2>My {props.carinfo?.name} {props.carinfo?.model}!</h2>
      <p>
        It is {props.carinfo?.color} and it is from {props.carinfo?.year}!
      </p>
      {props.years && (
        <p>Production years: {props.years.join(", ")}</p>
      )}
    </div>
  );
};

export default CarProps;
