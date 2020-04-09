const path = require(`path`);

module.exports = {
  mode: `development`,
  entry: `./src/main.js`,
  output: {
    filename: `bundle.js`,
    path: path.join(`C:/Users/raced/OneDrive/Документы/GitHub/914317-cinemaddict-11/`, `public`)
  },
  devtool: `source-map`,
  devServer: {
    contentBase: path.join(`C:/Users/raced/OneDrive/Документы/GitHub/914317-cinemaddict-11/`, `public`),
    watchContentBase: true
  }
};
