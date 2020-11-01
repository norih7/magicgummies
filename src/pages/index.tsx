import * as React from "react";
import Head from "next/head";
import { useQuery, gql } from "@apollo/client";
import Hoge from "components/atoms/Hoge";

const query = gql`
  query {
    users {
      firstName
    }
  }
`;

const Home = () => {
  const { loading, data, error } = useQuery(query);
  if (loading) {
    return "loading";
  }
  if (error) {
    return <p>Error: {JSON.stringify(error)}</p>;
  }

  const list = data.users.map((user, i) => {
    const { firstName } = user;
    return <li key={i}>{firstName}</li>;
  });

  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hoge />
      {list}
    </div>
  );
};

export default Home;
