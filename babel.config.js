const plugins = [];

if (process.env.NODE_ENV !== "production") {
  // plugins.push("react-refresh/`babel`");
  plugins.push("babel-plugin-styled-components");
  plugins.push("@babel/plugin-proposal-class-properties");
  plugins.push("@babel/plugin-transform-runtime");
}

module.exports = {
  presets: [
    "@babel/preset-env",
    ["@babel/preset-react", { runtime: "automatic" }],
  ],
  plugins: plugins,
};