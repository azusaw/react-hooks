"use client";
import React, { createContext, useState } from "react";
import Counter from "@/components/Counter";

export const Count = createContext({
  count: 0,
  decrement: undefined,
  increment: undefined,
});

const UseContextComponent: React.FC = () => {
  const [count, setCount] = useState(0);
  const decrement = () => setCount(count - 1);
  const increment = () => setCount(count + 1);

  return (
    <div>
      {"Count in UseContextComponent: "}
      {count}
      <Count.Provider value={{ count, increment, decrement }}>
        <Counter />
      </Count.Provider>
    </div>
  );
};

export default UseContextComponent;
