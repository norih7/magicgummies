import * as React from "react";
import { useQuery, gql } from "@apollo/client";

type Props = {};

const query = gql`
  query {
    users {
      firstName
    }
  }
`;

const Hoge = (props: Props) => {
  const { loading, data, error } = useQuery(query);
  if (loading) {
    return "loading";
  }
  if (error) {
    return <p>Error: {JSON.stringify(error)}</p>;
  }

  return <span>{JSON.stringify(data)}</span>;
};

export default Hoge;
