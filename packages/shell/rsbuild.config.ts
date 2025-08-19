import { pluginModuleFederation } from "@module-federation/rsbuild-plugin";
import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import mfConfig from "./module-federation.config";

export default defineConfig({
	server: {
		port: 3001,
	},
	source: {
		entry: {
			index: "./src/index.tsx",
		},
	},
	dev: {
		liveReload: true,
	},
	output: {
		distPath: {
			root: "../../dist/shell",
		},
	},
	plugins: [pluginReact(), pluginModuleFederation(mfConfig)],
	tools: {
		postcss: {
			postcssOptions: {
				plugins: [require("@tailwindcss/postcss")()],
			},
		},
	},
});
