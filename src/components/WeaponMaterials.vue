<template>
	<div>
		<div>xp {{ summary.exp }}</div>
		<div>coins {{ summary.coins!.default }}</div>
		<!-- Primary -->
		<div>
			Green Primary Mats
			{{ summary.ascensionMaterials.primary.T1_Green }} ({{
				getMaterialName("Primary", "Ascension")
			}})
		</div>
		<div>
			Blue Primary Mats
			{{ summary.ascensionMaterials.primary.T2_Blue }} ({{
				getMaterialName("Primary", "Ascension")
			}})
		</div>
		<div>
			Purple Primary Mats
			{{ summary.ascensionMaterials.primary.T3_Purple }} ({{
				getMaterialName("Primary", "Ascension")
			}})
		</div>

		<!-- Seconary -->
		<div>
			Green Secondary Mats
			{{ summary.ascensionMaterials.secondary.T1_Green }} ({{
				getMaterialName("Secondary", "Ascension")
			}})
		</div>
		<div>
			Blue Secondary Mats
			{{ summary.ascensionMaterials.secondary.T2_Blue }} ({{
				getMaterialName("Secondary", "Ascension")
			}})
		</div>
		<div>
			Purple Secondary Mats
			{{ summary.ascensionMaterials.secondary.T3_Purple }} ({{
				getMaterialName("Secondary", "Ascension")
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
</script>
