import styles from "./DescriptionCard.module.css";
import React, { ReactElement } from "react";
import { Container } from "react-bootstrap";

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
      <Container>{props.children}</Container>
    </div>
  );
};
export default DescriptionCard;
