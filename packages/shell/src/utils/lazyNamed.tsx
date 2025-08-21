import { type ComponentType, lazy } from "react";

export function lazyNamed<P>(
	loader: () => Promise<Record<string, unknown>>,
	key: string,
) {
	return lazy(async () => {
		const mod = await loader();
		const Comp = (mod as Record<string, unknown>)[key] as ComponentType<P>;
		return { default: Comp };
	});
}
