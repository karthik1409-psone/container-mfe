const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");
const share = mf.share;

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
  path.join(__dirname, 'tsconfig.json'),
  [/* mapped paths to share */]);

module.exports = {
  output: {
    uniqueName: "containerMfe",
    publicPath: "auto"
  },
  optimization: {
    runtimeChunk: false
  },   
  resolve: {
    alias: {
      ...sharedMappings.getAliases(),
    }
  },
  plugins: [
    new ModuleFederationPlugin({
        remotes: {
            "productlistmfe": "productlistmfeapp@http://localhost:8888/remoteEntry.js",
            // "productlistmfe": "productlistmfeapp@http://40.117.224.87:8888/remoteEntry.js"

            "cartmfe": "cartmfeapp@http://localhost:7777/remoteEntry.js",
            "paymentmfe": "paymentmfeapp@http://localhost:1111/remoteEntry.js"
        },

        shared: share({
          "@angular/core": { singleton: true, strictVersion: true, requiredVersion: 'auto' }, 
          "@angular/common": { singleton: true, strictVersion: true, requiredVersion: 'auto' }, 
          "@angular/common/http": { singleton: true, strictVersion: true, requiredVersion: 'auto' }, 
          "@angular/router": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
          "karthikhellomodule": { singleton: true, requiredVersion: 'auto' }
        })
    }),
    sharedMappings.getPlugin()
  ]
};