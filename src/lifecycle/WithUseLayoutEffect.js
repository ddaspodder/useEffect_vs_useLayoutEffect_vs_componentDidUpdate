import React, { useState, useLayoutEffect } from "react";

const WithUseLayoutEffect = () => {
  const [count, setCount] = useState(-1);

  useLayoutEffect(() => {
    for (let i = 0; i < 1000000000; i++) {}
    setCount(0);
  }, []);

  useLayoutEffect(() => {
    for (let i = 0; i < 1000000000; i++) {}
    if (count % 2 === 1 && count > 0) setCount(count + 1);
  }, [count]);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>useLayoutEffect</h1>
      <div
        style={{
          fontSize: "60px",
          fontWeight: "bold",
          color: count % 2 === 0 ? "green" : "blue",
        }}
      >
        {count}
      </div>
      <button onClick={handleClick}>Try me</button>
    </div>
  );
};

export default WithUseLayoutEffect;
