import React from "react";

const JSXExample = () => {
  const simpleJSX = <h1>I Love JSX!</h1>;

  const exprJSX = <h2>React is {5 + 5} times better with JSX</h2>;

  const listJSX = (
    <ul>
      <li>Apples</li>
      <li>Bananas</li>
      <li>Cherries</li>
    </ul>
  );

  const multipleDiv = (
    <div>
      <p>I am a paragraph.</p>
      <p>I am a paragraph too.</p>
    </div>
  );

  const multipleFragment = (
    <>
      <p>I am a paragraph.</p>
      <p>I am a paragraph too.</p>
    </>
  );

  const classNameExample = <h3 className="myclass">Hello World</h3>;

  const commentExample = <h4>Hello {/* Wonderful */} World</h4>;

  const brand = "Ford";
  const model = "Mustang";
  const carComponent = (
    <>
      <h2>My Car</h2>
      <p>It is a {brand} {model}.</p>
    </>
  );

  return (
    <div>
      <h1>JSX Examples</h1>
      {simpleJSX}
      {exprJSX}
      {listJSX}
      {multipleDiv}
      {multipleFragment}
      {classNameExample}
      {commentExample}
      {carComponent}
    </div>
  );
};

export default JSXExample;
