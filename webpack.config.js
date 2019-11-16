const path = require("path");

const src_dir = path.resolve(__dirname, "src");
const out_dir = path.resolve(__dirname, "public");
const mode = process.env.ENV || "development";

const babelLoader = {
  test: /\.(jsx?|tsx?)$/,
  exclude: /(node_modules)/,
  use: {
    loader: "babel-loader",
    options: {
      presets: [
        "@babel/preset-env",
        "@babel/preset-react",
        "@babel/preset-typescript"
      ],
      plugins: [
        "@babel/plugin-proposal-function-sent",
        "@babel/plugin-proposal-class-properties",
        "@babel/plugin-proposal-object-rest-spread",
        "@babel/plugin-proposal-export-namespace-from",
        "@babel/plugin-proposal-numeric-separator",
        "@babel/plugin-proposal-throw-expressions",
        "@babel/plugin-syntax-dynamic-import",
        "@babel/plugin-syntax-import-meta",
        "@babel/plugin-proposal-json-strings"
      ]
    }
  }
}

const serverConfig = {
  target: "node",
  node: {
    __dirname: false
  },
  mode: mode,
  entry: {
    server: path.join(src_dir, "server/index.ts")
  },
  output: {
    filename: "[name].js",
    path: out_dir
  },
  devtool: "source-map",
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"]
  },
  externals: [{ express: 'commonjs express' }],
  module: {
    rules: [
      babelLoader
    ]
  }
}

const clientConfig = {
  target: "web",
  mode: mode,
  entry: {
    client: path.join(src_dir, "client/index.tsx")
  },
  output: {
    filename: "[name].js",
    path: out_dir
  },
  devtool: "source-map",
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"]
  },
  module: {
    rules: [
      babelLoader
    ]
  }
}

module.exports = [serverConfig, clientConfig];
