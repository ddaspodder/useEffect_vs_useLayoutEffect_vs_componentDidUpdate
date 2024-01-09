import React, { useState, useEffect, useLayoutEffect, useMemo } from "react";

const WithUseLayoutEffect = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const divRefs = useMemo(() => new Array(10000).fill(null).map((_, i) => React.createRef()), []);

  const getRandom = () => Math.floor(Math.random() * 1000);

  useLayoutEffect(() => {
    console.log("useEffect started", divRefs);
    divRefs.forEach(({ current: div }) => {
      const offsetWidth = div ? div.offsetWidth : 0;
    });
    // const start = performance.now();
    // while (performance.now() - start < 1000) {}
    if (count1 % 2 !== 0) setCount2(getRandom());
    console.log("useEffect completed");
  }, [count1]);

  const handleClick = () => {
    setCount1(count1 + 1);
    setCount2(getRandom());
  };

  return (
    <div>
      <h1>useLayoutEffect</h1>
      {divRefs.map((ref, i) => (
        <div key={i} ref={ref}></div>
      ))}
      <div
        style={{
          fontSize: "60px",
          fontWeight: "bold",
          color: count1 % 2 === 0 ? "green" : "blue",
        }}
      >
        {count1}
      </div>
      <div
        style={{
          fontSize: "60px",
          fontWeight: "bold",
          color: count2 % 2 === 0 ? "green" : "blue",
        }}
      >
        {count2}
      </div>
      <button onClick={handleClick}>Try me </button>
    </div>
  );
};

export default WithUseLayoutEffect;
