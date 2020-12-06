import fs from "fs";
import matter from "gray-matter";
import hydrate from "next-mdx-remote/hydrate";
import renderToString from "next-mdx-remote/render-to-string";
import dynamic from "next/dynamic";
import Head from "next/head";
import Link from "next/link";
import path from "path";
import client from "util/ApolloClient";
import { gql } from "@apollo/client";
import Layout from "components/templates/Layout";
import Tips from "components/molecules/Tips";
import Items from "components/molecules/Items";
const root = process.cwd();

const components = {
  Tips,
  Items,
  Head,
};

export default function PostPage(props) {
  const { source, frontMatter } = props;
  const content = hydrate(source, { components });
  return (
    <>
      <Layout frontMatter={frontMatter}>
        <main>{content}</main>
      </Layout>
    </>
  );
}

export const getStaticProps = async ({ params }) => {
  console.log("!!!", params);
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
  const result = await client.query({
    query,
  });

  console.log("!!!result", result.data.items);

  const source = fs.readFileSync(
    path.join(root, "src/markdown/", `${params.slug}`, `index.mdx`),
    "utf8"
  );
  const { content, data } = matter(source);
  console.log("!!!", data);
  const mdxSource = await renderToString(content, {
    components,
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
    scope: { ...data, hoge: "fuga" },
  });

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
      hoge: "fuga",
    },
  };
};

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: fs
      .readdirSync(path.join(root, "src/markdown"))
      .map((p) => ({ params: { slug: p.replace(/\.mdx/, "") } })),
  };
}
