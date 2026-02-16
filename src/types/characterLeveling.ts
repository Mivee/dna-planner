export interface CharacterLevelingMaterial {
	level: string; // Using string for levels like "20,1"
	exp: number;
	coins: {
		groupA: number;
		groupB: number;
	};
	ascensionMaterials: {
		T1_Green: number;
		T2_Blue: number;
		T3_Purple: number;
	};
	forgingMaterials: {
		T1_Green: number;
		T2_Blue: number;
	};
}
