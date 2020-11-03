// pages/api/graphql.ts
import { ApolloServer, gql } from "apollo-server-micro";

export const config = {
  api: {
    bodyParser: false,
  },
};

const typeDefs = gql`
  type Query {
    users: [User!]!
    items(type: String, map: String, chart: String): [Item!]!
  }

  type User {
    id: Int!
    firstName: String
  }

  type Map {
    place: String
    description: String
  }

  type Item {
    name: String
    type: String
    chart: [String]
    maps: [Map]
  }
`;

const items = [
  {
    name: "レタス",
    type: "food",
    charts: ["1-1"],
    maps: [
      {
        place: "cresta",
        description: "入り口付近の畑を調べるとレタスを3つ入手",
      },
    ],
  },
];

const resolvers = {
  Query: {
    users() {
      return [{ firstName: "Nextjs" }];
    },
    items(obj, args) {
      if (args.type) {
        return items.filter((item) => item.type === args.type);
      }

      if (args.chart) {
        return items.filter((item) => item.charts.includes(args.chart));
      }

      if (args.map) {
        return items.filter((item) =>
          item.maps.some((map) => map.place === args.map)
        );
      }
    },
  },
};

const apolloServer = new ApolloServer({ typeDefs, resolvers });

export default apolloServer.createHandler({ path: "/api/graphql" });
