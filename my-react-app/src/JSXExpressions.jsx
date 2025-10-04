import React from "react";

const kwToHp = (kw) => kw * 1.36;

const JSXExpressions = () => {
  const directExpr = 218 * 1.36;

  const hp = 218 * 1.36;

  const myCar = {
    name: "Fiat",
    model: "500",
    color: "white"
  };

  return (
    <div>
      <h1>JSX Expressions Examples</h1>

      {/* Direct expression */}
      <h2>Direct Expression</h2>
      <p>My car has {directExpr} horsepower.</p>

      {/* Variable inside JSX */}
      <h2>Variable Example</h2>
      <p>My car has {hp} horsepower.</p>

      {/* Function call inside JSX */}
      <h2>Function Call Example</h2>
      <p>My car has {kwToHp(218)} horsepower.</p>

      {/* Object properties */}
      <h2>Object Properties Example</h2>
      <p>
        My car is a {myCar.color} {myCar.name} {myCar.model}.
      </p>
    </div>
  );
};

export default JSXExpressions;
