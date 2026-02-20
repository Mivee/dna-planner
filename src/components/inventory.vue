<template>
	<div class="flex flex-col gap-4">
		<div class="flex justify-between items-center mb-4">
			<h3 class="text-xl font-bold text-on-primary m-0">
				<i class="fas fa-box mr-2 text-accent"></i>
				Inventory
			</h3>
			<div class="flex items-center gap-2 text-xs text-on-secondary">
				<span class="px-2 py-1 bg-secondary-light rounded">
					Visible: {{ visibleItemCount }}
				</span>
				<span class="px-2 py-1 bg-secondary-light rounded">
					Owned: {{ ownedItemCount }}
				</span>
				<span class="px-2 py-1 bg-secondary-light rounded">
					Total Qty: {{ totalOwnedQuantity }}
				</span>
			</div>
		</div>

		<div class="flex flex-col gap-6 max-h-[60vh] overflow-y-auto pr-2">
			<!-- Currency Section -->
			<div>
				<h4
					class="text-xs font-semibold text-on-secondary uppercase tracking-wider mb-3">
					Currency
				</h4>
				<div class="flex flex-col gap-2">
					<InventoryMaterial
						name="Coins"
						icon-class="fas fa-coins"
						icon-color="text-accent"
						:quantity="getItemQuantity('Coins')"
						@update="updateQuantity" />
					<InventoryMaterial
						name="XP"
						icon-class="fas fa-star"
						icon-color="text-accent"
						:quantity="getItemQuantity('XP')"
						@update="updateQuantity" />
					<InventoryMaterial
						name="Weapon XP"
						icon-class="fas fa-hammer"
						icon-color="text-accent"
						:quantity="getItemQuantity('Weapon XP')"
						@update="updateQuantity" />
				</div>
			</div>

			<div class="flex flex-wrap items-center gap-2">
				<input
					v-model="searchQuery"
					type="text"
					placeholder="Search materials..."
					class="flex-1 min-w-56 px-3 py-2 bg-secondary-light border border-white/20 rounded text-white focus:border-accent focus:ring-1 focus:ring-accent" />
				<button
					type="button"
					class="px-3 py-2"
					@click="showOnlyOwned = !showOnlyOwned">
					<i
						class="fas mr-2"
						:class="
							showOnlyOwned
								? 'fa-toggle-on text-accent'
								: 'fa-toggle-off'
						"></i>
					{{ showOnlyOwned ? "Owned only" : "Show all" }}
				</button>
				<button type="button" class="px-3 py-2" @click="clearZeroItems">
					Clear empty
				</button>
				<button type="button" class="px-3 py-2" @click="resetAllItems">
					Reset all
				</button>
			</div>

			<div
				class="flex flex-wrap items-center gap-2 p-3 bg-secondary/3 rounded-md">
				<input
					v-model="newItemName"
					type="text"
					placeholder="Custom item name"
					class="flex-1 min-w-56 px-3 py-2 bg-secondary-light border border-white/20 rounded text-white focus:border-accent focus:ring-1 focus:ring-accent" />
				<input
					v-model.number="newItemQuantity"
					type="number"
					min="0"
					step="1"
					class="w-28 px-3 py-2 bg-secondary-light border border-white/20 rounded text-white text-right focus:border-accent focus:ring-1 focus:ring-accent" />
				<button
					type="button"
					class="px-3 py-2"
					:disabled="!newItemName.trim()"
					@click="addCustomItem">
					Add / Update
				</button>
			</div>
			<!-- Carmine Globules -->
			<div>
				<h4
					class="text-xs font-semibold text-on-secondary uppercase tracking-wider mb-3">
					Daemon Wedge Materials
				</h4>
				<div class="flex flex-col gap-2">
					<InventoryMaterial
						name="Carmine Globules"
						icon-class="fas fa-gem"
						icon-color="text-purple-400"
						:quantity="getItemQuantity('Carmine Globules')"
						@update="updateQuantity" />
				</div>
			</div>

			<div class="flex flex-col gap-6 max-h-[60vh] overflow-y-auto pr-2">
				<div
					v-for="section in groupedInventorySections"
					:key="section.key">
					<h4
						class="text-xs font-semibold text-on-secondary uppercase tracking-wider mb-3">
						{{ section.label }}
					</h4>
					<div class="flex flex-col gap-2">
						<InventoryMaterial
							v-for="materialName in section.materialNames"
							:key="materialName"
							:name="materialName"
							:icon-class="
								getMaterialMeta(materialName).iconClass
							"
							:icon-color="
								getMaterialMeta(materialName).iconColor
							"
							:quantity="getItemQuantity(materialName)"
							@update="updateQuantity" />
					</div>
				</div>

				<div
					v-if="visibleItemCount === 0"
					class="text-sm text-on-secondary p-4 bg-secondary/3 rounded-md">
					No materials match your filters.
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { computed, ref } from "vue";
import { useInventory } from "../stores/inventory";
import { elementUpgradeMaterials } from "../definitions/character";
import { weaponUpgradeMaterials } from "../definitions/weapon";
import InventoryMaterial from "./inventoryMaterial.vue";

const inventoryStore = useInventory();
const searchQuery = ref("");
const showOnlyOwned = ref(false);
const newItemName = ref("");
const newItemQuantity = ref(0);

type RarityKey = "legendary" | "epic" | "rare" | "common" | "misc";
type AscensionTierKey = "green" | "blue" | "purple";

interface RaritySection {
	key: RarityKey;
	label: string;
	materialNames: string[];
}

const rarityOrder: RarityKey[] = [
	"legendary",
	"epic",
	"rare",
	"common",
	"misc",
];
const rarityRank: Record<RarityKey, number> = {
	legendary: 4,
	epic: 3,
	rare: 2,
	common: 1,
	misc: 0,
};
const rarityLabels: Record<RarityKey, string> = {
	legendary: "Legendary (T4)",
	epic: "Epic (T3)",
	rare: "Rare (T2)",
	common: "Common (T1)",
	misc: "Utility / Unrated",
};

const baseCurrencyItems = ["Coins", "XP", "Weapon XP"];
const daemonWedgeItems = ["Carmine Globules"];

function getTieredWeaponAscensionName(
	materialName: string,
	tier: AscensionTierKey
): string {
	if (tier === "green") {
		return `Basic Weapon Component: ${materialName}`;
	}

	if (tier === "blue") {
		return `Intermediate Weapon Component: ${materialName}`;
	}

	return `Advanced Weapon Component: ${materialName}`;
}

// Get all unique ascension material names from character and weapon definitions
const ascensionMaterialNames = computed(() => {
	const materials = new Set<string>();

	// Character ascension materials
	elementUpgradeMaterials.forEach((elem) => {
		materials.add(elem.ascensionMaterials.t1);
		materials.add(elem.ascensionMaterials.t2);
		materials.add(elem.ascensionMaterials.t3);
	});

	// Weapon ascension materials
	weaponUpgradeMaterials.forEach((weapon) => {
		materials.add(
			getTieredWeaponAscensionName(
				weapon.ascensionMaterials.primary,
				"green"
			)
		);
		materials.add(
			getTieredWeaponAscensionName(
				weapon.ascensionMaterials.primary,
				"blue"
			)
		);
		materials.add(
			getTieredWeaponAscensionName(
				weapon.ascensionMaterials.primary,
				"purple"
			)
		);
		materials.add(
			getTieredWeaponAscensionName(
				weapon.ascensionMaterials.secondary,
				"green"
			)
		);
		materials.add(
			getTieredWeaponAscensionName(
				weapon.ascensionMaterials.secondary,
				"blue"
			)
		);
		materials.add(
			getTieredWeaponAscensionName(
				weapon.ascensionMaterials.secondary,
				"purple"
			)
		);
	});

	return Array.from(materials).sort();
});

// Get all unique forging material names from character and weapon definitions
const forgingMaterialNames = computed(() => {
	const materials = new Set<string>();

	// Character forging materials
	elementUpgradeMaterials.forEach((elem) => {
		materials.add(elem.forgingMaterials.t1);
		materials.add(elem.forgingMaterials.t2);
		materials.add(elem.forgingMaterials.t3);
		materials.add(elem.forgingMaterials.t4);
	});

	// Weapon forging materials
	weaponUpgradeMaterials.forEach((weapon) => {
		materials.add(weapon.forgingMaterials.t1);
		materials.add(weapon.forgingMaterials.t2);
	});

	return Array.from(materials).sort();
});

const materialRarityMap = computed(() => {
	const rarityByName = new Map<string, RarityKey>();

	const setRarity = (name: string, rarity: RarityKey) => {
		const existing = rarityByName.get(name);
		if (!existing || rarityRank[rarity] > rarityRank[existing]) {
			rarityByName.set(name, rarity);
		}
	};

	elementUpgradeMaterials.forEach((element) => {
		setRarity(element.ascensionMaterials.t1, "common");
		setRarity(element.ascensionMaterials.t2, "rare");
		setRarity(element.ascensionMaterials.t3, "epic");

		setRarity(element.forgingMaterials.t1, "common");
		setRarity(element.forgingMaterials.t2, "rare");
		setRarity(element.forgingMaterials.t3, "epic");
		setRarity(element.forgingMaterials.t4, "legendary");
	});

	weaponUpgradeMaterials.forEach((weapon) => {
		setRarity(weapon.forgingMaterials.t1, "common");
		setRarity(weapon.forgingMaterials.t2, "rare");
		setRarity(
			getTieredWeaponAscensionName(
				weapon.ascensionMaterials.primary,
				"green"
			),
			"common"
		);
		setRarity(
			getTieredWeaponAscensionName(
				weapon.ascensionMaterials.primary,
				"blue"
			),
			"rare"
		);
		setRarity(
			getTieredWeaponAscensionName(
				weapon.ascensionMaterials.primary,
				"purple"
			),
			"epic"
		);
		setRarity(
			getTieredWeaponAscensionName(
				weapon.ascensionMaterials.secondary,
				"green"
			),
			"common"
		);
		setRarity(
			getTieredWeaponAscensionName(
				weapon.ascensionMaterials.secondary,
				"blue"
			),
			"rare"
		);
		setRarity(
			getTieredWeaponAscensionName(
				weapon.ascensionMaterials.secondary,
				"purple"
			),
			"epic"
		);
	});

	baseCurrencyItems.forEach((name) => setRarity(name, "misc"));
	daemonWedgeItems.forEach((name) => setRarity(name, "misc"));

	return rarityByName;
});

const knownItems = computed(() => {
	const items = [...baseCurrencyItems, ...daemonWedgeItems];
	return [
		...items,
		...ascensionMaterialNames.value,
		...forgingMaterialNames.value,
	];
});

const groupedInventorySections = computed<RaritySection[]>(() => {
	const buckets: Record<RarityKey, string[]> = {
		legendary: [],
		epic: [],
		rare: [],
		common: [],
		misc: [],
	};
	const seen = new Set<string>();

	knownItems.value.forEach((name) => {
		if (seen.has(name)) {
			return;
		}

		const quantity = getItemQuantity(name);
		if (!matchesFilters(name, quantity)) {
			return;
		}

		const rarity = materialRarityMap.value.get(name) ?? "misc";
		buckets[rarity].push(name);
		seen.add(name);
	});

	inventoryStore.items
		.filter((item) => !knownItems.value.includes(item.name))
		.forEach((item) => {
			if (
				seen.has(item.name) ||
				!matchesFilters(item.name, item.quantity)
			) {
				return;
			}

			buckets.misc.push(item.name);
			seen.add(item.name);
		});

	rarityOrder.forEach((rarity) => {
		buckets[rarity].sort((a, b) => a.localeCompare(b));
	});

	return rarityOrder
		.map((rarity) => ({
			key: rarity,
			label: rarityLabels[rarity],
			materialNames: buckets[rarity],
		}))
		.filter((section) => section.materialNames.length > 0);
});

const ownedItemCount = computed(
	() => inventoryStore.items.filter((item) => item.quantity > 0).length
);
const totalOwnedQuantity = computed(() =>
	inventoryStore.items.reduce(
		(sum, item) => sum + Math.max(0, item.quantity),
		0
	)
);
const visibleItemCount = computed(() => {
	return groupedInventorySections.value.reduce(
		(total, section) => total + section.materialNames.length,
		0
	);
});

function getItemQuantity(name: string): number {
	return inventoryStore.getAmount(name);
}

function updateQuantity(name: string, quantity: number) {
	const normalized = Math.max(0, Math.floor(quantity || 0));
	const isKnown = knownItems.value.includes(name);

	if (!isKnown && normalized === 0) {
		inventoryStore.removeItem(name);
		return;
	}

	inventoryStore.upsertItem(name, normalized);
}

function matchesFilters(name: string, quantity: number): boolean {
	const query = searchQuery.value.trim().toLowerCase();
	const queryMatch = !query || name.toLowerCase().includes(query);
	const quantityMatch = !showOnlyOwned.value || quantity > 0;

	return queryMatch && quantityMatch;
}

function getMaterialMeta(name: string): {
	iconClass: string;
	iconColor: string;
} {
	if (baseCurrencyItems.includes(name)) {
		return { iconClass: "fas fa-coins", iconColor: "text-accent" };
	}

	if (daemonWedgeItems.includes(name)) {
		return { iconClass: "fas fa-gem", iconColor: "text-purple-400" };
	}

	const rarity = materialRarityMap.value.get(name) ?? "misc";

	switch (rarity) {
		case "legendary":
			return { iconClass: "fas fa-crown", iconColor: "text-warning" };
		case "epic":
			return { iconClass: "fas fa-star", iconColor: "text-purple-400" };
		case "rare":
			return { iconClass: "fas fa-star", iconColor: "text-info" };
		case "common":
			return { iconClass: "fas fa-star", iconColor: "text-success" };
		case "misc":
		default:
			return { iconClass: "fas fa-cube", iconColor: "text-on-secondary" };
	}
}

function addCustomItem() {
	const name = newItemName.value.trim();
	if (!name) {
		return;
	}

	inventoryStore.upsertItem(name, newItemQuantity.value);
	newItemName.value = "";
	newItemQuantity.value = 0;
}

function clearZeroItems() {
	inventoryStore.clearEmptyItems();
}

function resetAllItems() {
	if (!window.confirm("Reset the entire inventory? This cannot be undone.")) {
		return;
	}

	inventoryStore.resetInventory();
}
</script>
