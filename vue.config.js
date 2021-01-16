const path = require("path");
const glob = require("glob-all");
const PurgecssPlugin = require("purgecss-webpack-plugin");

module.exports = {
  publicPath:
    process.env.NODE_ENV === "production" ? "/ai-dataset-video/" : "/",
  pages: {
    index: {
      entry: "src/main.js",
      template: "public/index.html",
      filename: "index.html",
      title: "AI Singapore",
    },
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./"),
        "@c": path.resolve(__dirname, "src/components"),
        "@C": path.resolve(__dirname, "src/containers"),
        "@img": path.resolve(__dirname, "src/assets/images"),
        "@constants": path.resolve(__dirname, "src/constants"),
      },
    },
    plugins: [
      new PurgecssPlugin({
        paths: glob.sync([
          path.join(__dirname, "src/index.html"),
          path.join(__dirname, "src/**/*.vue"),
          path.join(__dirname, "src/**/*.js"),
        ]),
        safelist: [
          /-(leave|enter|appear)(|-(to|from|active))$/,
          /^(?!(|.*?:)cursor-move).+-move$/,
          /^router-link(|-exact)-active$/,
          /data-v-.*/,
          /body*/,
        ],
        extractors: [
          {
            extractor: (content) => {
              return (
                content
                  .replace(/<style[^]+?<\/style>/gi, "")
                  .match(/[A-Za-z0-9-_/:]*[A-Za-z0-9-_/]+/g) || []
              );
            },
            extensions: ["html", "vue", "js"],
          },
        ],
      }),
    ],
  },
};
