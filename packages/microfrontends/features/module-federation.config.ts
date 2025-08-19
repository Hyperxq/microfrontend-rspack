import { createModuleFederationConfig } from '@module-federation/rsbuild-plugin';

export default createModuleFederationConfig({
  name: "features",
  filename: "features.js",
  exposes: {
    "./features": "./src/App.tsx",
  },
  shared: {
    react: {
      singleton: true,
      requiredVersion: false,
      eager:true
    },
    "react-dom": {
      singleton: true,
      requiredVersion: false,
      eager:true
    },
  }
});