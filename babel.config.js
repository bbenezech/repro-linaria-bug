module.exports = function (api) {
  api.cache(true);

  return {
    presets: [
      "@babel/react", // compile JSX
    ],
    plugins: [],
  };
};
