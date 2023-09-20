"use client";
import React, { useMemo, useState } from "react";
import { Button } from "react-bootstrap";

const UseMemoComponent: React.FC = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  const double = (num) => {
    let i = 0;
    while (i < 1000000000) i++;
    return num * 2;
  };

  /* it calls double only num2 updated */
  const doubledNum2Memo = useMemo(() => double(num2), [num2]);

  return (
    <div
      style={{
        margin: "1rem 0",
        borderRadius: "5px",
        border: "lightgrey 1px solid",
        padding: "10px",
      }}
    >
      <div>
        <h6>{"With useMemo"}</h6>
        {"Num 1: "}
        {num1}
        <Button
          style={{ padding: "0 2px", margin: "0 5px" }}
          onClick={() => setNum1(num1 + 1)}
        >
          {"＋"}
        </Button>
      </div>
      <div>
        {"Num 2: "}
        {num2}
        <Button
          style={{ padding: "0 2px", margin: "0 5px" }}
          onClick={() => setNum2(num2 + 1)}
        >
          {"＋"}
        </Button>
      </div>
      <div style={{ marginTop: "1rem" }}>
        {"Doubled Num 2: "}
        {doubledNum2Memo}
      </div>
    </div>
  );
};

export default UseMemoComponent;
