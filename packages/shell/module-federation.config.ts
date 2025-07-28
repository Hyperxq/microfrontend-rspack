import { createModuleFederationConfig } from "@module-federation/rsbuild-plugin";

export default createModuleFederationConfig({
	name: "host",
	remotes: {
		"@ui-components": "UIComponents@http://localhost:3002/ui-components.js",
	},
	shared: {
		react: {
			singleton: true,
		},
		"react-dom": {
			singleton: true,
		},
	},
});
