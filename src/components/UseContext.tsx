"use client";

import React, { useContext } from "react";
import { Count } from "@/app/page";
import Counter from "@/components/Counter";

const UseContextComponent: React.FC = () => {
  const { count, increment, decrement } = useContext(Count);
  return (
    <div>
      {"Count in UseContextComponent: "}
      {count}
      <Counter />
    </div>
  );
};

export default UseContextComponent;
