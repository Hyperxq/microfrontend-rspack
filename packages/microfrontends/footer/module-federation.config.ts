import { createModuleFederationConfig } from '@module-federation/rsbuild-plugin';

export default createModuleFederationConfig({
  name: "footer",
  filename: "footer.js",
  exposes: {
    "./footer": "./src/App.tsx",
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