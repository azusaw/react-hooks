"use client";
import React, { useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";

const UseRefComponent: React.FC = () => {
  const [name, setName] = useState("");
  const refEl = useRef<HTMLInputElement>(null);
  const refNum = useRef<number>(0);
  const focusInputBox = () => refEl.current.focus();
  const focusOutInputBox = () => refEl.current.blur();

  /* it can be effected to screen */
  refNum.current = 2;

  /* never apply: no rendering occur */
  const changeRefNum = (num: number) => {
    refNum.current = num;
  };

  return (
    <>
      {"name: "}
      {name}
      <Form.Control
        ref={refEl}
        type="text"
        value={name}
        style={{ margin: "0.5rem 0 1rem" }}
        onChange={(e) => setName(e.target.value)}
      />
      <Button onClick={focusInputBox}>Focus on box</Button>
      <Button onClick={focusOutInputBox} style={{ marginLeft: "1rem" }}>
        Focus out from box
      </Button>
      <div style={{ marginTop: "2rem" }}>
        {"refNum: "}
        {refNum.current}
        {"  ... (no rendering occurs!)"}
        <br />
        <Button onClick={() => changeRefNum(3)} style={{ marginTop: "0.5rem" }}>
          Set refNum to 3
        </Button>
      </div>
    </>
  );
};

export default UseRefComponent;
