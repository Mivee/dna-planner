<template>
	<div>
		<div>xp {{ summary.exp }}</div>
		<div>coins {{ summary.coins!.default }}</div>
		<!-- Primary -->
		<div>
			Green Primary Mats
			{{ summary.ascensionMaterials.primary.T1_Green }} ({{
				getAscensionMaterialName("Primary", "green")
			}})
		</div>
		<div>
			Blue Primary Mats
			{{ summary.ascensionMaterials.primary.T2_Blue }} ({{
				getAscensionMaterialName("Primary", "blue")
			}})
		</div>
		<div>
			Purple Primary Mats
			{{ summary.ascensionMaterials.primary.T3_Purple }} ({{
				getAscensionMaterialName("Primary", "purple")
			}})
		</div>

		<!-- Seconary -->
		<div>
			Green Secondary Mats
			{{ summary.ascensionMaterials.secondary.T1_Green }} ({{
				getAscensionMaterialName("Secondary", "green")
			}})
		</div>
		<div>
			Blue Secondary Mats
			{{ summary.ascensionMaterials.secondary.T2_Blue }} ({{
				getAscensionMaterialName("Secondary", "blue")
			}})
		</div>
		<div>
			Purple Secondary Mats
			{{ summary.ascensionMaterials.secondary.T3_Purple }} ({{
				getAscensionMaterialName("Secondary", "purple")
			}})
		</div>

		<!-- Forging -->
		<div>
			Green Secondary Mats
			{{ summary.ascensionMaterials.secondary.T1_Green }} ({{
				getMaterialName("Green", "Forging")
			}})
		</div>
		<div>
			Blue Secondary Mats
			{{ summary.ascensionMaterials.secondary.T2_Blue }} ({{
				getMaterialName("Blue", "Forging")
			}})
		</div>
	</div>
</template>
<script lang="ts" setup>
import type { BaseUpgradeConfig } from "../types/upgradeConfig";
import { computed } from "vue";
import { useWeapon } from "../composeables/useWeapon";
import { weaponLevelingMaterials } from "../definitions/weapon";
import type { LevelRange } from "../types/range";
import type { WeaponLevelingMaterial } from "../types/ascension";

interface Props {
	upgradeConfig: BaseUpgradeConfig;
}
const props = defineProps<Props>();

const { upgradeMaterials, buildSummary } = useWeapon(props.upgradeConfig.name!);
const summary = computed(() => buildSummary(items.value));

const items = computed(() => {
	const start = weaponLevelingMaterials.find(
		(w) => w.level == props.upgradeConfig.level.start
	);
	const end = weaponLevelingMaterials.find(
		(w) => w.level == props.upgradeConfig.level.end
	);
	return { start, end } as LevelRange<WeaponLevelingMaterial>;
});

function getMaterialName(
	value: "Green" | "Blue" | "Primary" | "Secondary",
	type: "Ascension" | "Forging"
) {
	if (type == "Ascension") {
		switch (value) {
			case "Primary":
				return upgradeMaterials.value?.ascensionMaterials.primary;
			case "Secondary":
				return upgradeMaterials.value?.ascensionMaterials.secondary;
			default:
				return null;
		}
	} else if (type == "Forging") {
		switch (value) {
			case "Green":
				return upgradeMaterials.value?.forgingMaterials.t1;
			case "Blue":
				return upgradeMaterials.value?.forgingMaterials.t2;
			default:
				return null;
		}
	}
	return null;
}

function getAscensionMaterialName(
	value: "Primary" | "Secondary",
	tier: "green" | "blue" | "purple"
) {
	const materialType = getMaterialName(value, "Ascension");

	if (!materialType) {
		return null;
	}

	if (tier === "green") {
		return `Basic Weapon Component: ${materialType}`;
	}

	if (tier === "blue") {
		return `Intermediate Weapon Component: ${materialType}`;
	}

	return `Advanced Weapon Component: ${materialType}`;
}
</script>
