"use client";
import React, { useReducer } from "react";
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

/* called by dispatch */
const reducer = (state, action) => {
  switch (action.type) {
    case "COMPLETE":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, complete: !todo.complete } : todo,
      );
    case "ADD":
      /* need to create new array */
      let tmp = state.map((todo) =>
        todo.id === action.id ? { ...todo, complete: !todo.complete } : todo,
      );
      tmp.push({
        id: state.length + 1,
        title: `Todo ${state.length + 1}`,
        complete: false,
      });
      return tmp;
    default:
      return state;
  }
};

const UseReducerComponent: React.FC = () => {
  const [todos, dispatch] = useReducer(reducer, initialTodos);

  return (
    <>
      {todos.map((todo) => (
        <Form.Check
          key={todo.id}
          type="checkbox"
          checked={todo.complete}
          label={todo.title}
          onChange={() => dispatch({ type: "COMPLETE", id: todo.id })}
        />
      ))}
      <Button onClick={() => dispatch({ type: "ADD" })}>{"Add"}</Button>
    </>
  );
};

export default UseReducerComponent;
