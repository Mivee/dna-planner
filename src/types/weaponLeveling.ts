export interface WeaponLevelingMaterial {
	level: string; // Using string because some levels have decimal (e.g., "20,1")
	exp: number;
	coins: number;
	forgingMaterials: {
		T1_Green: number;
		T2_Blue: number;
	};
	ascensionMaterials: {
		primary: {
			T1_Green: number;
			T2_Blue: number;
			T3_Purple: number;
		};
		secondary: {
			T1_Green: number;
			T2_Blue: number;
			T3_Purple: number;
		};
	};
}
