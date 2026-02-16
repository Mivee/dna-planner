// Cost data for upgrading skills at each level
export interface SkillLevelCost {
	level: number;
	coinsGroupA: number;
	coinsGroupB: number;
	lunoMomento: number;
	nocturnalEcho: number;
	twilightTread: number;
	forgingMaterials: {
		T1Green: number;
		T2Blue: number;
		T3Purple: number;
		T4Gold: number;
	};
}
