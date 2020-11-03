import * as React from "react";
import * as styles from "./styles.module.css";

type Description = {
    term: string | React.ReactNode;
    detail: string | React.ReactNode;
};

type Props = {
    descriptionList: Description[];
    inline: boolean;
    style?: {};
};

const DescriptionList = (props: Props) => {
    const { style, descriptionList, inline } = props;
    const list = descriptionList.map((description: Description) => {
        const { term, detail } = description;
        return (
            <>
                <dt>{term}</dt>
                <dd>{detail}</dd>
            </>
        );
    });
    const inlineClassName = inline === true ? "inline" : "";
    return <dl className={styles[inlineClassName]}>{list}</dl>;
};

export default DescriptionList;
