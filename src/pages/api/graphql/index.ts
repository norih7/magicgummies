// pages/api/graphql.ts
import { ApolloServer } from "apollo-server-micro";
import { importSchema } from "graphql-import";
import resolvers from "./resolvers";
import path from "path";
import getConfig from "next/config";
const { serverRuntimeConfig } = getConfig();
console.log("!!!", serverRuntimeConfig);

export const config = {
  api: {
    bodyParser: false,
  },
};

const apolloServer = new ApolloServer({
  typeDefs: importSchema(
    path.join(
      serverRuntimeConfig.PROJECT_ROOT,
      "./src/graphql/typeDefs/schema.graphql"
    )
  ),
  resolvers,
});

export default apolloServer.createHandler({ path: "/api/graphql" });
