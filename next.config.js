module.exports = {
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: 'html-loader',
        options: {
          // Disables attributes processing
          attributes: false,
        },
      },
    ],
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
}