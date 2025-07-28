import { createModuleFederationConfig } from '@module-federation/rsbuild-plugin';

export default createModuleFederationConfig({
  name: 'UIComponents',
  exposes: {
    './Button': './src/Atoms/Button',
  },
  filename: 'ui-components.js',
  shared: ['react', 'react-dom'],
});
