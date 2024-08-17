interface Crypto {
	randomUUID: () => string;
}

declare global {
	interface Crypto {
		randomUUID: () => string;
	}
}

declare module "@alikia2x/random-uuid" {
	export function randomUUID(): string;
}
