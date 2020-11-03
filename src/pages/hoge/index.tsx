import Head from "next/head";
import { useQuery, gql } from "@apollo/client";

const TEST = gql`
  query {
    users {
      firstName
    }
  }
`;

const Hoge = (props) => {
  const { loading, error, data } = useQuery(TEST);

  return (
    <>
      hoge
      {JSON.stringify(data)}
    </>
  );
};

export default Hoge;
