import { createModuleFederationConfig } from '@module-federation/rsbuild-plugin';

export default createModuleFederationConfig({
  name: "pricing",
  filename: "pricing.js",
  exposes: {
    "./pricing": "./src/App.tsx",
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