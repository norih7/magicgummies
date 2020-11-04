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

export default resolvers;
