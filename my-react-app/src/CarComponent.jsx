import React from "react";

// Normal JS Classes
class Car {
  constructor(name) {
    this.brand = name;
  }

  present() {
    return "I have a " + this.brand;
  }
}

class Model extends Car {
  constructor(name, mod) {
    super(name);
    this.model = mod;
  }

  show() {
    return this.present() + ", it is a " + this.model;
  }
}

// React Component
function CarComponent() {
  const mycar = new Model("Ford", "Mustang");

  return (
    <div>
      <h2>Car Example with Classes</h2>
      <p>{mycar.show()}</p>
    </div>
  );
}

export default CarComponent;
