import React from "react";

const Son = (props) => {
  return (
    <div style={{ background: "lightgreen", padding: "10px", margin: "5px" }}>
      <h2>Son</h2>
      <div>{props.children}</div>
    </div>
  );
};

const Daughter = (props) => {
  return (
    <div style={{ background: "lightblue", padding: "10px", margin: "5px" }}>
      <h2>Daughter</h2>
      <div>{props.children}</div>
    </div>
  );
};

const Parent = () => {
  return (
    <div>
      <h1>My two Children</h1>
      <Son>
        <p>
          This was written in the Parent component,
          but displayed as a part of the Son component
        </p>
      </Son>
      <Daughter>
        <p>
          This was written in the Parent component,
          but displayed as a part of the Daughter component
        </p>
      </Daughter>
    </div>
  );
};

export default Parent;
