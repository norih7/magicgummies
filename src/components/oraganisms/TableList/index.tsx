import * as React from "react";
import * as styles from "./styles.module.css";
import { Link } from "gatsby";
import Balloon from "components/atoms/Balloon";
import Section from "components/atoms/Section";
import DescriptionList from "components/molecules/DescriptionList";
import { TOWN, TIMELINE } from "constant";

type Props = {
    data: [];
    style?: object;
};

type Maps = {
    map: string;
    description: string;
    timeline: string;
};

const TableList = (props: Props) => {
    const { data, style } = props;
    const list = data.map((item: any) => {
        const { name, ruby, description, level, tp, hit, maps } = item;
        const skillCondition = [];
        if (level > 0) {
            skillCondition.push({
                term: "習得レベル:",
                detail: level
            });
        }
        const other =
            maps !== null
                ? [
                      <h3 style={{ marginTop: "14px" }}>習得場所</h3>,
                      ...maps.map((item: Maps) => {
                          const { map, description, timeline } = item;
                          return (
                              <p style={{ marginBottom: "4px" }}>
                                  <Balloon>{TIMELINE[timeline]}</Balloon>
                                  {TOWN[map]}/{description}
                              </p>
                          );
                      })
                  ]
                : "";
        return (
            <Section>
                <header>
                    <h3>
                        {name} <span className={styles["ruby"]}>({ruby})</span>
                    </h3>
                </header>
                <DescriptionList descriptionList={skillCondition} inline={true}></DescriptionList>
                <p>{description}</p>
                <table>
                    <thead>
                        <tr>
                            <th>消費TP</th>
                            <th>最大HIT数</th>
                            <th>備考</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{tp}</td>
                            <td>{hit}</td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
                {other}
            </Section>
        );
    });
    return (
        <section className={styles["tableList"]} style={style}>
            {list}
        </section>
    );
};

export default TableList;
