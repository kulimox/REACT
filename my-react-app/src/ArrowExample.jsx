import React from "react";

const ArrowExample = () => {
  // Arrow function with one parameter
  const sayHello = name => "Hello " + name;

  return (
    <div>
      <h2>Arrow Function Example</h2>
      <p>{sayHello("Mikaela")}</p>
    </div>
  );
};

export default ArrowExample;
