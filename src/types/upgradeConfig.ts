interface NodeUpgrade {
	isUnlocked: boolean;
}

export interface SkillUpgrade {
	current: number;
	target: number;
	node1: NodeUpgrade;
	node2: NodeUpgrade;
}

export interface UpgradeConfig {
	name: string | null;
	type: "Character" | "Weapon";
	level: {
		current: string | null;
		target: string | null;
	};
	skill?: SkillUpgrade;
	ult?: SkillUpgrade;
	passive?: SkillUpgrade;
}

export interface CharacterUpgrade extends UpgradeConfig {
	skill: SkillUpgrade;
	ult: SkillUpgrade;
	passive: SkillUpgrade;
	type: "Character";
}

export interface WeaponUpgrade extends UpgradeConfig {
	type: "Weapon";
}
