export interface MaterialTotals {
	coins: number;
	carmineGlobules: number;
	exp: { characters: number; weapons: number };
	ascension: { green: number; blue: number; purple: number };
	forging: { green: number; blue: number; purple: number };
	ascensionDetails: Map<string, { tier: string; quantity: number }>;
	forgingDetails: Map<string, { tier: string; quantity: number }>;
	blueprintDetails: Map<string, { quantity: number }>;
	demonWedgeMaterials: Map<string, { quantity: number }>;
}

export function createEmptyTotals(): MaterialTotals {
	return {
		coins: 0,
		carmineGlobules: 0,
		exp: { characters: 0, weapons: 0 },
		ascension: { green: 0, blue: 0, purple: 0 },
		forging: { green: 0, blue: 0, purple: 0 },
		ascensionDetails: new Map(),
		forgingDetails: new Map(),
		blueprintDetails: new Map(),
		demonWedgeMaterials: new Map(),
	};
}

export function addToMap(
	map: Map<string, { tier: string; quantity: number }>,
	key: string,
	tier: string,
	quantity: number
) {
	const existing = map.get(key);
	map.set(key, { tier, quantity: (existing?.quantity ?? 0) + quantity });
}
