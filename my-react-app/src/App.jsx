import React from "react";
import DestructuringProps from "./DestructuringProps";

function App() {
  return (
    <div>
      <h1>My React App</h1>
      {/* Using destructuring with multiple props */}
      <DestructuringProps brand="Ford" model="Mustang" color="red" year={1969} />
      
      {/* Using destructuring with default color */}
      <DestructuringProps brand="BMW" model="X5" />
    </div>
  );
}

export default App;
