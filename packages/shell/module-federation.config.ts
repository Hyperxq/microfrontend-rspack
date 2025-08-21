import type { moduleFederationPlugin } from "@module-federation/enhanced";
import { createModuleFederationConfig } from "@module-federation/rsbuild-plugin";

export default createModuleFederationConfig({
	name: "host",
	remotes: {
		Features: "Features@http://localhost:3002/features.js",
		Footer: "footer@http://localhost:3003/footer.js",
		Hero: "Hero@http://localhost:3004/hero.js",
		Pricing: "pricing@http://localhost:3005/pricing.js",
		Testimonials: "testimonials@http://localhost:3006/testimonials.js",
	},
	dts: {
		consumeTypes: {
			remoteTypeUrls: async () => {
				return await new Promise<moduleFederationPlugin.RemoteTypeUrls>(
					(resolve) => {
						setTimeout(() => {
							resolve({
								Features: {
									alias: "Features",
									api: "http://localhost:3002/@mf-types.d.ts",
									zip: "http://localhost:3002/@mf-types.zip",
								},
								Footer: {
									alias: "Footer",
									api: "http://localhost:3003/@mf-types.d.ts",
									zip: "http://localhost:3003/@mf-types.zip",
								},
								Hero: {
									alias: "Hero",
									api: "http://localhost:3004/@mf-types.d.ts",
									zip: "http://localhost:3004/@mf-types.zip",
								},
								Pricing: {
									alias: "Pricing",
									api: "http://localhost:3005/@mf-types.d.ts",
									zip: "http://localhost:3005/@mf-types.zip",
								},
								Testimonials: {
									alias: "Testimonials",
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
