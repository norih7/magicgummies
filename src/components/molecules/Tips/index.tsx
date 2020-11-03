import * as React from "react";
import * as styles from "./styles.module.css";
import Balloon from "components/atoms/Balloon";
import Section from "components/atoms/Section";

type Props = {
  title: string;
  style: object;
  children: any;
};

const Tips = (props: Props) => {
  const { title, children, style } = props;
  return (
    <Section style={style}>
      <header>
        <Balloon>Tips</Balloon>
        {title}
      </header>
      <div className={styles["content"]}>{children}</div>
    </Section>
  );
};

export default Tips;
