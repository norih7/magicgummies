import * as React from "react";
import * as styles from "./styles.module.css";
import { useQuery, gql } from "@apollo/client";

interface KeyValues {
  [key: string]: string;
}

type Props = {
  chart: string;
  style?: {};
};

const Items = (props: Props) => {
  const { chart, style } = props;
  const query = gql`
    query($chart: String) {
      items(map: "", chart: $chart) {
        name
        type
        maps {
          place
          description
        }
      }
    }
  `;
  const { loading, error, data } = useQuery(query, {
    variables: { chart: "1-1" },
  });

  if (loading) return <p>loading</p>;
  if (error) return <p>error</p>;

  const list = data.items.map((item, i) => <li key={i}>{item.name}</li>);

  return (
    <div className={styles["items"]} style={style}>
      <h3>入手アイテム</h3>
      <ul>{list}</ul>
    </div>
  );
};

export default Items;
