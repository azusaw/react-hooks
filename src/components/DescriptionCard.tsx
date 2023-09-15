import styles from "./DescriptionCard.module.css";
import React, { ReactElement } from "react";

type Props = {
  title: string;
  descriptionEn: string;
  descriptionJp: string;
  codeSample: ReactElement;
  children: ReactElement;
};

const DescriptionCard: React.FC<Props> = (props) => {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{props.title}</h3>
      <p>{props.descriptionEn}</p>
      <p>{props.descriptionJp}</p>
      {props.codeSample}
    </div>
  );
};
export default DescriptionCard;
