interface Crypto {
	randomUUID: () => string;
}

declare global {
	interface Crypto {
		randomUUID: () => string;
	}
}

declare module "@alikia/random-uuid" {
	export function randomUUID(): string;
}
