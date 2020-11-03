import * as React from "react";
import * as styles from "./styles.module.css";

type Props = {
    style?: {};
    children: React.ReactNode;
};

const Section = (props: Props) => {
    const { style, children } = props;
    return (
        <section className={styles["section"]} style={style}>
            {children}
        </section>
    );
};

export default Section;
