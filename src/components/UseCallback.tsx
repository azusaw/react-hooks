"use client";
import React, { useCallback, useReducer, useState } from "react";
import { Button, Form } from "react-bootstrap";

const initialTodos = [
  {
    id: 1,
    title: "Todo 1",
    complete: false,
  },
  {
    id: 2,
    title: "Todo 2",
    complete: false,
  },
];

const UseCallbackComponent: React.FC = () => {
  const [todos, setTodos] = useState(initialTodos);
  const addTodo = useCallback(() => {
    setTodos((t) => [
      ...t,
      {
        id: todos.length + 1,
        title: `Todo ${todos.length + 1}`,
        complete: false,
      },
    ]);
  }, [todos]);

  return (
    <>
      {todos.map((todo) => (
        <Form.Check
          key={todo.id}
          type="checkbox"
          checked={todo.complete}
          label={todo.title}
          onChange={() => {
            let tmp = todos.map((item) =>
              item.id === todo.id
                ? {
                    id: todo.id,
                    title: todo.title,
                    complete: !todo.complete,
                  }
                : item,
            );
            setTodos((t) => [...tmp]);
          }}
        />
      ))}
      <Button onClick={addTodo}>{"Add"}</Button>
    </>
  );
};

export default UseCallbackComponent;
