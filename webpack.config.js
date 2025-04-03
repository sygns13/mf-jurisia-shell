const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({
  //remotes: {
    //"mf_jurisia_consultaia": "http://localhost:4201/remoteEntry.js",
  //},

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: "auto" }),
  }
});