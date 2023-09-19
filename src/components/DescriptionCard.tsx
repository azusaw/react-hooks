import styles from "./DescriptionCard.module.css";
import React, { ReactElement } from "react";

type Props = {
  title: string;
  descriptionEn: ReactElement;
  descriptionJp: ReactElement;
  codeSample: ReactElement;
  children: ReactElement;
};

const DescriptionCard: React.FC<Props> = (props) => {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{props.title}</h3>
      {props.descriptionEn}
      {props.descriptionJp}
      {props.codeSample}
      {props.children}
    </div>
  );
};
export default DescriptionCard;
