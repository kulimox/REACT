import React from "react";

const VariablesExample = () => {
  function testVar() {
    if (true) {
      var x = 5;
    }
    console.log("var x:", x); 
  }
  testVar();

  if (true) {
    let y = 10;
    console.log("let y:", y); 
  }

  const z = 20;

  const arr = [1, 2, 3];
  arr.push(4); 
  console.log("const arr:", arr);

  const obj = { name: "Mikaela" };
  obj.name = "React"; 
  console.log("const obj:", obj);

  return (
    <div>
      <h2>ES6 Variables Example</h2>
      <p>Check the console for results of var, let, and const examples.</p>
    </div>
  );
};

export default VariablesExample;
