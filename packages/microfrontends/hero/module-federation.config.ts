import { createModuleFederationConfig } from '@module-federation/rsbuild-plugin';

export default createModuleFederationConfig({
  name: "hero",
  filename: "hero.js",
  exposes: {
    "./hero": "./src/App.tsx",
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