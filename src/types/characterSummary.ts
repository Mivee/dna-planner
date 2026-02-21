export interface CharacterBuildSummary {
	character: {
		ascensionMaterials: {
			T1_Green: number;
			T2_Blue: number;
			T3_Purple: number;
		};

		forgingMaterials: {
			T1Green: number;
			T2Blue: number;
		};
	};
	skills: {
		forgingMaterials: {
			T1Green: number;
			T2Blue: number;
			T3Purple: number;
			T4Gold: number;
		};
	};

	coins: number;
	exp?: number;

	lunoMomento: number;
	nocturnalEcho: number;
	twilightTread: number;
}
