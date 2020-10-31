import React from "react";
import Head from "next/head";
import { useQuery } from "@apollo/client";

import gql from "graphql-tag";

const JOBS_QUERY = gql`
  query {
    users {
      firstName
    }
  }
`;

const Home = () => {
  const { loading, data, error } = useQuery(JOBS_QUERY);
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
      {list}
    </div>
  );
};

export default Home;
