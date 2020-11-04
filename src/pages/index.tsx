import * as React from "react";
import Layout from "components/templates/Layout";
import CategoryList from "components/oraganisms/CategoryList";

const Home = (props) => {
  const marginBottom = {
    marginBottom: "16px",
  };

  const frontMatter = {
    title: "トップページ",
  };

  return (
    <Layout isHome={true} frontMatter={frontMatter}>
      <CategoryList name="攻略チャート" style={marginBottom}>
        {[{ to: "chart-1", title: "攻略チャート1 (オープニング〜)" }]}
      </CategoryList>
      <CategoryList name="特技、奥義" style={marginBottom} isFlex={true}>
        {[
          { to: "skill-kyle", title: "カイル" },
          { to: "skill-loni", title: "ロニ" },
          { to: "skill-judas", title: "ジューダス" },
          { to: "skill-reala", title: "リアラ" },
          { to: "skill-nanaly", title: "ナナリー" },
          { to: "skill-harold", title: "ハロルド" },
        ]}
      </CategoryList>
    </Layout>
  );
};

export default Home;
