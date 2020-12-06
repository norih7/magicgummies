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
        {[
          {
            to: "chart-1",
            title: "攻略チャート1 (トーティスの村〜ローンヴァレイ)",
          },
          {
            to: "chart-2",
            title: "攻略チャート2 (精霊の森〜モーリア坑道)",
          },
          {
            to: "chart-3",
            title: "攻略チャート3 (アルヴァニスタの都〜過去ダオス城)",
          },
          {
            to: "chart-4",
            title: "攻略チャート4 (超古代都市トール〜ダオス城)",
          },
        ]}
      </CategoryList>
      <CategoryList name="特技、奥義" style={marginBottom} isFlex={true}>
        {[
          { to: "skill-cless", title: "クレス" },
          { to: "skill-mint", title: "ミント" },
          { to: "skill-", title: "クラース" },
          { to: "skill-", title: "アーチェ" },
          { to: "skill-", title: "チェスター" },
          { to: "skill-", title: "すず" },
        ]}
      </CategoryList>
      <CategoryList name="各種データ" style={marginBottom} isFlex={true}>
        {[
          { to: "", title: "奥義、魔術一覧" },
          { to: "", title: "称号一覧/獲得条件" },
          { to: "", title: "料理レシピ一覧/入手場所" },
          { to: "", title: "武器一覧" },
          { to: "", title: "防具一覧" },
          { to: "", title: "アクセサリ一覧" },
        ]}
      </CategoryList>
      <CategoryList name="システム" style={marginBottom} isFlex={true}>
        {[
          { to: "", title: "システム解説" },
          { to: "", title: "ストーリークリア特典" },
          { to: "", title: "上限レベル/コンボ" },
          { to: "", title: "最強装備品" },
          { to: "", title: "戦闘のマニュアル操作" },
        ]}
      </CategoryList>
      <CategoryList name="システム" style={marginBottom} isFlex={true}>
        {[
          { to: "", title: "すずを仲間に" },
          { to: "", title: "闘技場データ" },
          { to: "", title: "エンヴンボウ強化イベント" },
          { to: "", title: "アイフリードの遺産イベント" },
          { to: "", title: "特殊な奥義、召喚術" },
          { to: "", title: "経験値を購入" },
          { to: "", title: "GROOVYアーチェ" },
          { to: "", title: "ナンシーとエルウィンの恋" },
          { to: "", title: "隠しイベント発生条件" },
          { to: "", title: "モーリア坑道下層" },
          { to: "", title: "闇の洞窟" },
        ]}
      </CategoryList>
    </Layout>
  );
};

export default Home;
