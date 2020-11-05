import { gql } from "apollo-server-micro";

const typeDefs = gql`
  type Query {
    items(type: String, map: String, chart: String): [Item!]!
  }

  type Item {
    name: String
    type: String
    chart: [String]
    maps: [Map]
  }

  type Map {
    place: String
    description: String
  }
`;

export default typeDefs;
