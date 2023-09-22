"use client";
import React, { useMemo, useState } from "react";
import { Button } from "react-bootstrap";

const ReactMemoComponent: React.FC = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  const double = (num) => {
    let i = 0;
    while (i < 1000000000) i++;
    return num * 2;
  };

  /* it didn't work because of callback? */
  // const DoubledNum2MemoNotWork = React.memo(({ num }: any) => {
  //   return <a>{double(num)}</a>;
  // });

  /* it did not work */
  const DoubledNum2Memo = React.memo((props: { num2 }) => {
    let i = 0;
    while (i < 1000000000) i++;
    return <span>{props.num2 * 2}</span>;
  });

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
        <h6>{"With React.Memo"}</h6>
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
        <DoubledNum2Memo num2={num2} />
      </div>
    </div>
  );
};

export default ReactMemoComponent;
