import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import withApollo from "next-with-apollo";
import fetch from "isomorphic-unfetch";

// Update the GraphQL endpoint to any instance of GraphQL that you like
console.log(process.env);
const GRAPHQL_URL = "http://localhost:3000/api/graphql";

const link = createHttpLink({
  fetch, // Switches between unfetch & node-fetch for client & server.
  uri: GRAPHQL_URL,
});

// Export a HOC from next-with-apollo
// Docs: https://www.npmjs.com/package/next-with-apollo
export default withApollo(
  ({ initialState }) =>
    // @ts-ignore
    new ApolloClient({
      link: link,
      cache: new InMemoryCache().restore(initialState || {}),
    })
);
