import React from "react";

const JSXIfStatements = () => {
  const x1 = 5;
  let y;
  if (x1 < 10) {
    y = "Banana";
  } else {
    y = "Apple";
  }

  const x2 = 15;

  return (
    <div>
      <h2>JSX If Statements Examples</h2>

      {/* If statement outside JSX */}
      <h3>Option 1: If Statement</h3>
      <p>x1 = {x1} → {y}</p>

      {/* Ternary expression inside JSX */}
      <h3>Option 2: Ternary Expression</h3>
      <p>x2 = {x2} → {x2 < 10 ? "Banana" : "Apple"}</p>
    </div>
  );
};

export default JSXIfStatements;
