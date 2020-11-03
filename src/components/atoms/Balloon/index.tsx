import * as React from "react";
import * as styles from "./styles.module.css";

type Props = {
    style?: {};
    children: string;
};

const Balloon = (props: Props) => {
    const { style, children } = props;
    return (
        <span className={styles["balloon"]} style={style}>
            {children}
        </span>
    );
};

export default Balloon;
