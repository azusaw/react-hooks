"use client";

import styles from "./page.module.css";
import DescriptionCard from "@/components/DescriptionCard";
import React, { createContext, useContext, useState } from "react";
import UseContext from "@/components/UseContext";
import Counter from "@/components/Counter";
import { Button } from "react-bootstrap";

export const Count: React.Context<{
  count: number;
  increment: () => number;
  decrement: () => number;
}> = createContext(0);

export default function Home() {
  const [count, setCount] = useState(0);
  const decrement = () => setCount(count - 1);
  const increment = () => setCount(count + 1);

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
            {
              "関数コンポーネント内で副作用を処理するためのHook。\n第1引数: 副作用を処理する関数\n第2引数: 副作用を実行するタイミングを指定する依存配列"
            }
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
              "コンポーネントのツリー内でデータを共有するために使用される。\nこのフックを使用することでコンポーネントのプロパティにデータを渡すことなくコンポーネント間でデータを共有することができる\n"
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
          {'/* top: page.tsx */\n"use client";\n' +
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
            "  <UseContext />\n" +
            "</Count.Provider>\n\n\n" +
            '/* parent: UseContext.tsx  */\n"use client";\n' +
            'import { Count } from "@/app/page";\n' +
            'import Counter from "@/components/Counter";\n\n' +
            "const { count, increment, decrement } = useContext(Count);\n" +
            "<Counter />\n\n\n" +
            '/* child: Counter.tsx */\n"use client";\n' +
            'import { Count } from "@/app/page";\n\n' +
            "const { count, increment, decrement } = useContext(Count);\n" +
            "<Button onClick={decrement}>" +
            '  {"－"}' +
            "</Button>" +
            "  {count}" +
            "<Button onClick={increment}>" +
            '  {"＋"}' +
            "</Button>"}
        </pre>
      ),
      children: (
        <div>
          {"Count in page.tsx: "}
          {count}
          <Count.Provider value={{ count, increment, decrement }}>
            <UseContext />
          </Count.Provider>
        </div>
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
}
