import * as React from "react";
import Layout from "components/templates/Layout";
import { gql } from "@apollo/client";
import client from "util/ApolloClient";

const query = gql`
  query {
    items(chart: "1-1") {
      name
      type
      maps {
        place
        description
      }
    }
  }
`;

const SkillsPage = (props: any) => {
  const frontMatter = {
    title: "特技 - カイル",
  };

  return (
    <Layout frontMatter={frontMatter}>
      <h1>カイルの特技、奥義</h1>
      <h2>カイルの特技一覧</h2>
    </Layout>
  );
};

export async function getStaticProps() {
  const { data } = await client.query({
    query,
  });
  return {
    props: {
      data: data,
    },
  };
}

export default SkillsPage;
