import * as React from "react";
import Head from "next/head";
import * as styles from "./styles.module.css";
import CategoryList from "components/oraganisms/CategoryList";

type FrontMatter = {
  layout?: string;
  title?: string;
};

type Props = {
  children: React.ReactNode;
  isHome?: boolean;
  frontMatter: FrontMatter;
};

const SITE_NAME = "マジグミ テイルズオブデスティニー2攻略";

const Layout = (props: Props) => {
  const { children, isHome, frontMatter = {} } = props;
  const { title } = frontMatter;

  const pageTitle = isHome === true ? SITE_NAME : `${SITE_NAME} - ${title}`;

  const rightContents =
    isHome === true ? (
      <>TopPageMenu</>
    ) : (
      <>
        <CategoryList name="攻略チャート" style={{ marginBottom: "10px" }}>
          {[{ to: "chart-1", title: "オープニング〜" }]}
        </CategoryList>
        <CategoryList name="特技" style={{ marginBottom: "10px" }}>
          {[{ to: "skill-kyle", title: "カイル" }]}
        </CategoryList>
      </>
    );

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      {/* <nav className={styles["navigator"]}>
                <div style={{ width: "900px", margin: "0 auto" }}>
                    <ul>
                        <li>Menu1</li>
                        <li>Menu2</li>
                    </ul>
                </div>
            </nav> */}
      <header className={styles["header"]}>
        <div style={{ width: "920px", margin: "0 auto" }}>
          <h1>
            <a href="">{SITE_NAME}</a>
          </h1>
        </div>
      </header>
      <div className={styles["update"]}>
        <div style={{ width: "920px", margin: "0 auto" }}>
          <dl>
            <dt>UPDATE</dt>
            <dd>アップデート</dd>
          </dl>
        </div>
      </div>
      <div className={styles["adsense"]}>
        <div
          style={{
            width: "920px",
            margin: "0 auto",
            background: "#aaa",
            height: "200px",
          }}
        ></div>
      </div>
      <div className={styles["contents"]}>
        <div style={{ width: "920px", margin: "0 auto", display: "flex" }}>
          <div style={{ width: "660px" }}>
            <main>{children}</main>
          </div>
          <div style={{ width: "240px", marginLeft: "20px" }}>
            {rightContents}
          </div>
        </div>
      </div>
      <footer className={styles["footer"]}>
        <div style={{ width: "920px", margin: "0 auto" }}></div>
      </footer>
    </>
  );
};

export default Layout;
