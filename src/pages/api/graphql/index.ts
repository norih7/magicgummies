// pages/api/graphql.ts
import { ApolloServer } from "apollo-server-micro";
import { importSchema } from "graphql-import";
import resolvers from "./resolvers";
import path from "path";

export const config = {
  api: {
    bodyParser: false,
  },
};

const apolloServer = new ApolloServer({
  typeDefs: importSchema("graphql/typeDefs/schema.graphql"),
  resolvers,
});

export default apolloServer.createHandler({ path: "/api/graphql" });
