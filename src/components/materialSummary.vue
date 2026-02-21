<template>
	<div
		class="bg-secondary border border-white/10 rounded-lg overflow-hidden sticky top-4 h-fit">
		<div
			class="p-4 bg-linear-to-br from-accent/10 to-info/10 border-b border-white/10">
			<h3
				class="text-lg font-bold text-on-primary flex items-center gap-2 m-0">
				<i class="fas fa-list-check text-accent"></i>
				Total Materials
				<span
					v-if="plannerMode === 'Inventory'"
					class="ml-auto text-xs font-medium text-info bg-info/10 px-2 py-1 rounded border border-info/30">
					<i class="fas fa-box-archive mr-1"></i>
					Adjusted
				</span>
			</h3>
		</div>

		<div class="p-4 flex flex-col gap-6">
			<div class="flex flex-col gap-2">
				<h4
					class="text-xs font-semibold text-on-secondary uppercase tracking-wider m-0 mb-2">
					Currency
				</h4>
				<div
					class="flex items-center gap-3 p-2 bg-secondary/3 rounded-md hover:bg-secondary/5 transition-colors">
					<i class="fas fa-coins w-5 text-center text-accent"></i>
					<span class="flex-1 text-sm text-on-primary">Coins</span>
					<span class="font-bold text-accent text-sm">
						{{
							getAdjustedQuantity(
								"Coins",
								totalMaterials.coins
							).toLocaleString()
						}}
					</span>
				</div>
				<div
					v-if="totalMaterials.carmineGlobules > 0"
					class="flex items-center gap-3 p-2 bg-secondary/3 rounded-md hover:bg-secondary/5 transition-colors">
					<i class="fas fa-gem w-5 text-center text-purple-400"></i>
					<span class="flex-1 text-sm text-on-primary">
						Carmine Globules
					</span>
					<span class="font-bold text-purple-400 text-sm">
						{{
							getAdjustedQuantity(
								"Carmine Globule",
								totalMaterials.carmineGlobules
							).toLocaleString()
						}}
					</span>
				</div>
				<div
					class="flex items-center gap-3 p-2 bg-secondary/3 rounded-md hover:bg-secondary/5 transition-colors">
					<i class="fas fa-star w-5 text-center text-accent"></i>
					<span class="flex-1 text-sm text-on-primary">
						Character XP
					</span>
					<span class="font-bold text-accent text-sm">
						{{
							getAdjustedQuantity(
								"XP",
								totalMaterials.exp.characters
							).toLocaleString()
						}}
					</span>
				</div>
				<div
					class="flex items-center gap-3 p-2 bg-secondary/3 rounded-md hover:bg-secondary/5 transition-colors">
					<i class="fas fa-star w-5 text-center text-accent"></i>
					<span class="flex-1 text-sm text-on-primary">
						Weapon XP
					</span>
					<span class="font-bold text-accent text-sm">
						{{
							getAdjustedQuantity(
								"XP",
								totalMaterials.exp.weapons
							).toLocaleString()
						}}
					</span>
				</div>
			</div>

			<div class="flex flex-col gap-2" v-if="hasAscensionMaterials">
				<h4
					class="text-xs font-semibold text-on-secondary uppercase tracking-wider m-0 mb-2">
					Ascension Materials
				</h4>
				<template
					v-for="(material, key) in ascensionMaterialsList"
					:key="key">
					<div
						class="flex items-center gap-3 p-2 bg-white/3 rounded-md hover:bg-white/5 transition-colors">
						<div
							class="w-5 h-5 rounded shrink-0"
							:class="material.colorClass"></div>
						<span class="flex-1 text-sm text-on-primary">
							{{ material.name }}
						</span>
						<span class="font-bold text-accent text-sm">
							{{ material.adjustedQuantity }}
						</span>
					</div>
				</template>
			</div>

			<div class="flex flex-col gap-2" v-if="hasForgingMaterials">
				<h4
					class="text-xs font-semibold text-on-secondary uppercase tracking-wider m-0 mb-2">
					Forging Materials
				</h4>
				<template
					v-for="(material, key) in forgingMaterialsList"
					:key="key">
					<div
						class="flex items-center gap-3 p-2 bg-secondary/3 rounded-md hover:bg-secondary/5 transition-colors">
						<div
							class="w-5 h-5 rounded shrink-0"
							:class="material.colorClass"></div>
						<span class="flex-1 text-sm text-on-primary">
							{{ material.name }}
						</span>
						<span class="font-bold text-accent text-sm">
							{{ material.adjustedQuantity }}
						</span>
					</div>
				</template>
			</div>

			<div class="flex flex-col gap-2" v-if="hasBlueprints">
				<h4
					class="text-xs font-semibold text-on-secondary uppercase tracking-wider m-0 mb-2">
					Blueprints
				</h4>
				<template v-for="(blueprint, key) in blueprintsList" :key="key">
					<div
						class="flex items-center gap-3 p-2 bg-secondary/3 rounded-md hover:bg-secondary/5 transition-colors">
						<i
							class="fas fa-scroll w-5 text-center"
							:class="blueprint.colorClass"></i>
						<span class="flex-1 text-sm text-on-primary">
							{{ blueprint.name }}
						</span>
						<span class="font-bold text-accent text-sm">
							{{ blueprint.adjustedQuantity }}
						</span>
					</div>
				</template>
			</div>

			<div class="flex flex-col gap-2" v-if="hasDaemonWedgeMaterials">
				<h4
					class="text-xs font-semibold text-on-secondary uppercase tracking-wider m-0 mb-2">
					Daemon Wedge Materials
				</h4>
				<template
					v-for="(material, key) in daemonWedgeMaterialsList"
					:key="key">
					<div
						class="flex items-center gap-3 p-2 bg-secondary/3 rounded-md hover:bg-secondary/5 transition-colors">
						<i class="fas fa-cube w-5 text-center text-accent"></i>
						<span class="flex-1 text-sm text-on-primary">
							{{ material.name }}
						</span>
						<span class="font-bold text-accent text-sm">
							{{ material.adjustedQuantity }}
						</span>
					</div>
				</template>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { storeToRefs } from "pinia";
import { useUiStore } from "../stores/ui";
import { useInventory } from "../stores/inventory";
import { useCharacter } from "../composeables/useCharacter";
import { useWeapon } from "../composeables/useWeapon";
import { useDaemonWedge } from "../composeables/useDaemonWedge";
import { characterLevelingMaterials } from "../definitions/characterAscension";
import { weaponLevelingMaterials } from "../definitions/weapon";
import {
	CharacterSkillLevels,
	skillTrack1Materials,
} from "../definitions/skillLeveling";
import { elementUpgradeMaterials } from "../definitions/character";
import type { CharacterLevelingMaterial } from "../types/characterLeveling";
import type { WeaponLevelingMaterial } from "../types/ascension";
import type { LevelRange } from "../types/range";
import type { SkillLevelCost } from "../types/skill";
import type { SkillLevelingMaterial } from "../types/skillLeveling";
import type { SkillUpgradeConfig } from "../types/upgradeConfig";

const uiStore = useUiStore();
const { characterConfigurations, weaponConfigurations, plannerMode } =
	storeToRefs(uiStore);
const inventoryStore = useInventory();

// Helper function to get adjusted quantity based on planner mode
function getAdjustedQuantity(
	materialName: string,
	neededAmount: number
): number {
	if (plannerMode.value === "Inventory") {
		const inventoryAmount = inventoryStore.getAmount(materialName);
		return Math.max(0, neededAmount - inventoryAmount);
	}
	return neededAmount;
}

interface MaterialDetail {
	name: string;
	quantity: number;
	adjustedQuantity: number;
	colorClass: string;
}

function getWeaponAscensionInventoryName(
	materialName: string,
	tier: "green" | "blue" | "purple"
): string {
	if (tier === "green") {
		return `Basic Weapon Component: ${materialName}`;
	}

	if (tier === "blue") {
		return `Intermediate Weapon Component: ${materialName}`;
	}

	return `Advanced Weapon Component: ${materialName}`;
}

const totalMaterials = computed(() => {
	const totals = {
		coins: 0,
		carmineGlobules: 0,
		exp: { characters: 0, weapons: 0 },
		ascension: { green: 0, blue: 0, purple: 0 },
		forging: { green: 0, blue: 0, purple: 0 },
		ascensionDetails: new Map<string, { tier: string; quantity: number }>(),
		forgingDetails: new Map<string, { tier: string; quantity: number }>(),
		blueprintDetails: new Map<string, { quantity: number }>(),
		daemonWedgeMaterials: new Map<string, { quantity: number }>(),
	};

	characterConfigurations.value.forEach((config) => {
		if (!config.name) return;

		try {
			const { buildSummary, character } = useCharacter(config.name);

			// Skip if character not found
			if (!character.value) return;

			// Get element materials for this character
			const elementMats = elementUpgradeMaterials.find(
				(m) => m.element === character.value?.element
			);

			// Calculate character ascension materials
			const start = characterLevelingMaterials.find(
				(mat) => mat.level == config.level.start
			);
			const end = characterLevelingMaterials.find(
				(mat) => mat.level == config.level.end
			);
			if (!start || !end) return;

			const characterAscensionMaterials = {
				start,
				end,
			} as LevelRange<CharacterLevelingMaterial>;

			// Calculate skill materials
			const skillMaterials = calculateSkillMaterials(config);

			// Get summary
			const summary = buildSummary(
				characterAscensionMaterials,
				skillMaterials
			);

			// Add to totals
			totals.coins += summary.coins || 0;
			totals.exp.characters += summary.exp || 0;
			totals.ascension.green +=
				summary.character.ascensionMaterials.T1_Green || 0;
			totals.ascension.blue +=
				summary.character.ascensionMaterials.T2_Blue || 0;
			totals.ascension.purple +=
				summary.character.ascensionMaterials.T3_Purple || 0;
			totals.forging.green +=
				summary.skills.forgingMaterials.T1Green || 0;
			totals.forging.blue += summary.skills.forgingMaterials.T2Blue || 0;
			totals.forging.purple +=
				summary.skills.forgingMaterials.T3Purple || 0;

			// Track material names for ascension materials
			if (
				elementMats &&
				summary.character.ascensionMaterials.T1_Green > 0
			) {
				const existing = totals.ascensionDetails.get(
					elementMats.ascensionMaterials.t1
				);
				totals.ascensionDetails.set(elementMats.ascensionMaterials.t1, {
					tier: "green",
					quantity:
						(existing?.quantity || 0) +
						summary.character.ascensionMaterials.T1_Green,
				});
			}
			if (
				elementMats &&
				summary.character.ascensionMaterials.T2_Blue > 0
			) {
				const existing = totals.ascensionDetails.get(
					elementMats.ascensionMaterials.t2
				);
				totals.ascensionDetails.set(elementMats.ascensionMaterials.t2, {
					tier: "blue",
					quantity:
						(existing?.quantity || 0) +
						summary.character.ascensionMaterials.T2_Blue,
				});
			}
			if (
				elementMats &&
				summary.character.ascensionMaterials.T3_Purple > 0
			) {
				const existing = totals.ascensionDetails.get(
					elementMats.ascensionMaterials.t3
				);
				totals.ascensionDetails.set(elementMats.ascensionMaterials.t3, {
					tier: "purple",
					quantity:
						(existing?.quantity || 0) +
						summary.character.ascensionMaterials.T3_Purple,
				});
			}

			// Track material names for forging materials
			if (elementMats && summary.skills.forgingMaterials.T1Green > 0) {
				const existing = totals.forgingDetails.get(
					elementMats.forgingMaterials.t1
				);
				totals.forgingDetails.set(elementMats.forgingMaterials.t1, {
					tier: "green",
					quantity:
						(existing?.quantity || 0) +
						summary.skills.forgingMaterials.T1Green,
				});
			}
			if (elementMats && summary.skills.forgingMaterials.T2Blue > 0) {
				const existing = totals.forgingDetails.get(
					elementMats.forgingMaterials.t2
				);
				totals.forgingDetails.set(elementMats.forgingMaterials.t2, {
					tier: "blue",
					quantity:
						(existing?.quantity || 0) +
						summary.skills.forgingMaterials.T2Blue,
				});
			}
			if (elementMats && summary.skills.forgingMaterials.T3Purple > 0) {
				const existing = totals.forgingDetails.get(
					elementMats.forgingMaterials.t3
				);
				totals.forgingDetails.set(elementMats.forgingMaterials.t3, {
					tier: "purple",
					quantity:
						(existing?.quantity || 0) +
						summary.skills.forgingMaterials.T3Purple,
				});
			}
		} catch (error) {
			console.warn(
				`Failed to calculate materials for ${config.name}:`,
				error
			);
		}
	});

	// Process weapon configurations
	weaponConfigurations.value.forEach((config) => {
		if (!config.name) return;

		try {
			const { weapon, upgradeMaterials, buildSummary } = useWeapon(
				config.name
			);

			// Skip if weapon not found
			if (!weapon.value || !upgradeMaterials.value) return;

			// Get weapon leveling materials
			const start = weaponLevelingMaterials.find(
				(mat) => mat.level == config.level.start
			);
			const end = weaponLevelingMaterials.find(
				(mat) => mat.level == config.level.end
			);
			if (!start || !end) return;

			const weaponLevelRange = {
				start,
				end,
			} as LevelRange<WeaponLevelingMaterial>;

			// Get summary
			const summary = buildSummary(weaponLevelRange);

			// Add to totals
			totals.coins += summary.coins?.default || 0;

			// Add forging materials
			totals.forging.green += summary.forgingMaterials.T1_Green || 0;
			totals.forging.blue += summary.forgingMaterials.T2_Blue || 0;

			// Track material names for forging materials (weapon forging materials)
			if (
				upgradeMaterials.value &&
				summary.forgingMaterials.T1_Green > 0
			) {
				const existing = totals.forgingDetails.get(
					upgradeMaterials.value.forgingMaterials.t1
				);
				totals.forgingDetails.set(
					upgradeMaterials.value.forgingMaterials.t1,
					{
						tier: "green",
						quantity:
							(existing?.quantity || 0) +
							summary.forgingMaterials.T1_Green,
					}
				);
			}
			if (
				upgradeMaterials.value &&
				summary.forgingMaterials.T2_Blue > 0
			) {
				const existing = totals.forgingDetails.get(
					upgradeMaterials.value.forgingMaterials.t2
				);
				totals.forgingDetails.set(
					upgradeMaterials.value.forgingMaterials.t2,
					{
						tier: "blue",
						quantity:
							(existing?.quantity || 0) +
							summary.forgingMaterials.T2_Blue,
					}
				);
			}

			// Track weapon ascension materials (primary and secondary)
			if (
				upgradeMaterials.value &&
				summary.ascensionMaterials.primary.T1_Green > 0
			) {
				const key = `${upgradeMaterials.value.ascensionMaterials.primary}-green`;
				const existing = totals.ascensionDetails.get(key);
				totals.ascensionDetails.set(key, {
					tier: "green",
					quantity:
						(existing?.quantity || 0) +
						summary.ascensionMaterials.primary.T1_Green,
				});
			}
			if (
				upgradeMaterials.value &&
				summary.ascensionMaterials.primary.T2_Blue > 0
			) {
				const key = `${upgradeMaterials.value.ascensionMaterials.primary}-blue`;
				const existing = totals.ascensionDetails.get(key);
				totals.ascensionDetails.set(key, {
					tier: "blue",
					quantity:
						(existing?.quantity || 0) +
						summary.ascensionMaterials.primary.T2_Blue,
				});
			}
			if (
				upgradeMaterials.value &&
				summary.ascensionMaterials.primary.T3_Purple > 0
			) {
				const key = `${upgradeMaterials.value.ascensionMaterials.primary}-purple`;
				const existing = totals.ascensionDetails.get(key);
				totals.ascensionDetails.set(key, {
					tier: "purple",
					quantity:
						(existing?.quantity || 0) +
						summary.ascensionMaterials.primary.T3_Purple,
				});
			}
			if (
				upgradeMaterials.value &&
				summary.ascensionMaterials.secondary.T1_Green > 0
			) {
				const key = `${upgradeMaterials.value.ascensionMaterials.secondary}-green`;
				const existing = totals.ascensionDetails.get(key);
				totals.ascensionDetails.set(key, {
					tier: "green",
					quantity:
						(existing?.quantity || 0) +
						summary.ascensionMaterials.secondary.T1_Green,
				});
			}
			if (
				upgradeMaterials.value &&
				summary.ascensionMaterials.secondary.T2_Blue > 0
			) {
				const key = `${upgradeMaterials.value.ascensionMaterials.secondary}-blue`;
				const existing = totals.ascensionDetails.get(key);
				totals.ascensionDetails.set(key, {
					tier: "blue",
					quantity:
						(existing?.quantity || 0) +
						summary.ascensionMaterials.secondary.T2_Blue,
				});
			}
			if (
				upgradeMaterials.value &&
				summary.ascensionMaterials.secondary.T3_Purple > 0
			) {
				const key = `${upgradeMaterials.value.ascensionMaterials.secondary}-purple`;
				const existing = totals.ascensionDetails.get(key);
				totals.ascensionDetails.set(key, {
					tier: "purple",
					quantity:
						(existing?.quantity || 0) +
						summary.ascensionMaterials.secondary.T3_Purple,
				});
			}

			totals.exp.weapons += summary.exp || 0;
		} catch (error) {
			console.warn(
				`Failed to calculate materials for weapon ${config.name}:`,
				error
			);
		}
	});

	// Process daemon wedge configurations
	const daemonWedgeConfigs = uiStore.daemonWedgeConfigurations;
	daemonWedgeConfigs.forEach((config) => {
		if (!config.name) return;

		try {
			const { getDaemonWedge, buildSummary } = useDaemonWedge();
			const wedge = getDaemonWedge(config.name);

			if (!wedge) return;

			// Get quantity (default to 1 if not specified)
			const quantity = config.quantity ?? 1;

			// Get summary
			const summary = buildSummary(
				wedge,
				config.initialLevel,
				config.targetLevel,
				quantity
			);

			// Add to totals
			totals.coins += summary.coins;
			totals.carmineGlobules += summary.carmineGlobules;

			// Track blueprints
			summary.blueprints.forEach((blueprintQty, blueprintName) => {
				const existing = totals.blueprintDetails.get(blueprintName);
				totals.blueprintDetails.set(blueprintName, {
					quantity: (existing?.quantity || 0) + blueprintQty,
				});
			});

			// Track materials
			summary.materials.forEach((materialQty, materialName) => {
				const existing = totals.daemonWedgeMaterials.get(materialName);
				totals.daemonWedgeMaterials.set(materialName, {
					quantity: (existing?.quantity || 0) + materialQty,
				});
			});
		} catch (error) {
			console.warn(
				`Failed to calculate materials for daemon wedge ${config.name}:`,
				error
			);
		}
	});

	return totals;
});

function calculateSkillMaterials(config: any) {
	const skillMaterials: SkillLevelCost[] = [];

	// Skill
	if (config.skill) {
		skillMaterials.push(
			getSkillMaterials(config.skill.current, config.skill.target)
		);
		skillMaterials.push(...getNodeMaterials(config.skill));
	}

	// Ultimate
	if (config.ult) {
		skillMaterials.push(
			getSkillMaterials(config.ult.current, config.ult.target)
		);
		skillMaterials.push(...getNodeMaterials(config.ult));
	}

	// Passive
	if (config.passive) {
		skillMaterials.push(
			getSkillMaterials(config.passive.current, config.passive.target)
		);
		skillMaterials.push(...getNodeMaterials(config.passive));
	}

	return skillMaterials;
}

function getSkillMaterials(current: number, target: number): SkillLevelCost {
	const start = CharacterSkillLevels.find((mat) => mat.level == current);
	const end = CharacterSkillLevels.find((mat) => mat.level == target);

	if (!start || !end) {
		return {
			coinsGroupA: 0,
			coinsGroupB: 0,
			forgingMaterials: { T1Green: 0, T2Blue: 0, T3Purple: 0, T4Gold: 0 },
			level: 0,
			lunoMomento: 0,
			nocturnalEcho: 0,
			twilightTread: 0,
		} as SkillLevelCost;
	}

	return {
		coinsGroupA: end.coinsGroupA - start.coinsGroupA,
		coinsGroupB: end.coinsGroupA - start.coinsGroupA,
		forgingMaterials: {
			T1Green:
				end.forgingMaterials.T1Green - start.forgingMaterials.T1Green,
			T2Blue: end.forgingMaterials.T2Blue - start.forgingMaterials.T2Blue,
			T3Purple:
				end.forgingMaterials.T3Purple - start.forgingMaterials.T3Purple,
			T4Gold: end.forgingMaterials.T4Gold - start.forgingMaterials.T4Gold,
		},
		level: end.level - start.level,
		lunoMomento: end.lunoMomento - start.lunoMomento,
		nocturnalEcho: end.nocturnalEcho - start.nocturnalEcho,
		twilightTread: end.twilightTread - start.twilightTread,
	} as SkillLevelCost;
}

function getNodeMaterials(skill: SkillUpgradeConfig): SkillLevelCost[] {
	const results: SkillLevelCost[] = [];

	if (skill.node1?.isUnlocked) {
		const m = skillTrack1Materials.find((mat) => mat.node == 1);
		if (m) results.push(toSkillLevel(m));
	}
	if (skill.node2?.isUnlocked) {
		const m = skillTrack1Materials.find((mat) => mat.node == 2);
		if (m) results.push(toSkillLevel(m));
	}

	return results;
}

function toSkillLevel(m: SkillLevelingMaterial): SkillLevelCost {
	return {
		coinsGroupA: m.coins.default,
		coinsGroupB: m.coins.default,
		forgingMaterials: {
			T1Green: m.ascensionMaterials.T1_Green,
			T2Blue: m.ascensionMaterials.T2_Blue,
			T3Purple: m.ascensionMaterials.T3_Purple,
			T4Gold: 0,
		},
		level: 0,
		lunoMomento: 0,
		nocturnalEcho: m.forgingMaterials.NocturnalEcho,
		twilightTread: m.forgingMaterials.TwilightTread,
	} as SkillLevelCost;
}

const hasAscensionMaterials = computed(
	() => totalMaterials.value.ascensionDetails.size > 0
);

const hasForgingMaterials = computed(
	() => totalMaterials.value.forgingDetails.size > 0
);

const ascensionMaterialsList = computed(() => {
	const materials: MaterialDetail[] = [];
	const tierOrder = { green: 0, blue: 1, purple: 2 };
	const tierColors = {
		green: "bg-gradient-to-br from-[#4ade80] to-[#22c55e]",
		blue: "bg-gradient-to-br from-[#60a5fa] to-[#3b82f6]",
		purple: "bg-gradient-to-br from-[#c084fc] to-[#a855f7]",
	};

	totalMaterials.value.ascensionDetails.forEach((detail, key) => {
		// Extract material name from composite key (e.g., "Frame-green" -> "Frame")
		const materialName = key.replace(/-(?:green|blue|purple)$/, "");
		const adjustedQty = getAdjustedQuantity(materialName, detail.quantity);
		materials.push({
			name: materialName,
			quantity: detail.quantity,
			adjustedQuantity: adjustedQty,
			colorClass: tierColors[detail.tier as keyof typeof tierColors],
			tier: detail.tier,
		} as any);
	});

	// Sort by tier (green, blue, purple) then by name
	return materials.sort((a, b) => {
		const tierDiff =
			tierOrder[(a as any).tier as keyof typeof tierOrder] -
			tierOrder[(b as any).tier as keyof typeof tierOrder];
		return tierDiff !== 0 ? tierDiff : a.name.localeCompare(b.name);
	});
});

const forgingMaterialsList = computed(() => {
	const materials: MaterialDetail[] = [];
	const tierOrder = { green: 0, blue: 1, purple: 2 };
	const tierColors = {
		green: "bg-gradient-to-br from-[#4ade80] to-[#22c55e]",
		blue: "bg-gradient-to-br from-[#60a5fa] to-[#3b82f6]",
		purple: "bg-gradient-to-br from-[#c084fc] to-[#a855f7]",
	};

	totalMaterials.value.forgingDetails.forEach((detail, key) => {
		// Extract material name from composite key if it exists
		const materialName = key.replace(/-(?:green|blue|purple)$/, "");
		const adjustedQty = getAdjustedQuantity(materialName, detail.quantity);
		materials.push({
			name: materialName,
			quantity: detail.quantity,
			adjustedQuantity: adjustedQty,
			colorClass: tierColors[detail.tier as keyof typeof tierColors],
			tier: detail.tier,
		} as any);
	});

	// Sort by tier (green, blue, purple) then by name
	return materials.sort((a, b) => {
		const tierDiff =
			tierOrder[(a as any).tier as keyof typeof tierOrder] -
			tierOrder[(b as any).tier as keyof typeof tierOrder];
		return tierDiff !== 0 ? tierDiff : a.name.localeCompare(b.name);
	});
});

const hasBlueprints = computed(
	() => totalMaterials.value.blueprintDetails.size > 0
);

const blueprintsList = computed(() => {
	const blueprints: MaterialDetail[] = [];
	const rarityColors = {
		Blue: "text-blue-400",
		Purple: "text-purple-400",
		Gold: "text-yellow-400",
	};

	totalMaterials.value.blueprintDetails.forEach((detail, key) => {
		// Determine rarity from blueprint name (e.g., "[Purple]", "[Blue]", "[Gold]")
		let colorClass = "text-gray-400";
		if (key.includes("[Blue]")) colorClass = rarityColors.Blue;
		else if (key.includes("[Purple]")) colorClass = rarityColors.Purple;
		else if (key.includes("[Gold]")) colorClass = rarityColors.Gold;

		const adjustedQty = getAdjustedQuantity(key, detail.quantity);
		blueprints.push({
			name: key,
			quantity: detail.quantity,
			adjustedQuantity: adjustedQty,
			colorClass,
		});
	});

	// Sort by name
	return blueprints.sort((a, b) => a.name.localeCompare(b.name));
});

const hasDaemonWedgeMaterials = computed(
	() => totalMaterials.value.daemonWedgeMaterials.size > 0
);

const daemonWedgeMaterialsList = computed(() => {
	const materials: MaterialDetail[] = [];

	totalMaterials.value.daemonWedgeMaterials.forEach((detail, key) => {
		const adjustedQty = getAdjustedQuantity(key, detail.quantity);
		materials.push({
			name: key,
			quantity: detail.quantity,
			adjustedQuantity: adjustedQty,
			colorClass: "",
		});
	});

	// Sort by name
	return materials.sort((a, b) => a.name.localeCompare(b.name));
});
</script>
