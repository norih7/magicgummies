import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
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

const client = new ApolloClient({
  link: link,
  cache: new InMemoryCache(),
});

export default client;
