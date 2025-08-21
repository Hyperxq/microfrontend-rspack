import { createModuleFederationConfig } from '@module-federation/rsbuild-plugin';

export default createModuleFederationConfig({
  name: "Features",
  filename: "features.js",
  exposes: {
    "./Features": "./src/Features.tsx",
  },
  shared: {
    react: {
      singleton: true,
      requiredVersion: false,
      eager:true,
    },
    "react-dom": {
      singleton: true,
      requiredVersion: false,
      eager:true
    },
  }
});