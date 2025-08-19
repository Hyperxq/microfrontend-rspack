import { createModuleFederationConfig } from '@module-federation/rsbuild-plugin';

export default createModuleFederationConfig({
  name: 'UIComponents',
  exposes: {
    
  },
  filename: 'ui-components.js',
  shared: ['react', 'react-dom'],
});
