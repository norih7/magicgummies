import * as React from "react";
import Layout from "components/templates/Layout";

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

export default SkillsPage;
