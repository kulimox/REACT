import React from "react";

const ReactLists = () => {
  const carsWithId = [
    { id: 1001, brand: "Ford" },
    { id: 1002, brand: "BMW" },
    { id: 1003, brand: "Audi" }
  ];

  const cars = ["Ford", "BMW", "Audi"];

  return (
    <div>
      <h2>React Lists Examples</h2>

      {/* List with object keys */}
      <h3>List with unique keys:</h3>
      <ul>
        {carsWithId.map((car) => (
          <li key={car.id}>I am a {car.brand}</li>
        ))}
      </ul>

      {/* List using array index as key (not recommended for dynamic lists) */}
      <h3>List using index as key:</h3>
      <ul>
        {cars.map((car, index) => (
          <li key={index}>I am a {car}</li>
        ))}
      </ul>
    </div>
  );
};

export default ReactLists;
