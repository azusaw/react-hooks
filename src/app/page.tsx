import styles from "./page.module.css";
import DescriptionCard from "@/components/DescriptionCard";

export default function Home() {
  const hooks = [
    {
      title: "useState",
      descriptionEn:
        "useState is a React Hook that lets you add a state variable to your component.",
      descriptionJp: "hoge",
      codeSample: (
        <pre>
          {"useEffect(() => {\n" +
            "  setTimeout(() => setCount((count) => count + 1), 1000)\n" +
            "});"}
        </pre>
      ),
    },
    {
      title: "useEffect",
      descriptionEn:
        "useEffect Hook allows you to perform side effects in your components.\nSome examples of side effects are: fetching data, directly updating the DOM, and timers.",
      descriptionJp: "hoge",
      codeSample: (
        <pre>
          {"useEffect(() => {\n" +
            "  setTimeout(() => setCount((count) => count + 1), 1000)\n" +
            "});"}
        </pre>
      ),
    },
  ];

  return (
    <main className={styles.main}>
      <h1>✏️… React Hooks</h1>
      <div className={styles.grid}>
        {hooks.map((hook) => (
          <DescriptionCard
            title={hook.title}
            descriptionEn={hook.descriptionEn}
            descriptionJp={hook.descriptionJp}
            codeSample={hook.codeSample}
          >
            <div></div>
          </DescriptionCard>
        ))}
      </div>
    </main>
  );
}
