import { pluginModuleFederation } from "@module-federation/rsbuild-plugin";
import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { pluginSass } from "@rsbuild/plugin-sass";
import mfConfig from "./module-federation.config";

export default defineConfig({
	server: {
		port: 3002,
		compress: true,
		cors: {
			origin: [
				/^https?:\/\/(?:(?:[^:]+\.)?localhost|127\.0\.0\.1|\[::1\])(?::\d+)?$/,
			]
		}
	},
	dev: {
		liveReload: true,
	},
	tools: {
		htmlPlugin: false,
	},
	source: {
		entry: {
			app: "./src/Features.tsx",
		},
	},
	output: {
		manifest: true,
		cleanDistPath: true,
	},
	resolve: {
		extensions: ["...", ".ts", ".tsx", ".jsx"],
	},
	plugins: [pluginModuleFederation(mfConfig), pluginReact(), pluginSass()],
});
