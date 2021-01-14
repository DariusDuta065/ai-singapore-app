const path = require("path");

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
  },
};
