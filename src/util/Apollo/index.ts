import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import withApollo from "next-with-apollo";
import fetch from "isomorphic-unfetch";

// Update the GraphQL endpoint to any instance of GraphQL that you like
const uri =
  process.env.ENV == "development"
    ? "http://localhost:3000/api/graphql"
    : "https://magicgummies.vercel.app/api/graphql";

const link = createHttpLink({
  fetch, // Switches between unfetch & node-fetch for client & server.
  uri,
});

// Export a HOC from next-with-apollo
// Docs: https://www.npmjs.com/package/next-with-apollo
export default withApollo(
  ({ initialState }) =>
    // @ts-ignore
    new ApolloClient({
      link: link,
      cache: new InMemoryCache().restore(initialState || {}),
      ssrForceFetchDelay: 100,
      defaultOptions: {
        watchQuery: {
          fetchPolicy: "cache-and-network",
        },
      },
    })
);
