import type { DemonWedge, DemonWedgeLevelCost } from "../types/demonWedge";

// Cumulative costs including forging costs
export const demon_WEDGE_COSTS: DemonWedgeLevelCost[] = [
	{ level: 0, coins: 50000, carmineGlobules: 0, blueprintCopies: 1 },
	{ level: 1, coins: 51500, carmineGlobules: 300, blueprintCopies: 1 },
	{ level: 2, coins: 54500, carmineGlobules: 900, blueprintCopies: 1 },
	{ level: 3, coins: 59000, carmineGlobules: 1800, blueprintCopies: 1 },
	{ level: 4, coins: 65000, carmineGlobules: 3000, blueprintCopies: 1 },
	{ level: 5, coins: 72500, carmineGlobules: 4500, blueprintCopies: 1 },
	{ level: 6, coins: 137500, carmineGlobules: 7500, blueprintCopies: 2 },
	{ level: 7, coins: 209500, carmineGlobules: 12000, blueprintCopies: 3 },
	{ level: 8, coins: 339500, carmineGlobules: 18000, blueprintCopies: 5 },
	{ level: 9, coins: 477000, carmineGlobules: 25500, blueprintCopies: 7 },
	{ level: 10, coins: 672000, carmineGlobules: 34500, blueprintCopies: 10 },
];

export const demonWedges: DemonWedge[] = [
	{
		type: "Phoenix",
		name: "Nirvana",
		displayName: "Phoenix V Nirvana",
		category: "Characters",
		blueprint: {
			name: "Phoenix V Nirvana",
			materialsPerCopy: 1,
		},
		additionalMaterials: [
			{
				name: "Phoenix's Nirvana",
				quantityPerCopy: 5,
				rarity: "Purple",
			},
		],
	},
	{
		type: "Phoenix",
		name: "Blessing",
		displayName: "Phoenix V Blessing",
		category: "Characters",
		blueprint: {
			name: "Phoenix V Blessing",
			materialsPerCopy: 1,
		},
		additionalMaterials: [
			{
				name: "Phoenix's Blessing",
				quantityPerCopy: 5,
				rarity: "Purple",
			},
		],
	},
	{
		type: "Phoenix",
		name: "Standfast",
		displayName: "Phoenix V Standfast",
		category: "Characters",
		blueprint: {
			name: "Phoenix V Standfast",
			materialsPerCopy: 1,
		},
		additionalMaterials: [
			{
				name: "Phoenix's Standfast",
				quantityPerCopy: 5,
				rarity: "Purple",
			},
		],
	},
	{
		type: "Siren",
		name: "Wings • Inspo",
		displayName: "Siren II Wings • Inspo",
		category: "Characters",
		blueprint: {
			name: "Siren II Wings • Inspo",
			materialsPerCopy: 1,
		},
		additionalMaterials: [
			{
				name: "Phoenix's Wings",
				quantityPerCopy: 5,
				rarity: "Purple",
			},
		],
	},
	{
		type: "Sphinx",
		name: "Onslaught",
		displayName: "Sphinx II Onslaught",
		category: "Characters",
		blueprint: {
			name: "Sphinx II Onslaught",
			materialsPerCopy: 1,
		},
		additionalMaterials: [
			{
				name: "Phoenix's Blaze",
				quantityPerCopy: 5,
				rarity: "Purple",
			},
		],
	},
	{
		type: "Sphinx",
		name: "Intrepidity",
		displayName: "Sphinx II Intrepidity",
		category: "Characters",
		blueprint: {
			name: "Sphinx II Intrepidity",
			materialsPerCopy: 1,
		},
		additionalMaterials: [
			{
				name: "Phoenix's Blaze",
				quantityPerCopy: 5,
				rarity: "Purple",
			},
		],
	},
	{
		type: "Sphinx",
		name: "Duel",
		displayName: "Sphinx II Duel",
		category: "Characters",
		blueprint: {
			name: "Sphinx II Duel",
			materialsPerCopy: 1,
		},
		additionalMaterials: [
			{
				name: "Sphinx's Duel",
				quantityPerCopy: 5,
				rarity: "Purple",
			},
		],
	},
	{
		type: "Sphinx",
		name: "Trapped",
		displayName: "Sphinx II Trapped",
		category: "Characters",
		blueprint: {
			name: "Sphinx II Trapped",
			materialsPerCopy: 1,
		},
		additionalMaterials: [
			{
				name: "Sphinx's Trapped",
				quantityPerCopy: 5,
				rarity: "Purple",
			},
		],
	},
	{
		type: "Sphinx",
		name: "Surge",
		displayName: "Sphinx II Surge",
		category: "Characters",
		blueprint: {
			name: "Sphinx II Surge",
			materialsPerCopy: 1,
		},
		additionalMaterials: [
			{
				name: "Sphinx's Surge",
				quantityPerCopy: 5,
				rarity: "Purple",
			},
		],
	},
	{
		type: "Sphinx",
		name: "Relentless",
		displayName: "Sphinx II Relentless",
		category: "Characters",
		blueprint: {
			name: "Sphinx II Relentless",
			materialsPerCopy: 1,
		},
		additionalMaterials: [
			{
				name: "Sphinx's Relentless",
				quantityPerCopy: 5,
				rarity: "Purple",
			},
		],
	},
	{
		type: "Jormungand",
		name: "Gleaming Sword",
		displayName: "Jormungand Gleaming Sword",
		category: "Characters",
		blueprint: {
			name: "Jormungand Gleaming Sword",
			materialsPerCopy: 1,
		},
		additionalMaterials: [
			{
				name: "Jormungand's Gleaming Sword",
				quantityPerCopy: 5,
				rarity: "Purple",
			},
		],
	},
	{
		type: "Jormungand",
		name: "Gleaming Polearm",
		displayName: "Jormungand Gleaming Polearm",
		category: "Characters",
		blueprint: {
			name: "Jormungand Gleaming Polearm",
			materialsPerCopy: 1,
		},
		additionalMaterials: [
			{
				name: "Jormungand's Gleaming Polearm",
				quantityPerCopy: 5,
				rarity: "Purple",
			},
		],
	},
	{
		type: "Jormungand",
		name: "Gleaming Greatsword",
		displayName: "Jormungand Gleaming Greatsword",
		category: "Characters",
		blueprint: {
			name: "Jormungand Gleaming Greatsword",
			materialsPerCopy: 1,
		},
		additionalMaterials: [
			{
				name: "Jormungand's Gleaming Greatsword",
				quantityPerCopy: 5,
				rarity: "Purple",
			},
		],
	},
	{
		type: "Jormungand",
		name: "Gleaming Dual Blades",
		displayName: "Jormungand Gleaming Dual Blades",
		category: "Characters",
		blueprint: {
			name: "Jormungand Gleaming Dual Blades",
			materialsPerCopy: 1,
		},
		additionalMaterials: [
			{
				name: "Jormungand's Gleaming Dual Blades",
				quantityPerCopy: 5,
				rarity: "Purple",
			},
		],
	},
	{
		type: "Jormungand",
		name: "Gleaming Whipblade",
		displayName: "Jormungand Gleaming Whipblade",
		category: "Characters",
		blueprint: {
			name: "Jormungand Gleaming Whipblade",
			materialsPerCopy: 1,
		},
		additionalMaterials: [
			{
				name: "Jormungand's Gleaming Whipblade",
				quantityPerCopy: 5,
				rarity: "Purple",
			},
		],
	},
	{
		type: "Jormungand",
		name: "Gleaming Katana",
		displayName: "Jormungand Gleaming Katana",
		category: "Characters",
		blueprint: {
			name: "Jormungand Gleaming Katana",
			materialsPerCopy: 1,
		},
		additionalMaterials: [
			{
				name: "Jormungand's Gleaming Katana",
				quantityPerCopy: 5,
				rarity: "Purple",
			},
		],
	},
	{
		type: "Jormungand",
		name: "Gleaming Pistol",
		displayName: "Jormungand Gleaming Pistol",
		category: "Characters",
		blueprint: {
			name: "Jormungand Gleaming Pistol",
			materialsPerCopy: 1,
		},
		additionalMaterials: [
			{
				name: "Jormungand's Gleaming Pistol",
				quantityPerCopy: 5,
				rarity: "Purple",
			},
		],
	},
	{
		type: "Jormungand",
		name: "Gleaming Dual Pistols",
		displayName: "Jormungand Gleaming Dual Pistols",
		category: "Characters",
		blueprint: {
			name: "Jormungand Gleaming Dual Pistols",
			materialsPerCopy: 1,
		},
		additionalMaterials: [
			{
				name: "Jormungand's Gleaming Dual Pistols",
				quantityPerCopy: 5,
				rarity: "Purple",
			},
		],
	},
	{
		type: "Jormungand",
		name: "Gleaming Grenade Launcher",
		displayName: "Jormungand Gleaming Grenade Launcher",
		category: "Characters",
		blueprint: {
			name: "Jormungand Gleaming Grenade Launcher",
			materialsPerCopy: 1,
		},
		additionalMaterials: [
			{
				name: "Jormungand's Gleaming Grenade Launcher",
				quantityPerCopy: 5,
				rarity: "Purple",
			},
		],
	},
	{
		type: "Jormungand",
		name: "Gleaming Shotgun",
		displayName: "Jormungand Gleaming Shotgun",
		category: "Characters",
		blueprint: {
			name: "Jormungand Gleaming Shotgun",
			materialsPerCopy: 1,
		},
		additionalMaterials: [
			{
				name: "Jormungand's Gleaming Shotgun",
				quantityPerCopy: 5,
				rarity: "Purple",
			},
		],
	},
	{
		type: "Jormungand",
		name: "Gleaming Assault Rifle",
		displayName: "Jormungand Gleaming Assault Rifle",
		category: "Characters",
		blueprint: {
			name: "Jormungand Gleaming Assault Rifle",
			materialsPerCopy: 1,
		},
		additionalMaterials: [
			{
				name: "Jormungand's Gleaming Assault Rifle",
				quantityPerCopy: 5,
				rarity: "Purple",
			},
		],
	},
	{
		type: "Jormungand",
		name: "Gleaming Bow",
		displayName: "Jormungand Gleaming Bow",
		category: "Characters",
		blueprint: {
			name: "Jormungand Gleaming Bow",
			materialsPerCopy: 1,
		},
		additionalMaterials: [
			{
				name: "Jormungand's Gleaming Bow",
				quantityPerCopy: 5,
				rarity: "Purple",
			},
		],
	},
	{
		type: "Griffin",
		name: "Squall • Wildfire",
		displayName: "Griffin Squall • Wildfire",
		category: "Characters",
		element: "Anemo",
		blueprint: {
			name: "Griffin Squall • Wildfire",
			materialsPerCopy: 1,
		},
		additionalMaterials: [
			{
				name: "Griffin's Squall • Wildfire",
				quantityPerCopy: 5,
				rarity: "Purple",
			},
		],
	},
	{
		type: "Griffin",
		name: "Squall • Midnight Sun",
		displayName: "Griffin Squall • Midnight Sun",
		category: "Characters",
		element: "Anemo",
		blueprint: {
			name: "Griffin Squall • Midnight Sun",
			materialsPerCopy: 1,
		},
		additionalMaterials: [
			{
				name: "Griffin's Squall • Midnight Sun",
				quantityPerCopy: 5,
				rarity: "Purple",
			},
		],
	},
	{
		type: "Typhon",
		name: "Prime • Morale",
		displayName: "Typhon Prime • Morale",
		category: "Characters",
		element: "Anemo",
		blueprint: {
			name: "Typhon Prime • Morale",
			materialsPerCopy: 1,
			source: "Chase",
		},
		additionalMaterials: [
			{
				name: "Typhon's Prime • Morale",
				quantityPerCopy: 5,
				rarity: "Purple",
			},
		],
	},
	{
		type: "Typhon",
		name: "Prime • Resolve",
		displayName: "Typhon Prime • Resolve",
		category: "Characters",
		element: "Anemo",
		blueprint: {
			name: "Typhon Prime • Resolve",
			materialsPerCopy: 1,
			source: "Chase",
		},
		additionalMaterials: [
			{
				name: "Typhon's Prime • Resolve",
				quantityPerCopy: 5,
				rarity: "Purple",
			},
		],
	},
	{
		type: "Typhon",
		name: "Prime • Huntdown",
		displayName: "Typhon Prime • Huntdown",
		category: "Characters",
		element: "Anemo",
		blueprint: {
			name: "Typhon Prime • Huntdown",
			materialsPerCopy: 1,
			source: "Chase",
		},
		additionalMaterials: [
			{
				name: "Typhon's Prime • Huntdown",
				quantityPerCopy: 5,
				rarity: "Purple",
			},
		],
	},
	{
		type: "Typhon",
		name: "Prime • Serenity",
		displayName: "Typhon Prime • Serenity",
		category: "Characters",
		element: "Anemo",
		blueprint: {
			name: "Typhon Prime • Serenity",
			materialsPerCopy: 1,
			source: "Chase",
		},
		additionalMaterials: [
			{
				name: "Typhon's Prime • Serenity",
				quantityPerCopy: 5,
				rarity: "Purple",
			},
		],
	},
	{
		type: "Typhon",
		name: "Prime • Uplift",
		displayName: "Typhon Prime • Uplift",
		category: "Characters",
		element: "Anemo",
		blueprint: {
			name: "Typhon Prime • Uplift",
			materialsPerCopy: 1,
			source: "Chase",
		},
		additionalMaterials: [
			{
				name: "Typhon's Prime • Uplift",
				quantityPerCopy: 5,
				rarity: "Purple",
			},
		],
	},
	{
		type: "Mephisto",
		name: "Blaze • Standfast",
		displayName: "Covenanter Blaze • Standfast",
		category: "Characters",
		element: "Anemo",
		blueprint: {
			name: "Covenanter Blaze • Standfast",
			materialsPerCopy: 1,
		},
		additionalMaterials: [
			{
				name: "Covenanter's Blaze • Standfast",
				quantityPerCopy: 5,
				rarity: "Purple",
			},
		],
	},
	{
		type: "Mephisto",
		name: "Blaze • Resolve",
		displayName: "Covenanter Blaze • Resolve",
		category: "Characters",
		element: "Anemo",
		blueprint: {
			name: "Covenanter Blaze • Resolve",
			materialsPerCopy: 1,
		},
		additionalMaterials: [
			{
				name: "Covenanter's Blaze • Resolve",
				quantityPerCopy: 5,
				rarity: "Purple",
			},
		],
	},
	{
		type: "Mephisto",
		name: "Blaze • Volition",
		displayName: "Covenanter Blaze • Volition",
		category: "Characters",
		element: "Anemo",
		blueprint: {
			name: "Covenanter Blaze • Volition",
			materialsPerCopy: 1,
		},
		additionalMaterials: [
			{
				name: "Covenanter's Blaze • Volition",
				quantityPerCopy: 5,
				rarity: "Purple",
			},
		],
	},
	{
		type: "Mephisto",
		name: "Wings • Eternity",
		displayName: "Covenanter Wings • Eternity",
		category: "Characters",
		element: "Anemo",
		blueprint: {
			name: "Covenanter Wings • Eternity",
			materialsPerCopy: 1,
		},
		additionalMaterials: [
			{
				name: "Covenanter's Wings • Eternity",
				quantityPerCopy: 5,
				rarity: "Purple",
			},
		],
	},
	{
		type: "Hastur",
		name: "Whispering Zephyr",
		displayName: "Hastur Whispering Zephyr",
		category: "Characters",
		element: "Anemo",
		blueprint: {
			name: "Hastur Whispering Zephyr",
			materialsPerCopy: 1,
		},
		additionalMaterials: [
			{
				name: "Hastur's Whispering Zephyr",
				quantityPerCopy: 5,
				rarity: "Purple",
			},
		],
	},
	{
		type: "Hastur",
		name: "Turbulent Cyclone",
		displayName: "Hastur Turbulent Cyclone",
		category: "Characters",
		element: "Anemo",
		blueprint: {
			name: "Hastur Turbulent Cyclone",
			materialsPerCopy: 1,
		},
		additionalMaterials: [
			{
				name: "Hastur's Turbulent Cyclone",
				quantityPerCopy: 5,
				rarity: "Purple",
			},
		],
	},
	{
		type: "FeatheredSnake",
		name: "Resolve",
		displayName: "Feathered Serpent's Resolve",
		category: "Characters",
		element: "Anemo",
		blueprint: {
			name: "Feathered Serpent's Resolve",
			materialsPerCopy: 1,
		},
		additionalMaterials: [
			{
				name: "Track-Shift Module",
				quantityPerCopy: 2,
			},
			{
				name: "Feathered Serpent's Resolve",
				quantityPerCopy: 5,
				rarity: "Purple",
			},
		],
	},
	{
		type: "FeatheredSnake",
		name: "Eternity",
		displayName: "Feathered Serpent's Eternity",
		category: "Characters",
		element: "Anemo",
		blueprint: {
			name: "Feathered Serpent's Eternity",
			materialsPerCopy: 1,
			source: "Shop - Trail Rank 50",
		},
		additionalMaterials: [
			{
				name: "Track-Shift Module",
				quantityPerCopy: 2,
			},
			{
				name: "Feathered Serpent's Eternity",
				quantityPerCopy: 5,
				rarity: "Purple",
			},
		],
	},
	{
		type: "Changeling",
		name: "Volition",
		displayName: "Changeling Volition",
		category: "Characters",
		element: "Anemo",
		blueprint: {
			name: "Changeling Volition",
			materialsPerCopy: 1,
		},
		additionalMaterials: [
			{
				name: "Pan's Inspo",
				quantityPerCopy: 10,
				rarity: "Blue",
			},
		],
	},
	{
		type: "Changeling",
		name: "Resolve",
		displayName: "Changeling Resolve",
		category: "Characters",
		element: "Anemo",
		blueprint: {
			name: "Changeling Resolve",
			materialsPerCopy: 1,
		},
		additionalMaterials: [
			{
				name: "Phoenix's Wings",
				quantityPerCopy: 10,
				rarity: "Blue",
			},
		],
	},
	{
		type: "Siren",
		name: "Wings • Inspo • Volition",
		displayName: "Siren Wings • Inspo • Volition",
		category: "Characters",
		element: "Anemo",
		blueprint: {
			name: "Siren Wings • Inspo • Volition",
			materialsPerCopy: 1,
		},
		additionalMaterials: [
			{
				name: "Siren's Wings • Inspo",
				quantityPerCopy: 10,
				rarity: "Blue",
			},
			{
				name: "Sacred Candle",
				quantityPerCopy: 20,
				rarity: "Purple",
			},
			{
				name: "Changeling's Volition",
				quantityPerCopy: 1,
				rarity: "Gold",
			},
		],
	},
	{
		type: "Siren",
		name: "Wings • Inspo • Resolve",
		displayName: "Siren Wings • Inspo • Resolve",
		category: "Characters",
		element: "Anemo",
		blueprint: {
			name: "Siren Wings • Inspo • Resolve",
			materialsPerCopy: 1,
		},
		additionalMaterials: [
			{
				name: "Siren's Wings • Inspo",
				quantityPerCopy: 10,
				rarity: "Blue",
			},
			{
				name: "Filthoid Tentacle",
				quantityPerCopy: 20,
				rarity: "Purple",
			},
			{
				name: "Changeling's Resolve",
				quantityPerCopy: 1,
				rarity: "Gold",
			},
		],
	},
	{
		type: "Griffin",
		name: "Thunder • Wildfire",
		displayName: "Griffin Thunder • Wildfire",
		category: "Characters",
		element: "Electro",
		blueprint: {
			name: "Griffin Thunder • Wildfire",
			materialsPerCopy: 1,
		},
		additionalMaterials: [
			{
				name: "Griffin's Thunder • Wildfire",
				quantityPerCopy: 5,
				rarity: "Purple",
			},
		],
	},
	{
		type: "Griffin",
		name: "Thunder • Midnight Sun",
		displayName: "Griffin Thunder • Midnight Sun",
		category: "Characters",
		element: "Electro",
		blueprint: {
			name: "Griffin Thunder • Midnight Sun",
			materialsPerCopy: 1,
		},
		additionalMaterials: [
			{
				name: "Griffin's Squall • Midnight Sun",
				quantityPerCopy: 5,
				rarity: "Purple",
			},
		],
	},
	{
		type: "Typhon",
		name: "Prime • Morale",
		displayName: "Typhon Prime • Morale",
		category: "Characters",
		element: "Electro",
		blueprint: {
			name: "Typhon Prime • Morale",
			materialsPerCopy: 1,
			source: "Chase",
		},
		additionalMaterials: [
			{
				name: "Typhon's Prime • Morale",
				quantityPerCopy: 5,
				rarity: "Purple",
			},
		],
	},
	{
		type: "Typhon",
		name: "Prime • Resolve",
		displayName: "Typhon Prime • Resolve",
		category: "Characters",
		element: "Electro",
		blueprint: {
			name: "Typhon Prime • Resolve",
			materialsPerCopy: 1,
			source: "Chase",
		},
		additionalMaterials: [
			{
				name: "Typhon's Prime • Resolve",
				quantityPerCopy: 5,
				rarity: "Purple",
			},
		],
	},
	{
		type: "Typhon",
		name: "Prime • Huntdown",
		displayName: "Typhon Prime • Huntdown",
		category: "Characters",
		element: "Electro",
		blueprint: {
			name: "Typhon Prime • Huntdown",
			materialsPerCopy: 1,
			source: "Chase",
		},
		additionalMaterials: [
			{
				name: "Typhon's Prime • Huntdown",
				quantityPerCopy: 5,
				rarity: "Purple",
			},
		],
	},
	{
		type: "Typhon",
		name: "Prime • Serenity",
		displayName: "Typhon Prime • Serenity",
		category: "Characters",
		element: "Electro",
		blueprint: {
			name: "Typhon Prime • Serenity",
			materialsPerCopy: 1,
			source: "Chase",
		},
		additionalMaterials: [
			{
				name: "Typhon's Prime • Serenity",
				quantityPerCopy: 5,
				rarity: "Purple",
			},
		],
	},
	{
		type: "Typhon",
		name: "Prime • Uplift",
		displayName: "Typhon Prime • Uplift",
		category: "Characters",
		element: "Electro",
		blueprint: {
			name: "Typhon Prime • Uplift",
			materialsPerCopy: 1,
			source: "Chase",
		},
		additionalMaterials: [
			{
				name: "Typhon's Prime • Uplift",
				quantityPerCopy: 5,
				rarity: "Purple",
			},
		],
	},
	{
		type: "Mephisto",
		name: "Blaze • Nirvana",
		displayName: "Covenanter Blaze • Nirvana",
		category: "Characters",
		element: "Electro",
		blueprint: {
			name: "Covenanter Blaze • Nirvana",
			materialsPerCopy: 1,
		},
		additionalMaterials: [
			{
				name: "Covenanter's Blaze • Nirvana",
				quantityPerCopy: 5,
				rarity: "Purple",
			},
		],
	},
	{
		type: "Mephisto",
		name: "Blaze • Morale",
		displayName: "Covenanter Blaze • Morale",
		category: "Characters",
		element: "Electro",
		blueprint: {
			name: "Covenanter Blaze • Morale",
			materialsPerCopy: 1,
		},
		additionalMaterials: [
			{
				name: "Covenanter's Blaze • Morale",
				quantityPerCopy: 5,
				rarity: "Purple",
			},
		],
	},
	{
		type: "Mephisto",
		name: "Blaze • Volition",
		displayName: "Covenanter Blaze • Volition",
		category: "Characters",
		element: "Electro",
		blueprint: {
			name: "Covenanter Blaze • Volition",
			materialsPerCopy: 1,
		},
		additionalMaterials: [
			{
				name: "Covenanter's Blaze • Volition",
				quantityPerCopy: 5,
				rarity: "Purple",
			},
		],
	},
	{
		type: "Mephisto",
		name: "Standfast • Eternity",
		displayName: "Covenanter Standfast • Eternity",
		category: "Characters",
		element: "Electro",
		blueprint: {
			name: "Covenanter Standfast • Eternity",
			materialsPerCopy: 1,
		},
		additionalMaterials: [
			{
				name: "Covenanter's Standfast • Eternity",
				quantityPerCopy: 5,
				rarity: "Purple",
			},
		],
	},
	{
		type: "Summanus",
		name: "Ravaging Thunder",
		displayName: "Summanus Ravaging Thunder",
		category: "Characters",
		element: "Electro",
		blueprint: {
			name: "Summanus Ravaging Thunder",
			materialsPerCopy: 1,
		},
		additionalMaterials: [
			{
				name: "Summanus's Ravaging Thunder",
				quantityPerCopy: 5,
				rarity: "Purple",
			},
		],
	},
	{
		type: "FeatheredSnake",
		name: "Spectrum",
		displayName: "Kukulkan Spectrum",
		category: "Characters",
		element: "Electro",
		blueprint: {
			name: "Kukulkan Spectrum",
			materialsPerCopy: 1,
		},
		additionalMaterials: [
			{
				name: "Track-Shift Module",
				quantityPerCopy: 2,
			},
			{
				name: "Feathered Serpent's Spectrum",
				quantityPerCopy: 5,
				rarity: "Purple",
			},
		],
	},
	{
		type: "FeatheredSnake",
		name: "Volition",
		displayName: "Kukulkan Volition",
		category: "Characters",
		element: "Electro",
		blueprint: {
			name: "Kukulkan Volition",
			materialsPerCopy: 1,
		},
		additionalMaterials: [
			{
				name: "Track-Shift Module",
				quantityPerCopy: 2,
			},
			{
				name: "Feathered Serpent's Volition",
				quantityPerCopy: 5,
				rarity: "Purple",
			},
		],
	},
	{
		type: "Changeling",
		name: "Volition",
		displayName: "Changeling Volition",
		category: "Characters",
		element: "Electro",
		blueprint: {
			name: "Changeling Volition",
			materialsPerCopy: 1,
		},
		additionalMaterials: [
			{
				name: "Pan's Volition",
				quantityPerCopy: 10,
				rarity: "Blue",
			},
		],
	},
	{
		type: "Changeling",
		name: "Morale",
		displayName: "Changeling Morale",
		category: "Characters",
		element: "Electro",
		blueprint: {
			name: "Changeling Morale",
			materialsPerCopy: 1,
		},
		additionalMaterials: [
			{
				name: "Phoenix's Blaze",
				quantityPerCopy: 10,
				rarity: "Blue",
			},
		],
	},
	{
		type: "Siren",
		name: "Wings • Inspo • Volition",
		displayName: "Siren Wings • Inspo • Volition",
		category: "Characters",
		element: "Electro",
		blueprint: {
			name: "Siren Wings • Inspo • Volition",
			materialsPerCopy: 1,
		},
		additionalMaterials: [
			{
				name: "Siren's Wings • Inspo",
				quantityPerCopy: 10,
				rarity: "Blue",
			},
			{
				name: "Sacred Candle",
				quantityPerCopy: 20,
				rarity: "Purple",
			},
			{
				name: "Changeling's Volition",
				quantityPerCopy: 1,
				rarity: "Gold",
			},
		],
	},
	{
		type: "Siren",
		name: "Wings • Inspo • Morale",
		displayName: "Siren Wings • Inspo • Morale",
		category: "Characters",
		element: "Electro",
		blueprint: {
			name: "Siren Wings • Inspo • Morale",
			materialsPerCopy: 1,
		},
		additionalMaterials: [
			{
				name: "Siren's Wings • Inspo",
				quantityPerCopy: 10,
				rarity: "Blue",
			},
			{
				name: "Filthoid Tentacle",
				quantityPerCopy: 20,
				rarity: "Purple",
			},
			{
				name: "Changeling's Morale",
				quantityPerCopy: 1,
				rarity: "Gold",
			},
		],
	},
	{
		type: "Griffin",
		name: "Inferno • Wildfire",
		displayName: "Griffin Inferno • Wildfire",
		category: "Characters",
		element: "Pyro",
		blueprint: {
			name: "Griffin Inferno • Wildfire",
			materialsPerCopy: 1,
		},
		additionalMaterials: [
			{
				name: "Griffin's Inferno • Wildfire",
				quantityPerCopy: 5,
				rarity: "Purple",
			},
		],
	},
	{
		type: "Griffin",
		name: "Inferno • Midnight Sun",
		displayName: "Griffin Inferno • Midnight Sun",
		category: "Characters",
		element: "Pyro",
		blueprint: {
			name: "Griffin Inferno • Midnight Sun",
			materialsPerCopy: 1,
		},
		additionalMaterials: [
			{
				name: "Griffin's Inferno • Midnight Sun",
				quantityPerCopy: 5,
				rarity: "Purple",
			},
		],
	},
	{
		type: "Typhon",
		name: "Prime • Morale",
		displayName: "Typhon Prime • Morale",
		category: "Characters",
		element: "Pyro",
		blueprint: {
			name: "Typhon Prime • Morale",
			materialsPerCopy: 1,
			source: "Chase",
		},
		additionalMaterials: [
			{
				name: "Typhon's Prime • Morale",
				quantityPerCopy: 5,
				rarity: "Purple",
			},
		],
	},
	{
		type: "Typhon",
		name: "Prime • Resolve",
		displayName: "Typhon Prime • Resolve",
		category: "Characters",
		element: "Pyro",
		blueprint: {
			name: "Typhon Prime • Resolve",
			materialsPerCopy: 1,
			source: "Chase",
		},
		additionalMaterials: [
			{
				name: "Typhon's Prime • Resolve",
				quantityPerCopy: 5,
				rarity: "Purple",
			},
		],
	},
	{
		type: "Typhon",
		name: "Prime • Huntdown",
		displayName: "Typhon Prime • Huntdown",
		category: "Characters",
		element: "Pyro",
		blueprint: {
			name: "Typhon Prime • Huntdown",
			materialsPerCopy: 1,
			source: "Chase",
		},
		additionalMaterials: [
			{
				name: "Typhon's Prime • Huntdown",
				quantityPerCopy: 5,
				rarity: "Purple",
			},
		],
	},
	{
		type: "Typhon",
		name: "Prime • Serenity",
		displayName: "Typhon Prime • Serenity",
		category: "Characters",
		element: "Pyro",
		blueprint: {
			name: "Typhon Prime • Serenity",
			materialsPerCopy: 1,
			source: "Chase",
		},
		additionalMaterials: [
			{
				name: "Typhon's Prime • Serenity",
				quantityPerCopy: 5,
				rarity: "Purple",
			},
		],
	},
	{
		type: "Typhon",
		name: "Prime • Uplift",
		displayName: "Typhon Prime • Uplift",
		category: "Characters",
		element: "Pyro",
		blueprint: {
			name: "Typhon Prime • Uplift",
			materialsPerCopy: 1,
			source: "Chase",
		},
		additionalMaterials: [
			{
				name: "Typhon's Prime • Uplift",
				quantityPerCopy: 5,
				rarity: "Purple",
			},
		],
	},
	{
		type: "Mephisto",
		name: "Blaze • Standfast",
		displayName: "Covenanter Blaze • Standfast",
		category: "Characters",
		element: "Pyro",
		blueprint: {
			name: "Covenanter Blaze • Standfast",
			materialsPerCopy: 1,
		},
		additionalMaterials: [
			{
				name: "Covenanter's Blaze • Standfast",
				quantityPerCopy: 5,
				rarity: "Purple",
			},
		],
	},
	{
		type: "Mephisto",
		name: "Blaze • Inspo",
		displayName: "Covenanter Blaze • Inspo",
		category: "Characters",
		element: "Pyro",
		blueprint: {
			name: "Covenanter Blaze • Inspo",
			materialsPerCopy: 1,
		},
		additionalMaterials: [
			{
				name: "Covenanter's Blaze • Inspo",
				quantityPerCopy: 5,
				rarity: "Purple",
			},
		],
	},
	{
		type: "Mephisto",
		name: "Blaze • Spectrum",
		displayName: "Covenanter Blaze • Spectrum",
		category: "Characters",
		element: "Pyro",
		blueprint: {
			name: "Covenanter Blaze • Spectrum",
			materialsPerCopy: 1,
		},
		additionalMaterials: [
			{
				name: "Covenanter's Blaze • Spectrum",
				quantityPerCopy: 5,
				rarity: "Purple",
			},
		],
	},
	{
		type: "Mephisto",
		name: "Blaze • Eternity",
		displayName: "Covenanter Blaze • Eternity",
		category: "Characters",
		element: "Pyro",
		blueprint: {
			name: "Covenanter Blaze • Eternity",
			materialsPerCopy: 1,
		},
		additionalMaterials: [
			{
				name: "Covenanter's Blaze • Eternity",
				quantityPerCopy: 5,
				rarity: "Purple",
			},
		],
	},
	{
		type: "Ifrit",
		name: "Devouring Wildfire",
		displayName: "Ifrit Devouring Wildfire",
		category: "Characters",
		element: "Pyro",
		blueprint: {
			name: "Ifrit Devouring Wildfire",
			materialsPerCopy: 1,
		},
		additionalMaterials: [
			{
				name: "Ifrit's Devouring Wildfire",
				quantityPerCopy: 5,
				rarity: "Purple",
			},
		],
	},
	{
		type: "Griffin",
		name: "Seawave • Wildfire",
		displayName: "Griffin Seawave • Wildfire",
		category: "Characters",
		element: "Hydro",
		blueprint: {
			name: "Griffin Seawave • Wildfire",
			materialsPerCopy: 1,
		},
		additionalMaterials: [
			{
				name: "Griffin's Seawave • Wildfire",
				quantityPerCopy: 5,
				rarity: "Purple",
			},
		],
	},
	{
		type: "Griffin",
		name: "Seawave • Midnight Sun",
		displayName: "Griffin Seawave • Midnight Sun",
		category: "Characters",
		element: "Hydro",
		blueprint: {
			name: "Griffin Seawave • Midnight Sun",
			materialsPerCopy: 1,
		},
		additionalMaterials: [
			{
				name: "Griffin's Seawave • Midnight Sun",
				quantityPerCopy: 5,
				rarity: "Purple",
			},
		],
	},
	{
		type: "Typhon",
		name: "Prime • Morale",
		displayName: "Typhon Prime • Morale",
		category: "Characters",
		element: "Hydro",
		blueprint: {
			name: "Typhon Prime • Morale",
			materialsPerCopy: 1,
			source: "Chase",
		},
		additionalMaterials: [
			{
				name: "Typhon's Prime • Morale",
				quantityPerCopy: 5,
				rarity: "Purple",
			},
		],
	},
	{
		type: "Typhon",
		name: "Prime • Resolve",
		displayName: "Typhon Prime • Resolve",
		category: "Characters",
		element: "Hydro",
		blueprint: {
			name: "Typhon Prime • Resolve",
			materialsPerCopy: 1,
			source: "Chase",
		},
		additionalMaterials: [
			{
				name: "Typhon's Prime • Resolve",
				quantityPerCopy: 5,
				rarity: "Purple",
			},
		],
	},
	{
		type: "Typhon",
		name: "Prime • Huntdown",
		displayName: "Typhon Prime • Huntdown",
		category: "Characters",
		element: "Hydro",
		blueprint: {
			name: "Typhon Prime • Huntdown",
			materialsPerCopy: 1,
			source: "Chase",
		},
		additionalMaterials: [
			{
				name: "Typhon's Prime • Huntdown",
				quantityPerCopy: 5,
				rarity: "Purple",
			},
		],
	},
	{
		type: "Typhon",
		name: "Prime • Serenity",
		displayName: "Typhon Prime • Serenity",
		category: "Characters",
		element: "Hydro",
		blueprint: {
			name: "Typhon Prime • Serenity",
			materialsPerCopy: 1,
			source: "Chase",
		},
		additionalMaterials: [
			{
				name: "Typhon's Prime • Serenity",
				quantityPerCopy: 5,
				rarity: "Purple",
			},
		],
	},
	{
		type: "Typhon",
		name: "Prime • Uplift",
		displayName: "Typhon Prime • Uplift",
		category: "Characters",
		element: "Hydro",
		blueprint: {
			name: "Typhon Prime • Uplift",
			materialsPerCopy: 1,
			source: "Chase",
		},
		additionalMaterials: [
			{
				name: "Typhon's Prime • Uplift",
				quantityPerCopy: 5,
				rarity: "Purple",
			},
		],
	},
	{
		type: "Mephisto",
		name: "Blaze • Nirvana",
		displayName: "Covenanter Blaze • Nirvana",
		category: "Characters",
		element: "Hydro",
		blueprint: {
			name: "Covenanter Blaze • Nirvana",
			materialsPerCopy: 1,
		},
		additionalMaterials: [
			{
				name: "Covenanter's Blaze • Nirvana",
				quantityPerCopy: 5,
				rarity: "Purple",
			},
		],
	},
	{
		type: "Mephisto",
		name: "Blaze • Inspo",
		displayName: "Covenanter Blaze • Inspo",
		category: "Characters",
		element: "Hydro",
		blueprint: {
			name: "Covenanter Blaze • Inspo",
			materialsPerCopy: 1,
		},
		additionalMaterials: [
			{
				name: "Covenanter's Blaze • Inspo",
				quantityPerCopy: 5,
				rarity: "Purple",
			},
		],
	},
	{
		type: "Mephisto",
		name: "Blaze • Spectrum",
		displayName: "Covenanter Blaze • Spectrum",
		category: "Characters",
		element: "Hydro",
		blueprint: {
			name: "Covenanter Blaze • Spectrum",
			materialsPerCopy: 1,
		},
		additionalMaterials: [
			{
				name: "Covenanter's Blaze • Spectrum",
				quantityPerCopy: 5,
				rarity: "Purple",
			},
		],
	},
	{
		type: "Mephisto",
		name: "Wings • Volition",
		displayName: "Covenanter Wings • Volition",
		category: "Characters",
		element: "Hydro",
		blueprint: {
			name: "Covenanter Wings • Volition",
			materialsPerCopy: 1,
		},
		additionalMaterials: [
			{
				name: "Covenanter's Wings • Volition",
				quantityPerCopy: 5,
				rarity: "Purple",
			},
		],
	},
	{
		type: "Bahamut",
		name: "Misty Veil",
		displayName: "Bahamut Misty Veil",
		category: "Characters",
		element: "Hydro",
		blueprint: {
			name: "Bahamut Misty Veil",
			materialsPerCopy: 1,
		},
		additionalMaterials: [
			{
				name: "Bahamut's Misty Veil",
				quantityPerCopy: 5,
				rarity: "Purple",
			},
		],
	},
	{
		type: "Bahamut",
		name: "Frosty Torrent",
		displayName: "Bahamut Frosty Torrent",
		category: "Characters",
		element: "Hydro",
		blueprint: {
			name: "Bahamut Frosty Torrent",
			materialsPerCopy: 1,
		},
		additionalMaterials: [
			{
				name: "Bahamut's Frosty Torrent",
				quantityPerCopy: 5,
				rarity: "Purple",
			},
		],
	},
	{
		type: "Griffin",
		name: "Skylume • Wildfire",
		displayName: "Griffin Skylume • Wildfire",
		category: "Characters",
		element: "Lumino",
		blueprint: {
			name: "Griffin Skylume • Wildfire",
			materialsPerCopy: 1,
		},
		additionalMaterials: [
			{
				name: "Griffin's Skylume • Wildfire",
				quantityPerCopy: 5,
				rarity: "Purple",
			},
		],
	},
	{
		type: "Griffin",
		name: "Skylume • Midnight Sun",
		displayName: "Griffin Skylume • Midnight Sun",
		category: "Characters",
		element: "Lumino",
		blueprint: {
			name: "Griffin Skylume • Midnight Sun",
			materialsPerCopy: 1,
		},
		additionalMaterials: [
			{
				name: "Griffin's Skylume • Midnight Sun",
				quantityPerCopy: 5,
				rarity: "Purple",
			},
		],
	},
	{
		type: "Typhon",
		name: "Prime • Morale",
		displayName: "Typhon Prime • Morale",
		category: "Characters",
		element: "Lumino",
		blueprint: {
			name: "Typhon Prime • Morale",
			materialsPerCopy: 1,
			source: "Chase",
		},
		additionalMaterials: [
			{
				name: "Typhon's Prime • Morale",
				quantityPerCopy: 5,
				rarity: "Purple",
			},
		],
	},
	{
		type: "Typhon",
		name: "Prime • Resolve",
		displayName: "Typhon Prime • Resolve",
		category: "Characters",
		element: "Lumino",
		blueprint: {
			name: "Typhon Prime • Resolve",
			materialsPerCopy: 1,
			source: "Chase",
		},
		additionalMaterials: [
			{
				name: "Typhon's Prime • Resolve",
				quantityPerCopy: 5,
				rarity: "Purple",
			},
		],
	},
	{
		type: "Typhon",
		name: "Prime • Huntdown",
		displayName: "Typhon Prime • Huntdown",
		category: "Characters",
		element: "Lumino",
		blueprint: {
			name: "Typhon Prime • Huntdown",
			materialsPerCopy: 1,
			source: "Chase",
		},
		additionalMaterials: [
			{
				name: "Typhon's Prime • Huntdown",
				quantityPerCopy: 5,
				rarity: "Purple",
			},
		],
	},
	{
		type: "Typhon",
		name: "Prime • Serenity",
		displayName: "Typhon Prime • Serenity",
		category: "Characters",
		element: "Lumino",
		blueprint: {
			name: "Typhon Prime • Serenity",
			materialsPerCopy: 1,
			source: "Chase",
		},
		additionalMaterials: [
			{
				name: "Typhon's Prime • Serenity",
				quantityPerCopy: 5,
				rarity: "Purple",
			},
		],
	},
	{
		type: "Typhon",
		name: "Prime • Uplift",
		displayName: "Typhon Prime • Uplift",
		category: "Characters",
		element: "Lumino",
		blueprint: {
			name: "Typhon Prime • Uplift",
			materialsPerCopy: 1,
			source: "Chase",
		},
		additionalMaterials: [
			{
				name: "Typhon's Prime • Uplift",
				quantityPerCopy: 5,
				rarity: "Purple",
			},
		],
	},
	{
		type: "Mephisto",
		name: "Scorch",
		displayName: "Covenanter Blaze • Scorch",
		category: "Characters",
		element: "Lumino",
		blueprint: {
			name: "Covenanter Blaze • Scorch",
			materialsPerCopy: 1,
		},
		additionalMaterials: [
			{
				name: "Covenanter's Scorch",
				quantityPerCopy: 5,
				rarity: "Purple",
			},
		],
	},
	{
		type: "Mephisto",
		name: "Blaze • Resolve",
		displayName: "Covenanter Blaze • Resolve",
		category: "Characters",
		element: "Lumino",
		blueprint: {
			name: "Covenanter Blaze • Resolve",
			materialsPerCopy: 1,
		},
		additionalMaterials: [
			{
				name: "Covenanter's Blaze • Resolve",
				quantityPerCopy: 5,
				rarity: "Purple",
			},
		],
	},
	{
		type: "Mephisto",
		name: "Blaze • Eternity",
		displayName: "Covenanter Blaze • Eternity",
		category: "Characters",
		element: "Lumino",
		blueprint: {
			name: "Covenanter Blaze • Eternity",
			materialsPerCopy: 1,
		},
		additionalMaterials: [
			{
				name: "Covenanter's Blaze • Eternity",
				quantityPerCopy: 5,
				rarity: "Purple",
			},
		],
	},
	{
		type: "Mephisto",
		name: "Nirvana • Volition",
		displayName: "Covenanter Nirvana • Volition",
		category: "Characters",
		element: "Lumino",
		blueprint: {
			name: "Covenanter Nirvana • Volition",
			materialsPerCopy: 1,
		},
		additionalMaterials: [
			{
				name: "Covenanter's Nirvana • Volition",
				quantityPerCopy: 5,
				rarity: "Purple",
			},
		],
	},
	{
		type: "Yatagarasus",
		name: "Prismatic Neon",
		displayName: "Helios Prismatic Neon",
		category: "Characters",
		element: "Lumino",
		blueprint: {
			name: "Helios Prismatic Neon",
			materialsPerCopy: 1,
		},
		additionalMaterials: [
			{
				name: "Helios's Prismatic Neon",
				quantityPerCopy: 5,
				rarity: "Purple",
			},
		],
	},
	{
		type: "Yatagarasus",
		name: "Gleam & Glimmer",
		displayName: "Helios Gleam & Glimmer",
		category: "Characters",
		element: "Lumino",
		blueprint: {
			name: "Helios Gleam & Glimmer",
			materialsPerCopy: 1,
		},
		additionalMaterials: [
			{
				name: "Helios's Gleam & Glimmer",
				quantityPerCopy: 5,
				rarity: "Purple",
			},
		],
	},
	{
		type: "Griffin",
		name: "Nihility • Wildfire",
		displayName: "Griffin Nihility • Wildfire",
		category: "Characters",
		element: "Umbro",
		blueprint: {
			name: "Griffin Nihility • Wildfire",
			materialsPerCopy: 1,
		},
		additionalMaterials: [
			{
				name: "Griffin's Nihility • Wildfire",
				quantityPerCopy: 5,
				rarity: "Purple",
			},
		],
	},
	{
		type: "Griffin",
		name: "Nihility • Midnight Sun",
		displayName: "Griffin Nihility • Midnight Sun",
		category: "Characters",
		element: "Umbro",
		blueprint: {
			name: "Griffin Nihility • Midnight Sun",
			materialsPerCopy: 1,
		},
		additionalMaterials: [
			{
				name: "Griffin's Nihility • Midnight Sun",
				quantityPerCopy: 5,
				rarity: "Purple",
			},
		],
	},
	{
		type: "Typhon",
		name: "Prime • Morale",
		displayName: "Typhon Prime • Morale",
		category: "Characters",
		element: "Umbro",
		blueprint: {
			name: "Typhon Prime • Morale",
			materialsPerCopy: 1,
			source: "Chase",
		},
		additionalMaterials: [
			{
				name: "Typhon's Prime • Morale",
				quantityPerCopy: 5,
				rarity: "Purple",
			},
		],
	},
	{
		type: "Typhon",
		name: "Prime • Resolve",
		displayName: "Typhon Prime • Resolve",
		category: "Characters",
		element: "Umbro",
		blueprint: {
			name: "Typhon Prime • Resolve",
			materialsPerCopy: 1,
			source: "Chase",
		},
		additionalMaterials: [
			{
				name: "Typhon's Prime • Resolve",
				quantityPerCopy: 5,
				rarity: "Purple",
			},
		],
	},
	{
		type: "Typhon",
		name: "Prime • Huntdown",
		displayName: "Typhon Prime • Huntdown",
		category: "Characters",
		element: "Umbro",
		blueprint: {
			name: "Typhon Prime • Huntdown",
			materialsPerCopy: 1,
			source: "Chase",
		},
		additionalMaterials: [
			{
				name: "Typhon's Prime • Huntdown",
				quantityPerCopy: 5,
				rarity: "Purple",
			},
		],
	},
	{
		type: "Typhon",
		name: "Prime • Serenity",
		displayName: "Typhon Prime • Serenity",
		category: "Characters",
		element: "Umbro",
		blueprint: {
			name: "Typhon Prime • Serenity",
			materialsPerCopy: 1,
			source: "Chase",
		},
		additionalMaterials: [
			{
				name: "Typhon's Prime • Serenity",
				quantityPerCopy: 5,
				rarity: "Purple",
			},
		],
	},
	{
		type: "Typhon",
		name: "Prime • Uplift",
		displayName: "Typhon Prime • Uplift",
		category: "Characters",
		element: "Umbro",
		blueprint: {
			name: "Typhon Prime • Uplift",
			materialsPerCopy: 1,
			source: "Chase",
		},
		additionalMaterials: [
			{
				name: "Typhon's Prime • Uplift",
				quantityPerCopy: 5,
				rarity: "Purple",
			},
		],
	},
	{
		type: "Mephisto",
		name: "Scorch",
		displayName: "Covenanter Blaze • Scorch",
		category: "Characters",
		element: "Umbro",
		blueprint: {
			name: "Covenanter Blaze • Scorch",
			materialsPerCopy: 1,
		},
		additionalMaterials: [
			{
				name: "Covenanter's Scorch",
				quantityPerCopy: 5,
				rarity: "Purple",
			},
		],
	},
	{
		type: "Mephisto",
		name: "Blaze • Morale",
		displayName: "Covenanter Blaze • Morale",
		category: "Characters",
		element: "Umbro",
		blueprint: {
			name: "Covenanter Blaze • Morale",
			materialsPerCopy: 1,
		},
		additionalMaterials: [
			{
				name: "Covenanter's Blaze • Morale",
				quantityPerCopy: 5,
				rarity: "Purple",
			},
		],
	},
	{
		type: "Mephisto",
		name: "Blaze • Spectrum",
		displayName: "Covenanter Blaze • Spectrum",
		category: "Characters",
		element: "Umbro",
		blueprint: {
			name: "Covenanter Blaze • Spectrum",
			materialsPerCopy: 1,
		},
		additionalMaterials: [
			{
				name: "Covenanter's Blaze • Spectrum",
				quantityPerCopy: 5,
				rarity: "Purple",
			},
		],
	},
	{
		type: "Mephisto",
		name: "Standfast • Inspo",
		displayName: "Covenanter Standfast • Inspo",
		category: "Characters",
		element: "Umbro",
		blueprint: {
			name: "Covenanter Standfast • Inspo",
			materialsPerCopy: 1,
		},
		additionalMaterials: [
			{
				name: "Covenanter's Standfast • Inspo",
				quantityPerCopy: 5,
				rarity: "Purple",
			},
		],
	},
	{
		type: "Anubis",
		name: "Illusionary Sacrifice",
		displayName: "Arbiter Illusionary Sacrifice",
		category: "Characters",
		element: "Umbro",
		blueprint: {
			name: "Arbiter Illusionary Sacrifice",
			materialsPerCopy: 1,
		},
		additionalMaterials: [
			{
				name: "Arbiter's Illusionary Sacrifice",
				quantityPerCopy: 5,
				rarity: "Purple",
			},
		],
	},
	{
		type: "Cerberus",
		name: "Impetus",
		displayName: "Cerberus V Impetus",
		category: "Melee Weapon",
		blueprint: {
			name: "Cerberus V Impetus",
			materialsPerCopy: 1,
		},
		additionalMaterials: [
			{
				name: "Cerberus's Impetus",
				quantityPerCopy: 3,
				rarity: "Purple",
			},
		],
	},
	{
		type: "Cerberus",
		name: "Impetus • Focus",
		displayName: "Cerberus V Impetus • Focus",
		category: "Melee Weapon",
		blueprint: {
			name: "Cerberus V Impetus • Focus",
			materialsPerCopy: 1,
		},
		additionalMaterials: [
			{
				name: "Cerberus's Focus",
				quantityPerCopy: 1,
				rarity: "Purple",
			},
			{
				name: "Cerberus's Impetus",
				quantityPerCopy: 2,
				rarity: "Purple",
			},
		],
	},
	{
		type: "Cerberus",
		name: "Rage • Trammel",
		displayName: "Cerberus V Rage • Trammel",
		category: "Melee Weapon",
		blueprint: {
			name: "Cerberus V Rage • Trammel",
			materialsPerCopy: 1,
		},
		additionalMaterials: [
			{
				name: "Cerberus's Trammel",
				quantityPerCopy: 1,
				rarity: "Purple",
			},
			{
				name: "Cerberus's Rage",
				quantityPerCopy: 3,
				rarity: "Purple",
			},
		],
	},
	{
		type: "Cerberus",
		name: "Celerity",
		displayName: "Cerberus VI Celerity",
		category: "Melee Weapon",
		blueprint: {
			name: "Cerberus VI Celerity",
			materialsPerCopy: 1,
		},
		additionalMaterials: [
			{
				name: "Fenrir's Brutality",
				quantityPerCopy: 3,
				rarity: "Purple",
			},
		],
	},
	{
		type: "Cerberus",
		name: "Threshold",
		displayName: "Cerberus VI Threshold",
		category: "Melee Weapon",
		blueprint: {
			name: "Cerberus VI Threshold",
			materialsPerCopy: 1,
		},
		additionalMaterials: [
			{
				name: "Fenrir's Patrol",
				quantityPerCopy: 3,
				rarity: "Purple",
			},
		],
	},
	{
		type: "Cerberus",
		name: "Edge",
		displayName: "Cerberus VIII Edge",
		category: "Melee Weapon",
		blueprint: {
			name: "Cerberus VIII Edge",
			materialsPerCopy: 1,
		},
		additionalMaterials: [
			{
				name: "Cerberus's Edge",
				quantityPerCopy: 5,
				rarity: "Blue",
			},
			{
				name: "Cerberus's Impetus",
				quantityPerCopy: 3,
				rarity: "Purple",
			},
		],
	},
	{
		type: "Cerberus",
		name: "Penetration",
		displayName: "Cerberus VIII Penetration",
		category: "Melee Weapon",
		blueprint: {
			name: "Cerberus VIII Penetration",
			materialsPerCopy: 1,
		},
		additionalMaterials: [
			{
				name: "Cerberus's Penetration",
				quantityPerCopy: 5,
				rarity: "Blue",
			},
			{
				name: "Cerberus's Impetus",
				quantityPerCopy: 3,
				rarity: "Purple",
			},
		],
	},
	{
		type: "Cerberus",
		name: "Crusher",
		displayName: "Cerberus VIII Crusher",
		category: "Melee Weapon",
		blueprint: {
			name: "Cerberus VIII Crusher",
			materialsPerCopy: 1,
		},
		additionalMaterials: [
			{
				name: "Cerberus's Crusher",
				quantityPerCopy: 5,
				rarity: "Blue",
			},
			{
				name: "Cerberus's Impetus",
				quantityPerCopy: 3,
				rarity: "Purple",
			},
		],
	},
	{
		type: "Lilith",
		name: "Impetus",
		displayName: "Lilith VII Impetus",
		category: "Ranged Weapon",
		blueprint: {
			name: "Lilith VII Impetus",
			materialsPerCopy: 1,
		},
		additionalMaterials: [
			{
				name: "Lilith's Impetus",
				quantityPerCopy: 3,
				rarity: "Purple",
			},
		],
	},
	{
		type: "Lilith",
		name: "Impetus • Focus",
		displayName: "Lilith VII Impetus • Focus",
		category: "Ranged Weapon",
		blueprint: {
			name: "Lilith VII Impetus • Focus",
			materialsPerCopy: 1,
		},
		additionalMaterials: [
			{
				name: "Lilith's Focus",
				quantityPerCopy: 1,
				rarity: "Purple",
			},
			{
				name: "Lilith's Impetus",
				quantityPerCopy: 2,
				rarity: "Purple",
			},
		],
	},
	{
		type: "Lilith",
		name: "Rage • Trammel",
		displayName: "Lilith VII Rage • Trammel",
		category: "Ranged Weapon",
		blueprint: {
			name: "Lilith VII Rage • Trammel",
			materialsPerCopy: 1,
		},
		additionalMaterials: [
			{
				name: "Lilith's Trammel",
				quantityPerCopy: 1,
				rarity: "Purple",
			},
			{
				name: "Lilith's Rage",
				quantityPerCopy: 3,
				rarity: "Purple",
			},
		],
	},
	{
		type: "Lilith",
		name: "Celerity",
		displayName: "Lilith VIII Celerity",
		category: "Ranged Weapon",
		blueprint: {
			name: "Lilith VIII Celerity",
			materialsPerCopy: 1,
		},
		additionalMaterials: [
			{
				name: "Fafnir's Frugality",
				quantityPerCopy: 3,
				rarity: "Purple",
			},
		],
	},
	{
		type: "Lilith",
		name: "Foldover",
		displayName: "Lilith VIII Foldover",
		category: "Ranged Weapon",
		blueprint: {
			name: "Lilith VIII Foldover",
			materialsPerCopy: 1,
		},
		additionalMaterials: [
			{
				name: "Lilith's Foldover",
				quantityPerCopy: 5,
				rarity: "Blue",
			},
			{
				name: "Fafnir's Loadout",
				quantityPerCopy: 3,
				rarity: "Purple",
			},
		],
	},
	{
		type: "Lilith",
		name: "Edge",
		displayName: "Lilith IX Edge",
		category: "Ranged Weapon",
		blueprint: {
			name: "Lilith IX Edge",
			materialsPerCopy: 1,
		},
		additionalMaterials: [
			{
				name: "Lilith's Edge",
				quantityPerCopy: 5,
				rarity: "Blue",
			},
			{
				name: "Lilith's Impetus",
				quantityPerCopy: 3,
				rarity: "Purple",
			},
		],
	},
	{
		type: "Lilith",
		name: "Penetration",
		displayName: "Lilith IX Penetration",
		category: "Ranged Weapon",
		blueprint: {
			name: "Lilith IX Penetration",
			materialsPerCopy: 1,
		},
		additionalMaterials: [
			{
				name: "Lilith's Penetration",
				quantityPerCopy: 5,
				rarity: "Blue",
			},
			{
				name: "Lilith's Impetus",
				quantityPerCopy: 3,
				rarity: "Purple",
			},
		],
	},
	{
		type: "Lilith",
		name: "Crusher",
		displayName: "Lilith IX Crusher",
		category: "Ranged Weapon",
		blueprint: {
			name: "Lilith IX Crusher",
			materialsPerCopy: 1,
		},
		additionalMaterials: [
			{
				name: "Lilith's Crusher",
				quantityPerCopy: 5,
				rarity: "Blue",
			},
			{
				name: "Lilith's Impetus",
				quantityPerCopy: 3,
				rarity: "Purple",
			},
		],
	},
	{
		type: "Cerberus",
		name: "Impetus",
		displayName: "Eldritch Cerberus VIII Impetus",
		category: "Melee Consonance Weapon",
		blueprint: {
			name: "Eldritch Cerberus VIII Impetus",
			materialsPerCopy: 1,
			source: "Mystic Maze",
		},
		additionalMaterials: [
			{
				name: "Eldritch Cerberus's Impetus",
				quantityPerCopy: 3,
				rarity: "Purple",
			},
		],
	},
	{
		type: "Cerberus",
		name: "Focus",
		displayName: "Eldritch Cerberus VIII Focus",
		category: "Melee Consonance Weapon",
		blueprint: {
			name: "Eldritch Cerberus VIII Focus",
			materialsPerCopy: 1,
			source: "Mystic Maze",
		},
		additionalMaterials: [
			{
				name: "Eldritch Cerberus's Focus",
				quantityPerCopy: 3,
				rarity: "Purple",
			},
		],
	},
	{
		type: "Cerberus",
		name: "Rage",
		displayName: "Eldritch Cerberus VIII Rage",
		category: "Melee Consonance Weapon",
		blueprint: {
			name: "Eldritch Cerberus VIII Rage",
			materialsPerCopy: 1,
			source: "Mystic Maze",
		},
		additionalMaterials: [
			{
				name: "Eldritch Cerberus's Rage",
				quantityPerCopy: 3,
				rarity: "Purple",
			},
		],
	},
	{
		type: "Cerberus",
		name: "Celerity",
		displayName: "Eldritch Cerberus VIII Celerity",
		category: "Melee Consonance Weapon",
		blueprint: {
			name: "Eldritch Cerberus VIII Celerity",
			materialsPerCopy: 1,
			source: "Mystic Maze",
		},
		additionalMaterials: [
			{
				name: "Eldritch Cerberus's Celerity",
				quantityPerCopy: 3,
				rarity: "Purple",
			},
		],
	},
	{
		type: "Cerberus",
		name: "Threshold",
		displayName: "Eldritch Cerberus IX Threshold",
		category: "Melee Consonance Weapon",
		blueprint: {
			name: "Eldritch Cerberus IX Threshold",
			materialsPerCopy: 1,
			source: "Mystic Maze",
		},
		additionalMaterials: [
			{
				name: "Eldritch Cerberus's Threshold",
				quantityPerCopy: 3,
				rarity: "Purple",
			},
		],
	},
	{
		type: "Cerberus",
		name: "Trammel",
		displayName: "Eldritch Cerberus IX Trammel",
		category: "Melee Consonance Weapon",
		blueprint: {
			name: "Eldritch Cerberus IX Trammel",
			materialsPerCopy: 1,
			source: "Mystic Maze",
		},
		additionalMaterials: [
			{
				name: "Eldritch Cerberus's Trammel",
				quantityPerCopy: 3,
				rarity: "Purple",
			},
		],
	},
	{
		type: "Cerberus",
		name: "Edge",
		displayName: "Eldritch Cerberus X Edge",
		category: "Melee Consonance Weapon",
		blueprint: {
			name: "Eldritch Cerberus X Edge",
			materialsPerCopy: 1,
			source: "Mystic Maze",
		},
		additionalMaterials: [
			{
				name: "Eldritch Cerberus's Edge",
				quantityPerCopy: 3,
				rarity: "Purple",
			},
		],
	},
	{
		type: "Cerberus",
		name: "Penetration",
		displayName: "Eldritch Cerberus X Penetration",
		category: "Melee Consonance Weapon",
		blueprint: {
			name: "Eldritch Cerberus X Penetration",
			materialsPerCopy: 1,
			source: "Mystic Maze",
		},
		additionalMaterials: [
			{
				name: "Eldritch Cerberus's Penetration",
				quantityPerCopy: 3,
				rarity: "Purple",
			},
		],
	},
	{
		type: "Cerberus",
		name: "Crusher",
		displayName: "Eldritch Cerberus X Crusher",
		category: "Melee Consonance Weapon",
		blueprint: {
			name: "Eldritch Cerberus X Crusher",
			materialsPerCopy: 1,
			source: "Mystic Maze",
		},
		additionalMaterials: [
			{
				name: "Eldritch Cerberus's Crusher",
				quantityPerCopy: 3,
				rarity: "Purple",
			},
		],
	},
	{
		type: "Cerberus",
		name: "Impact • Threshold",
		displayName: "Eldritch Cerberus XI Impact • Threshold",
		category: "Melee Consonance Weapon",
		blueprint: {
			name: "Eldritch Cerberus XI Impact • Threshold",
			materialsPerCopy: 1,
			source: "Mystic Maze",
		},
		additionalMaterials: [
			{
				name: "Eldritch Cerberus's Impetus",
				quantityPerCopy: 1,
				rarity: "Purple",
			},
			{
				name: "Eldritch Cerberus's Threshold",
				quantityPerCopy: 2,
				rarity: "Purple",
			},
		],
	},
	{
		type: "Cerberus",
		name: "Dropshot • Swift Dropshot",
		displayName: "Eldritch Cerberus XI Dropshot • Swift Dropshot",
		category: "Melee Consonance Weapon",
		blueprint: {
			name: "Eldritch Cerberus XI Dropshot • Swift Dropshot",
			materialsPerCopy: 1,
			source: "Mystic Maze",
		},
		additionalMaterials: [
			{
				name: "Eldritch Cerberus's Celerity",
				quantityPerCopy: 1,
				rarity: "Purple",
			},
			{
				name: "Eldritch Cerberus's Edge",
				quantityPerCopy: 2,
				rarity: "Purple",
			},
		],
	},
	{
		type: "Cerberus",
		name: "Blitz • Flash Strike",
		displayName: "Eldritch Cerberus XI Blitz • Flash Strike",
		category: "Melee Consonance Weapon",
		blueprint: {
			name: "Eldritch Cerberus XI Blitz • Flash Strike",
			materialsPerCopy: 1,
			source: "Mystic Maze",
		},
		additionalMaterials: [
			{
				name: "Eldritch Cerberus's Celerity",
				quantityPerCopy: 1,
				rarity: "Purple",
			},
			{
				name: "Eldritch Cerberus's Edge",
				quantityPerCopy: 2,
				rarity: "Purple",
			},
		],
	},
	{
		type: "Cerberus",
		name: "Respite",
		displayName: "Eldritch Cerberus XI Respite",
		category: "Melee Consonance Weapon",
		blueprint: {
			name: "Eldritch Cerberus XI Respite",
			materialsPerCopy: 1,
			source: "Mystic Maze",
		},
		additionalMaterials: [
			{
				name: "Eldritch Cerberus's Focus",
				quantityPerCopy: 1,
				rarity: "Purple",
			},
			{
				name: "Eldritch Cerberus's Crusher",
				quantityPerCopy: 2,
				rarity: "Purple",
			},
		],
	},
	{
		type: "Cerberus",
		name: "Fervor",
		displayName: "Eldritch Cerberus XI Respite",
		category: "Melee Consonance Weapon",
		blueprint: {
			name: "Eldritch Cerberus XI Respite",
			materialsPerCopy: 1,
			source: "Mystic Maze",
		},
		additionalMaterials: [
			{
				name: "Eldritch Cerberus's Focus",
				quantityPerCopy: 1,
				rarity: "Purple",
			},
			{
				name: "Eldritch Cerberus's Rage",
				quantityPerCopy: 2,
				rarity: "Purple",
			},
		],
	},
	{
		type: "Lilith",
		name: "Impetus",
		displayName: "Eldritch Lilith VIII Impetus",
		category: "Ranged Consonance Weapon",
		blueprint: {
			name: "Eldritch Lilith VIII Impetus",
			materialsPerCopy: 1,
			source: "Mystic Maze",
		},
		additionalMaterials: [
			{
				name: "Eldritch Lilith's Impetus",
				quantityPerCopy: 3,
				rarity: "Purple",
			},
		],
	},
	{
		type: "Lilith",
		name: "Focus",
		displayName: "Eldritch Lilith VIII Focus",
		category: "Ranged Consonance Weapon",
		blueprint: {
			name: "Eldritch Lilith VIII Focus",
			materialsPerCopy: 1,
			source: "Mystic Maze",
		},
		additionalMaterials: [
			{
				name: "Eldritch Lilith's Focus",
				quantityPerCopy: 3,
				rarity: "Purple",
			},
		],
	},
	{
		type: "Lilith",
		name: "Rage",
		displayName: "Eldritch Lilith VIII Rage",
		category: "Ranged Consonance Weapon",
		blueprint: {
			name: "Eldritch Lilith VIII Rage",
			materialsPerCopy: 1,
			source: "Mystic Maze",
		},
		additionalMaterials: [
			{
				name: "Eldritch Lilith's Rage",
				quantityPerCopy: 3,
				rarity: "Purple",
			},
		],
	},
	{
		type: "Lilith",
		name: "Celerity",
		displayName: "Eldritch Lilith VIII Celerity",
		category: "Ranged Consonance Weapon",
		blueprint: {
			name: "Eldritch Lilith VIII Celerity",
			materialsPerCopy: 1,
			source: "Mystic Maze",
		},
		additionalMaterials: [
			{
				name: "Eldritch Lilith's Celerity",
				quantityPerCopy: 3,
				rarity: "Purple",
			},
		],
	},
	{
		type: "Lilith",
		name: "Foldover",
		displayName: "Eldritch Lilith IX Foldover",
		category: "Ranged Consonance Weapon",
		blueprint: {
			name: "Eldritch Lilith IX Foldover",
			materialsPerCopy: 1,
			source: "Mystic Maze",
		},
		additionalMaterials: [
			{
				name: "Eldritch Lilith's Foldover",
				quantityPerCopy: 3,
				rarity: "Purple",
			},
		],
	},
	{
		type: "Lilith",
		name: "Trammel",
		displayName: "Eldritch Lilith IX Trammel",
		category: "Ranged Consonance Weapon",
		blueprint: {
			name: "Eldritch Lilith IX Trammel",
			materialsPerCopy: 1,
			source: "Mystic Maze",
		},
		additionalMaterials: [
			{
				name: "Eldritch Lilith's Trammel",
				quantityPerCopy: 3,
				rarity: "Purple",
			},
		],
	},
	{
		type: "Lilith",
		name: "Edge",
		displayName: "Eldritch Lilith X Edge",
		category: "Ranged Consonance Weapon",
		blueprint: {
			name: "Eldritch Lilith X Edge",
			materialsPerCopy: 1,
			source: "Mystic Maze",
		},
		additionalMaterials: [
			{
				name: "Eldritch Lilith's Edge",
				quantityPerCopy: 3,
				rarity: "Purple",
			},
		],
	},
	{
		type: "Lilith",
		name: "Penetration",
		displayName: "Eldritch Lilith X Penetration",
		category: "Ranged Consonance Weapon",
		blueprint: {
			name: "Eldritch Lilith X Penetration",
			materialsPerCopy: 1,
			source: "Mystic Maze",
		},
		additionalMaterials: [
			{
				name: "Eldritch Lilith's Penetration",
				quantityPerCopy: 3,
				rarity: "Purple",
			},
		],
	},
	{
		type: "Lilith",
		name: "Crusher",
		displayName: "Eldritch Lilith X Crusher",
		category: "Ranged Consonance Weapon",
		blueprint: {
			name: "Eldritch Lilith X Crusher",
			materialsPerCopy: 1,
			source: "Mystic Maze",
		},
		additionalMaterials: [
			{
				name: "Eldritch Lilith's Crusher",
				quantityPerCopy: 3,
				rarity: "Purple",
			},
		],
	},
];
