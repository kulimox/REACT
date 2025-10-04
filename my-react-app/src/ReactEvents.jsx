import React from "react";

const ReactEvents = () => {
  const shoot = () => {
    alert("Great Shot!");
  };
  const shootWithMessage = (msg) => {
    alert(msg);
  };

  const shootWithEvent = (msg, event) => {
    alert(`${msg} - Event type: ${event.type}`);
  };

  return (
    <div>
      <h2>React Events Examples</h2>

      {/* Basic onClick */}
      <button onClick={shoot}>Take the shot!</button>

      {/* Passing argument using arrow function */}
      <button onClick={() => shootWithMessage("Goal!")}>Goal Shot!</button>

      {/* Passing argument and accessing event object */}
      <button onClick={(event) => shootWithEvent("Super Goal!", event)}>
        Super Goal Shot!
      </button>
    </div>
  );
};

export default ReactEvents;
