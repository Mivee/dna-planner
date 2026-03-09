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
								"Carmine Globules",
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

			<div class="flex flex-col gap-2" v-if="hasDemonWedgeMaterials">
				<h4
					class="text-xs font-semibold text-on-secondary uppercase tracking-wider m-0 mb-2">
					Demon Wedge Materials
				</h4>
				<template
					v-for="(material, key) in demonWedgeMaterialsList"
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
import { accumulateCharacterMaterials } from "../composables/useCharacterMaterialAccumulator";
import { accumulateWeaponMaterials } from "../composables/useWeaponMaterialAccumulator";
import { accumulateDemonWedgeMaterials } from "../composables/useDemonWedgeMaterialAccumulator";
import { createEmptyTotals } from "../composables/useMaterialTotals";

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
	tier?: string;
}

const totalMaterials = computed(() => {
	const totals = createEmptyTotals();

	characterConfigurations.value.forEach((config) => {
		try {
			accumulateCharacterMaterials(config, totals);
		} catch { /* skip invalid config */ }
	});

	weaponConfigurations.value.forEach((config) => {
		try {
			accumulateWeaponMaterials(config, totals);
		} catch { /* skip invalid config */ }
	});

	uiStore.demonWedgeConfigurations.forEach((config) => {
		try {
			accumulateDemonWedgeMaterials(config, totals);
		} catch { /* skip invalid config */ }
	});

	return totals;
});

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
		});
	});

	// Sort by tier (green, blue, purple) then by name
	return materials.sort((a, b) => {
		const tierDiff =
			tierOrder[(a.tier ?? "") as keyof typeof tierOrder] -
			tierOrder[(b.tier ?? "") as keyof typeof tierOrder];
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
		});
	});

	// Sort by tier (green, blue, purple) then by name
	return materials.sort((a, b) => {
		const tierDiff =
			tierOrder[(a.tier ?? "") as keyof typeof tierOrder] -
			tierOrder[(b.tier ?? "") as keyof typeof tierOrder];
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

const hasDemonWedgeMaterials = computed(
	() => totalMaterials.value.demonWedgeMaterials.size > 0
);

const demonWedgeMaterialsList = computed(() => {
	const materials: MaterialDetail[] = [];

	totalMaterials.value.demonWedgeMaterials.forEach((detail, key) => {
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
