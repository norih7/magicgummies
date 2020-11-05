const withMdxEnhanced = require("next-mdx-enhanced");

// module.exports = {
//   webpack: (config) => {
//     config.node = {
//       fs: "empty",
//       child_process: "empty",
//       net: "empty",
//       dns: "empty",
//       tls: "empty",
//     };
//     return config;
//   },
//   pageExtensions: ["mdx", "jsx", "js", "ts", "tsx"],
// };

// module.exports = withMDX({
//   webpack: (config) => {
//     config.node = {
//       fs: "empty",
//       child_process: "empty",
//       net: "empty",
//       dns: "empty",
//       tls: "empty",
//     };
//     return config;
//   },
//   pageExtensions: ["mdx", "jsx", "js", "ts", "tsx"],
// });

module.exports = withMdxEnhanced({
  layoutPath: "src/components/templates/Layout",
  defaultLayout: true,
  fileExtensions: ["mdx"],
  remarkPlugins: [],
  rehypePlugins: [],
  usesSrc: true,
  extendFrontMatter: {
    process: (mdxContent, frontMatter) => {},
    phase: "prebuild|loader|both",
  },
  reExportDataFetching: false,
})({
  webpack: (config) => {
    config.node = {
      fs: "empty",
      child_process: "empty",
      net: "empty",
      dns: "empty",
      tls: "empty",
    };
    return config;
  },
  serverRuntimeConfig: {
    PROJECT_ROOT: __dirname,
  },
});
