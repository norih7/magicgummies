// pages/api/graphql.ts
import { ApolloServer } from "apollo-server-micro";
import { importSchema } from "graphql-import";
import resolvers from "./resolvers";
import typeDefs from "./schema";

export const config = {
  api: {
    bodyParser: false,
  },
};

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
});

export default apolloServer.createHandler({ path: "/api/graphql" });
