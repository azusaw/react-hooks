"use client";
import styles from "./page.module.css";
import React, { useContext, useMemo, useState } from "react";
import { NextPage } from "next";
import DescriptionCard from "@/components/DescriptionCard";
import UseContext from "@/components/UseContext";
import UseRefComponent from "@/components/UseRef";
import UseReducerComponent from "@/components/UseReducer";
import UseCallbackComponent from "@/components/UseCallback";
import UseMemoComponent from "@/components/UseMemo";
import WithoutMemo from "@/components/WithoutMemo";

import ReactMemoComponent from "@/components/ReactMemo";

const Home: NextPage = () => {
  const hooks = [
    {
      title: "useState",
      descriptionEn: (
        <p>
          {
            "useState is a React Hook that lets you add a state variable to your component."
          }
        </p>
      ),
      descriptionJp: (
        <>
          <p>
            {
              "関数コンポーネント内で状態を管理するためのHook。\n状態の初期値を引数に取り、現在の状態とそれを更新するための関数を返す。"
            }
          </p>
          <ul>
            <li>
              {
                "配列やオブジェクトの値の変更は正しく反映されない。具体的には配列のpushで値を追加しても正しく反映されないので、スプレッド演算子を使用する必要あり。"
              }
            </li>
            <li>
              {
                "状態の変更は非同期なため、更新値を他の処理ですぐに利用することができない。"
              }
            </li>
          </ul>
        </>
      ),
      codeSample: (
        <pre>
          {"const [items, setItems] = useState([]);\n\n" +
            "const addItem = (item) => {\n" +
            "  setItems([...items, item]);\n" +
            "});"}
        </pre>
      ),
      children: <></>,
    },
    {
      title: "useEffect",
      descriptionEn: (
        <p>
          {
            "useEffect Hook allows you to perform side effects in your components.\n"
          }
          {
            "Some examples of side effects are: fetching data, directly updating the DOM, and timers."
          }
        </p>
      ),
      descriptionJp: (
        <>
          <p>
            {"関数コンポーネント内で副作用を処理するためのHook。\n" +
              "第1引数: 副作用を処理する関数\n" +
              "第2引数: 副作用を実行するタイミングを指定する依存配列"}
          </p>
          <ul>
            <li>{"第2引数が更新されるたびに第1引数の関数が実行される。"}</li>
            <li>
              {
                "第2引数が空配列の場合、初回レンダリング時のみ第1引数の関数が実行される。"
              }
            </li>
          </ul>
        </>
      ),
      codeSample: (
        <pre>
          {"useEffect(() => {\n" +
            "  setTimeout(() => setCount((count) => count + 1), 1000)\n" +
            "});"}
        </pre>
      ),
      children: <></>,
    },
    {
      title: "useContext",
      descriptionEn: (
        <p>
          {
            "useContext is a React Hook that lets you read and subscribe to context from your component..\n"
          }
          {
            "It can be used together with the useState Hook to share state between deeply nested components more easily than with useState alone."
          }
        </p>
      ),
      descriptionJp: (
        <>
          <p>
            {
              "コンポーネントのツリー内でデータを共有するために使用される。\nコンポーネントのプロパティにデータを渡すことなく、コンポーネント間でデータを共有することができる。\n"
            }
            {"第1引数: 保持させたい値や関数"}
          </p>
          <ul>
            <li>
              {
                'Contextを呼び出す側はClientである必要があるため、ファイルの先頭で"use client";を宣言しなければエラーになる。'
              }
            </li>
            <li>
              {
                "<XXX.Provider value={{ count, increment, decrement }}>のようにして複数の値を渡すことができる。"
              }
            </li>
          </ul>
        </>
      ),
      codeSample: (
        <pre>
          {'/* parent: UseContext.tsx */\n"use client";\n' +
            'import React, { createContext, useContext, useState } from "react";\n\n' +
            "export const Count: React.Context<{\n" +
            "  count: number;\n" +
            "  increment: () => number;\n" +
            "  decrement: () => number;\n" +
            "}> = createContext(0);\n\n" +
            "const [count, setCount] = useState(0);\n" +
            "const decrement = () => setCount(count - 1);\n" +
            "const increment = () => setCount(count + 1)\n\n" +
            "<Count.Provider value={{ count, increment, decrement }}>\n" +
            "  <Counter />\n" +
            "</Count.Provider>\n\n\n" +
            '/* child: Counter.tsx */\n"use client";\n' +
            'import { Count } from "@/components/UseContext";\n\n' +
            "const { count, increment, decrement } = useContext(Count);\n\n" +
            '<Button onClick={decrement}>{"－"}</Button>\n' +
            "{count}\n" +
            '<Button onClick={increment}>{"＋"}</Button>'}
        </pre>
      ),
      children: <UseContext />,
    },
    {
      title: "useRef",
      descriptionEn: (
        <p>
          {"useRef allows you to persist values between renders.\n" +
            "It can be used to store a mutable value that does not cause a re-render when updated.\n"}
        </p>
      ),
      descriptionJp: (
        <>
          <p>
            {
              "主にDOM の参照に使用される。\nレンダリングに使用しない値の保持に使うこともできる。\n第1引数: 初期値"
            }
          </p>
          <ul>
            <li>
              {
                "ref.currentの値を変更させているだけなので、再レンダリングが走らないことが特徴。"
              }
            </li>
            <li>
              {
                "DOMに対する参照として使われることが多い。（サンプルコードを参照）"
              }
            </li>
          </ul>
        </>
      ),
      codeSample: (
        <pre>
          {'const [name, setName] = useState("");\n' +
            "const refNum = useRef<number>(0);\n" +
            "const refEl = useRef<HTMLInputElement>(null);\n\n" +
            "/* refer and update */\n" +
            "const value = refNum.current;\n" +
            "refNum.current = 2;\n\n" +
            "const focusInputBox = () => refEl.current.focus();\n" +
            "const focusOutInputBox = () => refEl.current.blur();\n\n" +
            "<Form.Control ref={ref} value={name} onChange={(e) => setName(e.target.value)} />\n" +
            "<Button onClick={focusInputBox}>Focus on box</Button>\n" +
            "<Button onClick={focusOutInputBox}>Focus out from box</Button>\n"}
        </pre>
      ),
      children: <UseRefComponent />,
    },
    {
      title: "useReducer",
      descriptionEn: (
        <p>
          {"useReducer Hook is similar to the useState Hook.\n" +
            "If you find yourself keeping track of multiple pieces of state that rely on complex logic, useReducer may be useful.\n"}
        </p>
      ),
      descriptionJp: (
        <>
          <p>
            {
              "状態を操作する複数のアクションに基づいて状態を更新することができる。\n第1引数: 状態を操作するアクション\n第2引数: 状態の初期値"
            }
          </p>
          <ul>
            <li>
              {
                "useStateと違い、状態を操作するための具体的な操作を複数定義できる。"
              }
            </li>
            <li>
              {
                "例えばログインフォームでユーザー名やパスワードを管理する時など、それぞれを更新する操作を定義する場合にはuseReducerが適している。"
              }
            </li>
            <li>
              {
                "dispatchに渡すオブジェクトは'アクションオブジェクト'と呼ばれ、アクションオブジェクトにはtypeプロパティを含む必要がある。"
              }
            </li>
            <li>
              {
                "dispatch実行時に呼び出される'reducer'を必ず定義する必要がある。"
              }
            </li>
            <li>
              {
                "reducerの第1引数: stateには定義した変数が丸ごと入っている。(今回の例ではinitialTodos)"
              }
            </li>
            <li>
              {
                'reducerの第2引数: actionにはdispatchで渡した連想配列が入っている。(今回の例では{ type: "COMPLETE", id: todo.id }'
              }
            </li>
            <li>
              {
                "サンプルコードでは変更の度にmapを実行するので、更新の効率が悪そう。login formなど単一オブジェクトの更新に向いているかも？"
              }
            </li>
          </ul>
        </>
      ),
      codeSample: (
        <pre>
          {'"use client";\n' +
            'import { Form } from "react-bootstrap";\n\n' +
            "const initialTodos = [\n" +
            "  { id: 1,\n" +
            '    title: "Todo 1",\n' +
            "    complete: false },\n" +
            "  { id: 2,\n" +
            '    title: "Todo 2",\n' +
            "    complete: false }\n" +
            "];\n\n" +
            "/* called by dispatch */\n" +
            "const reducer = (state, action) => {\n" +
            "  switch (action.type) {\n" +
            '    case "COMPLETE":\n' +
            "      console.log(state, action);\n" +
            "      return state.map((todo) =>\n" +
            "        todo.id === action.id ? { ...todo, complete: !todo.complete } : todo,\n" +
            "      );\n" +
            '    case "ADD":\n' +
            "      /* need to create new array */\n" +
            "      let tmp = state.map((todo) =>\n" +
            "        todo.id === action.id ? { ...todo, complete: !todo.complete } : todo,\n" +
            "      );\n" +
            "      tmp.push({\n" +
            "        id: state.length + 1,\n" +
            "        title: `Todo ${state.length + 1}`,\n" +
            "        complete: false,\n" +
            "      });\n" +
            "      return tmp;" +
            "    default:\n" +
            "      return state;\n" +
            "  }\n" +
            "};\n\n" +
            "const [todos, dispatch] = useReducer(reducer, initialTodos);\n" +
            "\n" +
            "<>\n" +
            "  {todos.map((todo) => (\n" +
            "    <Form.Check\n" +
            "      key={todo.id} checked={todo.complete} label={todo.title}\n" +
            '      onChange={() => dispatch({ type: "COMPLETE", id: todo.id })}\n' +
            "    />\n" +
            "  ))}\n" +
            '  <Button onClick={() => dispatch({ type: "ADD" })}>\n' +
            '    {"Add"}\n' +
            "  </Button>\n" +
            "</>"}
        </pre>
      ),
      children: <UseReducerComponent />,
    },
    {
      title: "useCallback",
      descriptionEn: (
        <p>
          {"useCallback Hook returns a memoized callback function. It only runs when one of its dependencies update.\n" +
            "This allows us to isolate resource intensive functions so that they will not automatically run on every render." +
            "\n"}
        </p>
      ),
      descriptionJp: (
        <>
          <p>
            {"再レンダリングの間に関数定義をキャッシュする。\n第2引数の配列に格納された要素のいずれかが変更されたとき、関数が再生成される。\n" +
              "依存配列の要素に変更がなければ、コンポーネントが再レンダリングされたとしても useCallback は同じ関数を返す。"}
            {"第1引数: 対象の関数\n"}
            {"第2引数: 依存配列\n"}
            {"戻り値: メモ化された関数\n"}
          </p>
          <ul>
            <li>
              {
                "useCallback を使う一番の目的は 不要なレンダリングを避けることであり、パフォーマンスの向上につながる。"
              }
            </li>
            <li>
              {
                "第2引数の配列に格納された要素のいずれかが変更されたとき、関数が再生成される。"
              }
            </li>
            <li>
              {
                "基本的に React.memo と併用して使う。同じ関数を返すことでコンポーネントに変更が発生しないので、レンダリングを避けられる。"
              }
            </li>
          </ul>
        </>
      ),
      codeSample: (
        <pre>
          {"const [todos, setTodos] = useState(initialTodos);\n" +
            "const addTodo = useCallback(() => {\n" +
            "  setTodos((t) => [\n" +
            "    ...t,\n" +
            "    {\n" +
            "      id: todos.length + 1,\n" +
            "      title: `Todo ${todos.length + 1}`,\n" +
            "      complete: false,\n" +
            "  }]);\n" +
            "}, [todos]);\n\n" +
            " <>\n" +
            "  {todos.map((todo) => (\n" +
            "    <Form.Check\n" +
            "      key={todo.id}\n" +
            "      checked={todo.complete}\n" +
            "      label={todo.title}\n" +
            "      onChange={() => {\n" +
            "        let tmp = todos.map((item) =>\n" +
            "          item.id === todo.id\n" +
            "            ? {\n" +
            "                id: todo.id,\n" +
            "                title: todo.title,\n" +
            "                complete: !todo.complete,\n" +
            "               }\n" +
            "            : item,\n" +
            "        );\n" +
            "        setTodos((t) => [...tmp]);\n" +
            "      }}\n" +
            "    />\n" +
            "  ))}\n" +
            '  <Button onClick={addTodo}>{"Add"}</Button>\n' +
            "</>"}
        </pre>
      ),
      children: <UseCallbackComponent />,
    },
    {
      title: "useMemo",
      descriptionEn: (
        <p>
          {"useMemo Hook returns a memoized value. It only runs when one of its dependencies update.\n" +
            "The useMemo and useCallback Hooks are similar. The main difference is that useMemo returns a memoized value and useCallback returns a memoized function.\n"}
        </p>
      ),
      descriptionJp: (
        <>
          <p>
            {
              "useCallbackと同様に、パフォーマンス向上のためのHook。\n第2引数の配列に格納された要素のいずれかが変更されたとき、値が再計算される。\n"
            }
            {"第1引数: 対象の関数\n"}
            {"第2引数: 依存配列\n"}
            {"戻り値: メモ化された値\n"}
          </p>
          <ul>
            <li>
              {
                "useMemoは計算結果の値をメモ化し、React.memoのようにコンポーネントの再レンダリングをスキップできる。"
              }
            </li>
            <li>
              {
                "計算量が小さい場合には、useMemo を使うこと自体のオーバーヘッドが大きくな流可能性もある。"
              }
            </li>
          </ul>
        </>
      ),
      codeSample: (
        <pre>
          {'"use client";\n' +
            'import React, { useMemo, useState } from "react";\n\n' +
            "const [num1, setNum1] = useState(0);\n" +
            "const [num2, setNum2] = useState(0);\n\n" +
            "const double = (num) => {\n" +
            "  let i = 0;\n" +
            "  /* make slow */" +
            "  while (i < 1000000000) i++;\n" +
            "  return num * 2;\n" +
            "};\n\n" +
            "/* it called every time when component re-render */\n" +
            "const doubledNum2 = double(num2);\n\n" +
            "/* it calls double only num2 updated */\n" +
            "const doubledNum2Memo = useMemo(() => double(num2), [num2]);\n\n" +
            "<div>\n" +
            "  Num 1: {num1}\n" +
            "  <button onClick={() => setNum1(num1 + 1)}>+</button>\n" +
            "  Num 2: {num2}\n" +
            "  <button onClick={() => setNum2(num2 + 1)}>-</button>\n" +
            "  Doubled Num 2: {doubledCount} <DoubledNum2Memo num2={num2} />\n" +
            "</div>"}
        </pre>
      ),
      children: (
        <>
          <p>
            {
              "Increase Num1 and compare rendering speed. Without useMemo, unnecessary rendering occur when Num1 is updated."
            }
          </p>
          <WithoutMemo />
          <UseMemoComponent />
        </>
      ),
    },
    {
      title: "React.Memo",
      descriptionEn: (
        <p>
          {
            "memo lets you skip re-rendering a component when its props are unchanged.\n"
          }
        </p>
      ),
      descriptionJp: (
        <>
          <p>
            {
              "上記2つと同様に、パフォーマンス向上のためのHook。\n第1引数のいずれかが変更されたとき、値が再計算される。\n"
            }
            {"第1引数: 依存配列\n"}
            {"戻り値: メモ化されたコンポーネント\n"}
          </p>
          <ul>
            <li>
              {
                "コンポーネントメモ化し、React.memoのようにコンポーネントの再レンダリングをスキップできる。"
              }
            </li>
            <li>
              {
                "クリック時のハンドラなどコールバック関数を渡す場合は、React.memoを使っても再レンダーされてしまう。useCallbackを使って関数をメモ化する必要がある。"
              }
            </li>
          </ul>
        </>
      ),
      codeSample: (
        <pre>
          {'"use client";\n' +
            'import React, { useMemo, useState } from "react";\n\n' +
            "const [num1, setNum1] = useState(0);\n" +
            "const [num2, setNum2] = useState(0);\n\n" +
            "const DoubledNum2Memo = React.memo((props: { num2: number }) => {\n" +
            "  let i = 0;\n" +
            "  while (i < 1000000000) i++;\n" +
            "  return <span>{props.num2 * 2}</span>;\n" +
            "});\n\n" +
            "<div>\n" +
            "  Num 1: {num1}\n" +
            "  <button onClick={() => setNum1(num1 + 1)}>+</button>\n" +
            "  Num 2: {num2}\n" +
            "  <button onClick={() => setNum2(num2 + 1)}>-</button>\n" +
            "  Doubled Num 2: {doubledCount} {doubledNum2Memo}\n" +
            "</div>"}
        </pre>
      ),
      children: (
        <>
          <p>
            {
              "Increase Num1 and compare rendering speed. Without useMemo, unnecessary rendering occur when Num1 is updated."
            }
          </p>
          <WithoutMemo />
          <ReactMemoComponent />
        </>
      ),
    },
  ];

  return (
    <main className={styles.main}>
      <h1>✏️… React Hooks</h1>
      <div className={styles.grid}>
        {hooks.map((hook, idx) => (
          <DescriptionCard
            key={`card-${idx}`}
            title={hook.title}
            descriptionEn={hook.descriptionEn}
            descriptionJp={hook.descriptionJp}
            codeSample={hook.codeSample}
          >
            {hook.children}
          </DescriptionCard>
        ))}
      </div>
    </main>
  );
};
export default Home;
