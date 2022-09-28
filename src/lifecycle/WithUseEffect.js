import React, { useState, useEffect } from "react";

const WithUseEffect = () => {
  const [count, setCount] = useState(-1);

  useEffect(() => {
    for (let i = 0; i < 1000000000; i++) {}
    setCount(0);
  }, []);

  useEffect(() => {
    for (let i = 0; i < 1000000000; i++) {}
    if (count % 2 === 1 && count > 0) setCount(count + 1);
  }, [count]);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>useEffect</h1>
      <div
        style={{
          fontSize: "60px",
          fontWeight: "bold",
          color: count % 2 === 0 ? "green" : "blue",
        }}
      >
        {count}
      </div>
      <button onClick={handleClick}>Try me </button>
    </div>
  );
};

export default WithUseEffect;
