import React from "react";
import { ISeasons } from "../../constants/fishingRegulations";
import CardContent from "./CardContent";
import styles from "./Card.module.css";

export interface ICard {
  title: string;
  subtitle: string;
  content: ISeasons[];
}

const Card: React.FC<ICard> = ({ title, subtitle, content }) => (
  <article className={styles.container}>
    <h2 className={styles.title}>{title}</h2>

    <article>
      <h3>{subtitle}</h3>
    </article>

    <article>
      <CardContent content={content} />
    </article>
  </article>
);

export default Card;
