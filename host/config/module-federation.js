const { dependencies } = require("../package.json");
const { FederatedTypesPlugin } = require("@module-federation/typescript");

const deps = {};
Object.keys(dependencies).forEach((element) => {
  deps[element] = {
    requiredVersion: dependencies[element],
    // eager: true,
  };
});

const {
  NodeFederationPlugin,
  StreamingTargetPlugin,
} = require("@module-federation/node");

const clientFederationConfig = {
  name: "host",
  filename: "remoteEntry.js",
  remotes: {
    "@remote": `remote@${process.env.REMOTE_URL}/static/remoteEntry.js`,
  },
  // shared: { ...deps, react: { eager: true }, "react-dom": { eager: true } },
  // shared: ["react", "react-dom"],
};

module.exports = {
  client: new FederatedTypesPlugin({
    federationConfig: clientFederationConfig,
    disableDownloadingRemoteTypes: true,
  }),

  server: [
    new NodeFederationPlugin({
      name: "host",
      library: { type: "commonjs-module" },
      filename: "remoteEntry.js",
      remotes: {
        "@remote": `remote@${process.env.REMOTE_URL}/server/remoteEntry.js`,
      },
      // shared: { ...deps, react: { eager: true }, "react-dom": { eager: true } },
      // shared: ["react", "react-dom"],
    }),
    new StreamingTargetPlugin({
      name: "host",
      library: { type: "commonjs-module" },
      remotes: {
        "@remote": `remote@${process.env.REMOTE_URL}/server/remoteEntry.js`,
      },
    }),
  ],
};
