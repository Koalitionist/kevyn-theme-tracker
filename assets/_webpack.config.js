const webpack = require("webpack");
const path = require("path");
const CompressionPlugin = require("compression-webpack-plugin");

module.exports = (env, argv) => {
  return {
    name: "client",
    target: "web",
    context: `${__dirname}`,
    entry: {
      theme: ["./theme.tsx"],
      editor: ["./editor.tsx"],
    },
    output: {
      publicPath: "",
      filename: "[name].js",
      path: path.resolve(__dirname),
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js", ".jsx"],
      alias: {
        react: "preact/compat",
        "react-dom": "preact/compat",
      },
      modules: [
        path.resolve("./"),
        path.resolve("./node_modules"),
        path.resolve("./../node_modules"),
        path.resolve("node_modules"),
      ],
    },
    mode: "production",
    plugins: [
      /*new CompressionPlugin({
        algorithm: "gzip",
      }),*/
      /*new BundleAnalyzerPlugin({
        generateStatsFile: true,
      }),*/
    ],
    module: {
      rules: [
        { test: /\.js$/, loader: "source-map-loader", enforce: "pre" },
        {
          test: /\.tsx?$/,
          loader: "ts-loader",
          exclude: /node_modules/,
          options: {
            configFile: "tsconfig.json",
          },
        },
        {
          test: /\.scss$/,
          use: [
            {
              loader: "style-loader",
            },
            {
              loader: "css-loader",
            },
            {
              loader: "sass-loader",
            },
          ],
          exclude: /node_modules/,
        },
        {
          test: /\.css$/,
          use: [
            {
              loader: "style-loader",
            },
            {
              loader: "css-loader",
            },
            {
              loader: "postcss-loader",
            },
          ],
          exclude: /node_modules/,
        },
      ],
    },
  };
};
