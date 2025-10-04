import React from "react";

const DestructuringProps = ({ color = "blue", brand, ...rest }) => {
  return (
    <div>
      <h2>Destructuring Props Examples</h2>

      {/* Using destructuring */}
      <p>My {brand} {rest.model} is {color}!</p>

      {/* Access other rest properties */}
      {rest.year && <p>Year: {rest.year}</p>}
    </div>
  );
};

export default DestructuringProps;
