const { dependencies } = require('../package.json');
const { FederatedTypesPlugin } = require('@module-federation/typescript');

const { NodeFederationPlugin, StreamingTargetPlugin } = require('@module-federation/node');
const { join } = require('path');

// const shared = {
//   '@module-federation/node': { requiredVersion: '^0.10.2', eager: true, singleton: true },
//   '@module-federation/typescript': { requiredVersion: '^2.1.3', eager: true, singleton: true },
//   '@types/react-helmet': { requiredVersion: '^6.1.6', eager: true, singleton: true },
//   dotenv: { requiredVersion: '^16.0.3', eager: true, singleton: true },
//   react: { requiredVersion: '^18.2.0', eager: true, singleton: true },
//   'react-dom': { requiredVersion: '^18.2.0', eager: true, singleton: true },
//   'react-helmet': { requiredVersion: '^6.1.0', eager: true, singleton: true },
// };

const shared = {};
Object.keys(dependencies).forEach((element) => {
  shared[element] = {
    requiredVersion: dependencies[element],
    // eager: true,
  };
});

const rootDir = `${join(__dirname, '..')}/src`;
const clientFederationConfig = {
  name: 'remote',
  filename: 'remoteEntry.js',
  exposes: {
    './App': `${rootDir}/App.js`,
  },
  shared: {
    ...dependencies,
    react: { eager: true },
    'react-dom': { eager: true },
    'react-router-dom': { eager: true },
  },
};

module.exports = {
  client: new FederatedTypesPlugin({
    federationConfig: clientFederationConfig,
    disableDownloadingRemoteTypes: false,
  }),

  server: [
    new NodeFederationPlugin({
      name: 'remote',
      library: { type: 'commonjs-module' },
      filename: 'remoteEntry.js',
      remotes: {},
      exposes: {
        './App': `${rootDir}/App.js`,
      },
      shared: {
        ...dependencies,
        react: { eager: true },
        'react-dom': { eager: true },
        'react-router-dom': { eager: true },
      },
    }),
    new StreamingTargetPlugin({
      name: 'remote',
      library: { type: 'commonjs-module' },
      remotes: {},
    }),
  ],
};
