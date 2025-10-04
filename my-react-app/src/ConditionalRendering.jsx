import React from "react";

const MissedGoal = () => <h1>MISSED!</h1>;
const MadeGoal = () => <h1>Goal!</h1>;

const GoalIf = ({ isGoal }) => {
  if (isGoal) {
    return <MadeGoal />;
  }
  return <MissedGoal />;
};

const CarAnd = ({ brand }) => {
  return (
    <>
      {brand && <h1>My car is a {brand}!</h1>}
    </>
  );
};

const GoalTernary = ({ isGoal }) => {
  return (
    <>
      {isGoal ? <MadeGoal /> : <MissedGoal />}
    </>
  );
};

const ConditionalRendering = () => {
  return (
    <div>
      <h2>React Conditional Rendering Examples</h2>

      <h3>If Statement Example:</h3>
      <GoalIf isGoal={false} />

      <h3>Logical && Operator Example:</h3>
      <CarAnd brand="Ford" />
      <CarAnd brand="" /> {/* This will render nothing */}

      <h3>Ternary Operator Example:</h3>
      <GoalTernary isGoal={true} />
      <GoalTernary isGoal={false} />
    </div>
  );
};

export default ConditionalRendering;
