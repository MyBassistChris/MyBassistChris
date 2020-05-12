module.exports = {
  env: {
    dbUrl: "mongodb+srv://Admin:guitar66@basstabs-gf3pp.mongodb.net/test?retryWrites=true&w=majority",
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
    ],
  },
  target: 'serverless', // <- add here
  webpack: (config, options) => {
    return config
  }
}