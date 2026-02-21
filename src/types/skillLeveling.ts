import type { LevelingMaterial } from "./levelingMaterial";

// Specific types for skills
interface SkillCurrencies {
	NocturnalEcho: number;
	TwilightTread: number;
}

interface SkillUpgradeMaterials {
	T1_Green: number;
	T2_Blue: number;
	T3_Purple: number;
}

export type SkillLevelingMaterial = LevelingMaterial<
	SkillUpgradeMaterials,
	SkillCurrencies
> & {
	coins: { default: number };
	node: number;
};
