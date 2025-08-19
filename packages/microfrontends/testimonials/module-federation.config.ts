import { createModuleFederationConfig } from '@module-federation/rsbuild-plugin';

export default createModuleFederationConfig({
  name: "testimonials",
  filename: "testimonials.js",
  exposes: {
    "./testimonials": "./src/App.tsx",
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