import React, { useState } from "react";

const Count = () => {
  const [count, setCount] = useState(0);
  function AddValue() {
    setCount(count + 1);
  }
  function Removevalue() {
    setCount(count - 1);
  }
  return (
    <div>
      <button onClick={AddValue}>AddValue {count}</button>
      <button onClick={Removevalue}>Removevalue {count}</button>
    </div>
  );
};

export default Count;
