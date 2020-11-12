import * as React from "react";
import * as styles from "./styles.module.css";
import { useQuery, gql } from "@apollo/client";
import client from "util/ApolloClient";

interface KeyValues {
  [key: string]: string;
}

type Props = {
  chart: string;
  style?: {};
};

const Items = (props: Props) => {
  const { chart, style } = props;

  return (
    <div className={styles["items"]} style={style}>
      <h3>入手アイテム</h3>
      <ul></ul>
    </div>
  );
};

export default Items;
