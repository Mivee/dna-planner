// Generic interface for leveling materials
export interface LevelingMaterial<TAscension = unknown, TForging = unknown> {
	level?: string; // Using string to support decimal levels like "20,1"
	exp?: number;
	node?: number;
	coins?: {
		[key: string]: number; // Allows "groupA", "groupB", or just a single coin type
	};
	forgingMaterials: TForging;
	ascensionMaterials: TAscension;
}
