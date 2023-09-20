"use client";
import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { Count } from "@/components/UseContext";

const Counter: React.FC = () => {
  const { count, increment, decrement } = useContext(Count);

  return (
    <>
      <div>
        {"Count in Counter: "}
        <Button
          style={{ padding: "0 2px", margin: "0 5px" }}
          onClick={decrement}
        >
          {"－"}
        </Button>
        {count}
        <Button
          style={{ padding: "0 2px", margin: "0 5px" }}
          onClick={increment}
        >
          {"＋"}
        </Button>
      </div>
    </>
  );
};

export default Counter;
