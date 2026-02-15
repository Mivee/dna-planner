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
	type: "Character" | "Weapon" | "DaemonWedge";
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

export interface DaemonWedgeUpgradeConfig extends BaseUpgradeConfig {
	type: "DaemonWedge";
	initialLevel: number; // 0-9
	targetLevel: number; // 1-10
	quantity?: number; // Optional for backward compatibility, defaults to 1
}
