import { computed } from "vue";
import { weapons } from "../definitions/weapon";
import type { ForgeMaterial } from "../types/forgeMaterial";
import type { Weapon } from "../types/weapon";

// Track-Shift Modules
const trackShiftModule: ForgeMaterial = {
	itemName: "Track-Shift Module",
	materials: {
		"Essence Gelatin": 4,
		"Gold Sand": 4,
		"Repulsive Crystal": 100,
		"Creeping Tendrils": 240000,
	},
	coin: 40,
	forgeTime: 20,
};

const weaponTrackShiftModule: ForgeMaterial = {
	itemName: "Weapon Track-Shift Module",
	materials: {
		"Precision Magnet": 3,
		"Gold Sand": 3,
		"Repulsive Crystal": 80,
		"Creeping Tendrils": 180000,
	},
	coin: 30,
	forgeTime: 30,
};

// Filthoid Polymer Modules
const filthoidTentacle: ForgeMaterial = {
	itemName: "Filthoid Tentacle",
	materials: { Projectile: 5 },
	coin: 25000,
	forgeTime: 25,
};

const serumSyringe: ForgeMaterial = {
	itemName: "Serum Syringe",
	materials: { "Sacred Candle": 5, "Sharpening Potion": 1 },
	coin: 25000,
	forgeTime: 25,
};

// Projectile Modules
const projectile: ForgeMaterial = {
	itemName: "Projectile",
	materials: {
		"Gold Sand": 4,
		"Repulsive Crystal": 6,
		Weaponholder: 2,
		Coolant: 2,
	},
	coin: 50000,
	forgeTime: 15,
};

const sharpeningPotion: ForgeMaterial = {
	itemName: "Sharpening Potion",
	materials: {
		"Gold Sand": 6,
		"Repulsive Crystal": 4,
		Weaponholder: 2,
		Coolant: 2,
	},
	coin: 50000,
	forgeTime: 15,
};

// Gold Sand / Repulsive Crystal Modules
const lunoMomento: ForgeMaterial = {
	itemName: "Luno Momento",
	materials: {
		"Luno Momento": 15,
		"Snowswift Tail Feather": 5,
		"Fuel Reagent": 5,
		"Statue Debris": 2,
	},
	coin: 10000,
	forgeTime: 10,
};

const repulsiveCrystalModule: ForgeMaterial = {
	itemName: "Repulsive Crystal",
	materials: {
		"Luno Momento": 15,
		"Vehicle Armour": 5,
		"Insulation Coating": 5,
		"Statue Debris": 2,
	},
	coin: 10000,
	forgeTime: 10,
};

const forgeAbleItems = [
	trackShiftModule,
	weaponTrackShiftModule,
	filthoidTentacle,
	serumSyringe,
	projectile,
	sharpeningPotion,
	lunoMomento,
	repulsiveCrystalModule,
];

export function useForge(itemName: string) {
	const targetItem =
		forgeAbleItems.find((i) => i.itemName == itemName) ??
		weapons.find((x) => x.name == itemName);

	const isWeapon = computed(() => weapons.some((w) => w.name == itemName));

	const materials = computed(() => {
		if (isWeapon.value) {
			const t =
				(targetItem as Weapon).range == "Melee"
					? "Sharpening Potion"
					: "Projectile";
			let o = {
				"Gold Sand": 3,
				"Repulsive Crystal": 5,
				"Sharpening Potion": 0,
				"Projectile": 0,
			};
			o[t] = 2;
			return o;
		}

		return (targetItem as ForgeMaterial).materials;
	});

	return {
		isWeapon,
		materials,
	};
}
