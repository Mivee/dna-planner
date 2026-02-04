import type { LevelRange } from "./range";

interface SkillNodeState {
	isUnlocked: boolean;
}

export interface SkillUpgradeConfig {
	current: number;
	target: number;
	node1: SkillNodeState;
	node2: SkillNodeState;
}

export interface BaseUpgradeConfig {
	name: string | null;
	type: "Character" | "Weapon";
	level: LevelRange<string>;
	skill?: SkillUpgradeConfig;
	ult?: SkillUpgradeConfig;
	passive?: SkillUpgradeConfig;
}

export interface CharacterUpgradeConfig extends BaseUpgradeConfig {
	skill: SkillUpgradeConfig;
	ult: SkillUpgradeConfig;
	passive: SkillUpgradeConfig;
	type: "Character";
}

export interface WeaponUpgradeConfig extends BaseUpgradeConfig {
	type: "Weapon";
}
