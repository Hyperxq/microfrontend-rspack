import type { moduleFederationPlugin } from "@module-federation/enhanced";
import { createModuleFederationConfig } from "@module-federation/rsbuild-plugin";

export default createModuleFederationConfig({
	name: "host",
	remotes: {
		features: "features@http://localhost:3002/features.js",
		footer: "footer@http://localhost:3003/footer.js",
		hero: "hero@http://localhost:3004/hero.js",
		pricing: "pricing@http://localhost:3005/pricing.js",
		testimonials: "testimonials@http://localhost:3006/testimonials.js",
	},
	dts: {
		consumeTypes: {
			remoteTypeUrls: async () => {
				return await new Promise<moduleFederationPlugin.RemoteTypeUrls>(
					(resolve) => {
						setTimeout(() => {
							resolve({
								features: {
									alias: "features",
									api: "http://localhost:3002/@mf-types.d.ts",
									zip: "http://localhost:3002/@mf-types.zip",
								},
								footer: {
									alias: "footer",
									api: "http://localhost:3003/@mf-types.d.ts",
									zip: "http://localhost:3003/@mf-types.zip",
								},
								hero: {
									alias: "hero",
									api: "http://localhost:3004/@mf-types.d.ts",
									zip: "http://localhost:3004/@mf-types.zip",
								},
								pricing: {
									alias: "pricing",
									api: "http://localhost:3005/@mf-types.d.ts",
									zip: "http://localhost:3005/@mf-types.zip",
								},
								testimonials: {
									alias: "testimonials",
									api: "http://localhost:3006/@mf-types.d.ts",
									zip: "http://localhost:3006/@mf-types.zip",
								},

							});
						}, 1000);
					},
				);
			},
		},
	},
	shared: {
		react: {
			singleton: true,
      eager:true
		},
		"react-dom": {
			singleton: true,
      eager:true
		},
	},
});
