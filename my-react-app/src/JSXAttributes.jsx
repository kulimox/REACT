import React from "react";

const JSXAttributes = () => {
  const classNameValue = "myclass";

  const handleClick = () => {
    alert("Hello World");
  };

  const mystyles = {
    color: "red",
    fontSize: "20px",
    backgroundColor: "lightyellow",
    padding: "10px"
  };

  return (
    <div>
      <h1 className="myclass">Hello World with className</h1>
      <h1 className={classNameValue}>Hello World with expression</h1>

      {/* Event handler example */}
      <button onClick={handleClick}>Click me</button>

      {/* Boolean attributes */}
      <button onClick={handleClick} disabled>
        Disabled Button (true by default)
      </button>
      <button onClick={handleClick} disabled={true}>
        Disabled Button (explicit true)
      </button>
      <button onClick={handleClick} disabled={false}>
        Enabled Button (false)
      </button>

      {/* Inline style */}
      <h2 style={mystyles}>Styled Heading with inline style</h2>
    </div>
  );
};

export default JSXAttributes;
