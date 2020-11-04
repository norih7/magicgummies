import * as React from "react";
import * as styles from "./styles.module.css";

type List = {
  to: string;
  title: string;
};

type Props = {
  name: string;
  style: object;
  isFlex?: boolean;
  children: List[];
};

const CategoryList = (props: Props) => {
  const { name, style, isFlex, children } = props;
  const list = children.map((item, index) => {
    const { to, title } = item;
    const style = isFlex ? { width: "205px", marginRight: "4px" } : {};
    return (
      <li key={index} style={style}>
        <a href={to}>{title}</a>
      </li>
    );
  });
  const flex = isFlex ? { display: "flex", "flex-wrap": "wrap" } : {};
  return (
    <section className={styles["category-list"]} style={style}>
      <h1>{name}</h1>
      <ul style={flex}>{list}</ul>
    </section>
  );
};

export default CategoryList;
