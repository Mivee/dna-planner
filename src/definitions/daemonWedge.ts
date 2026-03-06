import type { DaemonWedge, DaemonWedgeLevelCost } from "../types/daemonWedge";

// Cumul ative costs including forging costs
export const DAEMON_WEDGE_COSTS: DaemonWedgeLevelCost[] = [
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

const phoenixV: DaemonWedge[] = [
	{
		type: "Phoenix",
		name: "Nirvana",
		displayName: "Phoenix V Nirvana",
		category: "Characters",
		blueprintSource: {
			name: "Phoenix's Nirvana",
			rarity: "Purple",
			materialsPerCopy: 5,
		},
	},
	{
		type: "Phoenix",
		name: "Blessing",
		displayName: "Phoenix V Blessing",
		category: "Characters",
		blueprintSource: {
			name: "Phoenix's Blessing",
			rarity: "Purple",
			materialsPerCopy: 5,
		},
	},
	{
		type: "Phoenix",
		name: "Standfast",
		displayName: "Phoenix V Standfast",
		category: "Characters",
		blueprintSource: {
			name: "Phoenix's Standfast",
			rarity: "Purple",
			materialsPerCopy: 5,
		},
	},
];
const SirenII: DaemonWedge[] = [
	{
		type: "Siren",
		name: "Wings • Inspo",
		displayName: "Siren II Wings • Inspo",
		category: "Characters",
		blueprintSource: {
			name: "Phoenix's Wings [Purple]",
			rarity: "Purple",
			materialsPerCopy: 5,
		},
	},
];
const sphinxII: DaemonWedge[] = [
	{
		type: "Sphinx",
		name: "Onslaught",
		displayName: "Sphinx II Onslaught",
		category: "Characters",
		blueprintSource: {
			name: "Phoenix's Blaze [Purple]",
			rarity: "Purple",
			materialsPerCopy: 5,
		},
	},
	{
		type: "Sphinx",
		name: "Intrepidity",
		displayName: "Sphinx II Intrepidity",
		category: "Characters",
		blueprintSource: {
			name: "Phoenix's Blaze [Purple]",
			rarity: "Purple",
			materialsPerCopy: 5,
		},
	},
	{
		type: "Sphinx",
		name: "Duel",
		displayName: "Sphinx II Duel",
		category: "Characters",
		blueprintSource: {
			name: "Sphinx's Duel [Purple]",
			rarity: "Purple",
			materialsPerCopy: 5,
		},
	},
	{
		type: "Sphinx",
		name: "Trapped",
		displayName: "Sphinx II Trapped",
		category: "Characters",
		blueprintSource: {
			name: "Sphinx's Trapped [Purple]",
			rarity: "Purple",
			materialsPerCopy: 5,
		},
	},
	{
		type: "Sphinx",
		name: "Surge",
		displayName: "Sphinx II Surge",
		category: "Characters",
		blueprintSource: {
			name: "Sphinx's Surge [Purple]",
			rarity: "Purple",
			materialsPerCopy: 5,
		},
	},
	{
		type: "Sphinx",
		name: "Relentless",
		displayName: "Sphinx II Relentless",
		category: "Characters",
		blueprintSource: {
			name: "Sphinx's Relentless [Purple]",
			rarity: "Purple",
			materialsPerCopy: 5,
		},
	},
];
const Jormungand: DaemonWedge[] = [
	{
		type: "Jormungand",
		name: "Gleaming Sword",
		displayName: "Jormungand Gleaming Sword",
		category: "Characters",
		blueprintSource: {
			name: "Jormungand's Gleaming Sword [Purple]",
			rarity: "Purple",
			materialsPerCopy: 5,
		},
	},
	{
		type: "Jormungand",
		name: "Gleaming Polearm",
		displayName: "Jormungand Gleaming Polearm",
		category: "Characters",
		blueprintSource: {
			name: "Jormungand's Gleaming Polearm [Purple]",
			rarity: "Purple",
			materialsPerCopy: 5,
		},
	},
	{
		type: "Jormungand",
		name: "Gleaming Greatsword",
		displayName: "Jormungand Gleaming Greatsword",
		category: "Characters",
		blueprintSource: {
			name: "Jormungand's Gleaming Greatsword [Purple]",
			rarity: "Purple",
			materialsPerCopy: 5,
		},
	},
	{
		type: "Jormungand",
		name: "Gleaming Dual Blades",
		displayName: "Jormungand Gleaming Dual Blades",
		category: "Characters",
		blueprintSource: {
			name: "Jormungand's Gleaming Dual Blades [Purple]",
			rarity: "Purple",
			materialsPerCopy: 5,
		},
	},
	{
		type: "Jormungand",
		name: "Gleaming Whipblade",
		displayName: "Jormungand Gleaming Whipblade",
		category: "Characters",
		blueprintSource: {
			name: "Jormungand's Gleaming Whipblade [Purple]",
			rarity: "Purple",
			materialsPerCopy: 5,
		},
	},
	{
		type: "Jormungand",
		name: "Gleaming Katana",
		displayName: "Jormungand Gleaming Katana",
		category: "Characters",
		blueprintSource: {
			name: "Jormungand's Gleaming Katana [Purple]",
			rarity: "Purple",
			materialsPerCopy: 5,
		},
	},
	{
		type: "Jormungand",
		name: "Gleaming Pistol",
		displayName: "Jormungand Gleaming Pistol",
		category: "Characters",
		blueprintSource: {
			name: "Jormungand's Gleaming Pistol [Purple]",
			rarity: "Purple",
			materialsPerCopy: 5,
		},
	},
	{
		type: "Jormungand",
		name: "Gleaming Dual Pistols",
		displayName: "Jormungand Gleaming Dual Pistols",
		category: "Characters",
		blueprintSource: {
			name: "Jormungand's Gleaming Dual Pistols [Purple]",
			rarity: "Purple",
			materialsPerCopy: 5,
		},
	},
	{
		type: "Jormungand",
		name: "Gleaming Grenade Launcher",
		displayName: "Jormungand Gleaming Grenade Launcher",
		category: "Characters",
		blueprintSource: {
			name: "Jormungand's Gleaming Grenade Launcher [Purple]",
			rarity: "Purple",
			materialsPerCopy: 5,
		},
	},
	{
		type: "Jormungand",
		name: "Gleaming Shotgun",
		displayName: "Jormungand Gleaming Shotgun",
		category: "Characters",
		blueprintSource: {
			name: "Jormungand's Gleaming Shotgun [Purple]",
			rarity: "Purple",
			materialsPerCopy: 5,
		},
	},
	{
		type: "Jormungand",
		name: "Gleaming Assault Rifle",
		displayName: "Jormungand Gleaming Assault Rifle",
		category: "Characters",
		blueprintSource: {
			name: "Jormungand's Gleaming Assault Rifle [Purple]",
			rarity: "Purple",
			materialsPerCopy: 5,
		},
	},
	{
		type: "Jormungand",
		name: "Gleaming Bow",
		displayName: "Jormungand Gleaming Bow",
		category: "Characters",
		blueprintSource: {
			name: "Jormungand's Gleaming Bow [Purple]",
			rarity: "Purple",
			materialsPerCopy: 5,
		},
	},
];

const anemo: DaemonWedge[] = [
	{
		type: "Griffin",
		name: "Squall • Wildfire",
		displayName: "Griffin Squall • Wildfire",
		category: "Characters",
		element: "Anemo",
		blueprintSource: {
			name: "Griffin's Squall • Wildfire [Purple]",
			rarity: "Purple",
			materialsPerCopy: 5,
		},
	},
	{
		type: "Griffin",
		name: "Squall • Midnight Sun",
		displayName: "Griffin Squall • Midnight Sun",
		category: "Characters",
		element: "Anemo",
		blueprintSource: {
			name: "Griffin's Squall • Midnight Sun [Purple]",
			rarity: "Purple",
			materialsPerCopy: 5,
		},
	},
	// Typhon
	{
		type: "Typhon",
		name: "Prime • Morale",
		displayName: "Typhon Prime • Morale",
		category: "Characters",
		element: "Anemo",
		blueprintSource: {
			name: "Typhon's Prime • Morale [Purple]",
			rarity: "Purple",
			materialsPerCopy: 5,
		},
	},
	{
		type: "Typhon",
		name: "Prime • Resolve",
		displayName: "Typhon Prime • Resolve",
		category: "Characters",
		element: "Anemo",
		blueprintSource: {
			name: "Typhon's Prime • Resolve [Purple]",
			rarity: "Purple",
			materialsPerCopy: 5,
		},
	},
	{
		type: "Typhon",
		name: "Prime • Huntdown",
		displayName: "Typhon Prime • Huntdown",
		category: "Characters",
		element: "Anemo",
		blueprintSource: {
			name: "Typhon's Prime • Huntdown [Purple]",
			rarity: "Purple",
			materialsPerCopy: 5,
		},
	},
	{
		type: "Typhon",
		name: "Prime • Serenity",
		displayName: "Typhon Prime • Serenity",
		category: "Characters",
		element: "Anemo",
		blueprintSource: {
			name: "Typhon's Prime • Serenity [Purple]",
			rarity: "Purple",
			materialsPerCopy: 5,
		},
	},
	{
		type: "Typhon",
		name: "Prime • Uplift",
		displayName: "Typhon Prime • Uplift",
		category: "Characters",
		element: "Anemo",
		blueprintSource: {
			name: "Typhon's Prime • Uplift [Purple]",
			rarity: "Purple",
			materialsPerCopy: 5,
		},
	},
	// Covenanter
	{
		type: "Mephisto",
		name: "Blaze • Standfast",
		displayName: "Covenanter Blaze • Standfast",
		category: "Characters",
		element: "Anemo",
		blueprintSource: {
			name: "Covenanter's Blaze • Standfast [Purple]",
			rarity: "Purple",
			materialsPerCopy: 5,
		},
	},
	{
		type: "Mephisto",
		name: "Blaze • Resolve",
		displayName: "Covenanter Blaze • Resolve",
		category: "Characters",
		element: "Anemo",
		blueprintSource: {
			name: "Covenanter's Blaze • Resolve [Purple]",
			rarity: "Purple",
			materialsPerCopy: 5,
		},
	},
	{
		type: "Mephisto",
		name: "Blaze • Volition",
		displayName: "Covenanter Blaze • Volition",
		category: "Characters",
		element: "Anemo",
		blueprintSource: {
			name: "Covenanter's Blaze • Volition [Purple]",
			rarity: "Purple",
			materialsPerCopy: 5,
		},
	},
	{
		type: "Mephisto",
		name: "Wings • Eternity",
		displayName: "Covenanter Wings • Eternity",
		category: "Characters",
		element: "Anemo",
		blueprintSource: {
			name: "Covenanter's Wings • Eternity [Purple]",
			rarity: "Purple",
			materialsPerCopy: 5,
		},
	},
	// Hastur
	{
		type: "Hastur",
		name: "Whispering Zephyr",
		displayName: "Hastur Whispering Zephyr",
		category: "Characters",
		element: "Anemo",
		blueprintSource: {
			name: "Hastur's Whispering Zephyr [Purple]",
			rarity: "Purple",
			materialsPerCopy: 5,
		},
	},
	{
		type: "Hastur",
		name: "Turbulent Cyclone",
		displayName: "Hastur Turbulent Cyclone",
		category: "Characters",
		element: "Anemo",
		blueprintSource: {
			name: "Hastur's Turbulent Cyclone [Purple]",
			rarity: "Purple",
			materialsPerCopy: 5,
		},
	},
	// Kukulkan (with Track-Shift Module)
	{
		type: "FeatheredSnake",
		name: "Resolve",
		displayName: "Feathered Serpent's Resolve",
		category: "Characters",
		element: "Anemo",
		blueprintSource: {
			name: "Feathered Serpent's Resolve [Purple]",
			rarity: "Purple",
			materialsPerCopy: 5,
		},
		additionalMaterials: [
			{ name: "Track-Shift Module", quantityPerCopy: 2 },
		],
	},
	{
		type: "FeatheredSnake",
		name: "Eternity",
		displayName: "Feathered Serpent's Eternity",
		category: "Characters",
		element: "Anemo",
		blueprintSource: {
			name: "Shop - Trail Rank 50",
			materialsPerCopy: 1,
		},
		additionalMaterials: [
			{ name: "Track-Shift Module", quantityPerCopy: 2 },
			{
				name: "Feathered Serpent's Eternity",
				quantityPerCopy: 5,
				rarity: "Purple",
			},
		],
	},
	// Changeling (Blue blueprints)
	{
		type: "Changeling",
		name: "Volition",
		displayName: "Changeling Volition",
		category: "Characters",
		element: "Anemo",
		blueprintSource: {
			name: "Pan's Inspo [Blue]",
			rarity: "Blue",
			materialsPerCopy: 10,
		},
	},
	{
		type: "Changeling",
		name: "Resolve",
		displayName: "Changeling Resolve",
		category: "Characters",
		element: "Anemo",
		blueprintSource: {
			name: "Phoenix's Wings [Blue]",
			rarity: "Blue",
			materialsPerCopy: 10,
		},
	},
	// Siren (Gold blueprints with additional materials)
	{
		type: "Siren",
		name: "Wings • Inspo • Volition",
		displayName: "Siren Wings • Inspo • Volition",
		category: "Characters",
		element: "Anemo",
		blueprintSource: {
			name: "Changeling's Volition [Gold]",
			rarity: "Gold",
			materialsPerCopy: 1,
		},
		additionalMaterials: [
			{ name: "Siren's Wings • Inspo [Blue]", quantityPerCopy: 10 },
			{ name: "Sacred Candle", quantityPerCopy: 20 },
		],
	},
	{
		type: "Siren",
		name: "Wings • Inspo • Resolve",
		displayName: "Siren Wings • Inspo • Resolve",
		category: "Characters",
		element: "Anemo",
		blueprintSource: {
			name: "Changeling's Resolve [Gold]",
			rarity: "Gold",
			materialsPerCopy: 1,
		},
		additionalMaterials: [
			{ name: "Siren's Wings • Inspo [Blue]", quantityPerCopy: 10 },
			{ name: "Filthoid Tentacle", quantityPerCopy: 20 },
		],
	},
];

const electro: DaemonWedge[] = [
	{
		type: "Griffin",
		name: "Thunder • Wildfire",
		displayName: "Griffin Thunder • Wildfire",
		category: "Characters",
		element: "Electro",
		blueprintSource: {
			name: "Griffin's Thunder • Wildfire [Purple]",
			rarity: "Purple",
			materialsPerCopy: 5,
		},
	},
	{
		type: "Griffin",
		name: "Thunder • Midnight Sun",
		displayName: "Griffin Thunder • Midnight Sun",
		category: "Characters",
		element: "Electro",
		blueprintSource: {
			name: "Griffin's Squall • Midnight Sun [Purple]",
			rarity: "Purple",
			materialsPerCopy: 5,
		},
	},
	// Typhon
	{
		type: "Typhon",
		name: "Prime • Morale",
		displayName: "Typhon Prime • Morale",
		category: "Characters",
		element: "Electro",
		blueprintSource: {
			name: "Typhon's Prime • Morale [Purple]",
			rarity: "Purple",
			materialsPerCopy: 5,
		},
	},
	{
		type: "Typhon",
		name: "Prime • Resolve",
		displayName: "Typhon Prime • Resolve",
		category: "Characters",
		element: "Electro",
		blueprintSource: {
			name: "Typhon's Prime • Resolve [Purple]",
			rarity: "Purple",
			materialsPerCopy: 5,
		},
	},
	{
		type: "Typhon",
		name: "Prime • Huntdown",
		displayName: "Typhon Prime • Huntdown",
		category: "Characters",
		element: "Electro",
		blueprintSource: {
			name: "Typhon's Prime • Huntdown [Purple]",
			rarity: "Purple",
			materialsPerCopy: 5,
		},
	},
	{
		type: "Typhon",
		name: "Prime • Serenity",
		displayName: "Typhon Prime • Serenity",
		category: "Characters",
		element: "Electro",
		blueprintSource: {
			name: "Typhon's Prime • Serenity [Purple]",
			rarity: "Purple",
			materialsPerCopy: 5,
		},
	},
	{
		type: "Typhon",
		name: "Prime • Uplift",
		displayName: "Typhon Prime • Uplift",
		category: "Characters",
		element: "Electro",
		blueprintSource: {
			name: "Typhon's Prime • Uplift [Purple]",
			rarity: "Purple",
			materialsPerCopy: 5,
		},
	},
	// Covenanter
	{
		type: "Mephisto",
		name: "Blaze • Nirvana",
		displayName: "Covenanter Blaze • Nirvana",
		category: "Characters",
		element: "Electro",
		blueprintSource: {
			name: "Covenanter's Blaze • Nirvana [Purple]",
			rarity: "Purple",
			materialsPerCopy: 5,
		},
	},
	{
		type: "Mephisto",
		name: "Blaze • Morale",
		displayName: "Covenanter Blaze • Morale",
		category: "Characters",
		element: "Electro",
		blueprintSource: {
			name: "Covenanter's Blaze • Morale [Purple]",
			rarity: "Purple",
			materialsPerCopy: 5,
		},
	},
	{
		type: "Mephisto",
		name: "Blaze • Volition",
		displayName: "Covenanter Blaze • Volition",
		category: "Characters",
		element: "Electro",
		blueprintSource: {
			name: "Covenanter's Blaze • Volition [Purple]",
			rarity: "Purple",
			materialsPerCopy: 5,
		},
	},
	{
		type: "Mephisto",
		name: "Standfast • Eternity",
		displayName: "Covenanter Standfast • Eternity",
		category: "Characters",
		element: "Electro",
		blueprintSource: {
			name: "Covenanter's Standfast • Eternity [Purple]",
			rarity: "Purple",
			materialsPerCopy: 5,
		},
	},
	// Hastur
	{
		type: "Summanus",
		name: "Ravaging Thunder",
		displayName: "Summanus Ravaging Thunder",
		category: "Characters",
		element: "Electro",
		blueprintSource: {
			name: "Summanus's Ravaging Thunder [Purple]",
			rarity: "Purple",
			materialsPerCopy: 5,
		},
	},
	// Kukulkan (with Track-Shift Module)
	{
		type: "FeatheredSnake",
		name: "Spectrum",
		displayName: "Kukulkan Spectrum",
		category: "Characters",
		element: "Electro",
		blueprintSource: {
			name: "Feathered Serpent's Spectrum [Purple]",
			rarity: "Purple",
			materialsPerCopy: 5,
		},
		additionalMaterials: [
			{ name: "Track-Shift Module", quantityPerCopy: 2 },
		],
	},
	{
		type: "FeatheredSnake",
		name: "Volition",
		displayName: "Kukulkan Volition",
		category: "Characters",
		element: "Electro",
		blueprintSource: {
			name: "Feathered Serpent's Volition [Purple]",
			rarity: "Purple",
			materialsPerCopy: 5,
		},
		additionalMaterials: [
			{ name: "Track-Shift Module", quantityPerCopy: 2 },
		],
	},
	// Changeling (Blue blueprints)
	{
		type: "Changeling",
		name: "Volition",
		displayName: "Changeling Volition",
		category: "Characters",
		element: "Electro",
		blueprintSource: {
			name: "Pan's Volition [Blue]",
			rarity: "Blue",
			materialsPerCopy: 10,
		},
	},
	{
		type: "Changeling",
		name: "Morale",
		displayName: "Changeling Morale",
		category: "Characters",
		element: "Electro",
		blueprintSource: {
			name: "Phoenix's Blaze [Blue]",
			rarity: "Blue",
			materialsPerCopy: 10,
		},
	},
	// Siren (Gold blueprints with additional materials)
	{
		type: "Siren",
		name: "Wings • Inspo • Volition",
		displayName: "Siren Wings • Inspo • Volition",
		category: "Characters",
		element: "Electro",
		blueprintSource: {
			name: "Changeling's Volition [Gold]",
			rarity: "Gold",
			materialsPerCopy: 1,
		},
		additionalMaterials: [
			{ name: "Siren's Wings • Inspo [Blue]", quantityPerCopy: 10 },
			{ name: "Sacred Candle", quantityPerCopy: 20 },
		],
	},
	{
		type: "Siren",
		name: "Wings • Inspo • Morale",
		displayName: "Siren Wings • Inspo • Morale",
		category: "Characters",
		element: "Electro",
		blueprintSource: {
			name: "Changeling's Morale [Gold]",
			rarity: "Gold",
			materialsPerCopy: 1,
		},
		additionalMaterials: [
			{ name: "Siren's Wings • Inspo [Blue]", quantityPerCopy: 10 },
			{ name: "Filthoid Tentacle", quantityPerCopy: 20 },
		],
	},
];

const pyro: DaemonWedge[] = [
	{
		type: "Griffin",
		name: "Inferno • Wildfire",
		displayName: "Griffin Inferno • Wildfire",
		category: "Characters",
		element: "Pyro",
		blueprintSource: {
			name: "Griffin's Inferno • Wildfire [Purple]",
			rarity: "Purple",
			materialsPerCopy: 5,
		},
	},
	{
		type: "Griffin",
		name: "Inferno • Midnight Sun",
		displayName: "Griffin Inferno • Midnight Sun",
		category: "Characters",
		element: "Pyro",
		blueprintSource: {
			name: "Griffin's Inferno • Midnight Sun [Purple]",
			rarity: "Purple",
			materialsPerCopy: 5,
		},
	},
	// Typhon
	{
		type: "Typhon",
		name: "Prime • Morale",
		displayName: "Typhon Prime • Morale",
		category: "Characters",
		element: "Pyro",
		blueprintSource: {
			name: "Typhon's Prime • Morale [Purple]",
			rarity: "Purple",
			materialsPerCopy: 5,
		},
	},
	{
		type: "Typhon",
		name: "Prime • Resolve",
		displayName: "Typhon Prime • Resolve",
		category: "Characters",
		element: "Pyro",
		blueprintSource: {
			name: "Typhon's Prime • Resolve [Purple]",
			rarity: "Purple",
			materialsPerCopy: 5,
		},
	},
	{
		type: "Typhon",
		name: "Prime • Huntdown",
		displayName: "Typhon Prime • Huntdown",
		category: "Characters",
		element: "Pyro",
		blueprintSource: {
			name: "Typhon's Prime • Huntdown [Purple]",
			rarity: "Purple",
			materialsPerCopy: 5,
		},
	},
	{
		type: "Typhon",
		name: "Prime • Serenity",
		displayName: "Typhon Prime • Serenity",
		category: "Characters",
		element: "Pyro",
		blueprintSource: {
			name: "Typhon's Prime • Serenity [Purple]",
			rarity: "Purple",
			materialsPerCopy: 5,
		},
	},
	{
		type: "Typhon",
		name: "Prime • Uplift",
		displayName: "Typhon Prime • Uplift",
		category: "Characters",
		element: "Pyro",
		blueprintSource: {
			name: "Typhon's Prime • Uplift [Purple]",
			rarity: "Purple",
			materialsPerCopy: 5,
		},
	},
	// Covenanter
	{
		type: "Mephisto",
		name: "Blaze • Standfast",
		displayName: "Covenanter Blaze • Standfast",
		category: "Characters",
		element: "Pyro",
		blueprintSource: {
			name: "Covenanter's Blaze • Standfast [Purple]",
			rarity: "Purple",
			materialsPerCopy: 5,
		},
	},
	{
		type: "Mephisto",
		name: "Blaze • Inspo",
		displayName: "Covenanter Blaze • Inspo",
		category: "Characters",
		element: "Pyro",
		blueprintSource: {
			name: "Covenanter's Blaze • Inspo [Purple]",
			rarity: "Purple",
			materialsPerCopy: 5,
		},
	},
	{
		type: "Mephisto",
		name: "Blaze • Spectrum",
		displayName: "Covenanter Blaze • Spectrum",
		category: "Characters",
		element: "Pyro",
		blueprintSource: {
			name: "Covenanter's Blaze • Spectrum [Purple]",
			rarity: "Purple",
			materialsPerCopy: 5,
		},
	},
	{
		type: "Mephisto",
		name: "Blaze • Eternity",
		displayName: "Covenanter Blaze • Eternity",
		category: "Characters",
		element: "Pyro",
		blueprintSource: {
			name: "Covenanter's Blaze • Eternity [Purple]",
			rarity: "Purple",
			materialsPerCopy: 5,
		},
	},
	// Ifrit
	{
		type: "Ifrit",
		name: "Devouring Wildfire",
		displayName: "Ifrit Devouring Wildfire",
		category: "Characters",
		element: "Pyro",
		blueprintSource: {
			name: "Ifrit's Devouring Wildfire [Purple]",
			rarity: "Purple",
			materialsPerCopy: 5,
		},
	},
];

const hydro: DaemonWedge[] = [
	{
		type: "Griffin",
		name: "Seawave • Wildfire",
		displayName: "Griffin Seawave • Wildfire",
		category: "Characters",
		element: "Hydro",
		blueprintSource: {
			name: "Griffin's Seawave • Wildfire [Purple]",
			rarity: "Purple",
			materialsPerCopy: 5,
		},
	},
	{
		type: "Griffin",
		name: "Seawave • Midnight Sun",
		displayName: "Griffin Seawave • Midnight Sun",
		category: "Characters",
		element: "Hydro",
		blueprintSource: {
			name: "Griffin's Seawave • Midnight Sun [Purple]",
			rarity: "Purple",
			materialsPerCopy: 5,
		},
	},
	// Typhon
	{
		type: "Typhon",
		name: "Prime • Morale",
		displayName: "Typhon Prime • Morale",
		category: "Characters",
		element: "Hydro",
		blueprintSource: {
			name: "Typhon's Prime • Morale [Purple]",
			rarity: "Purple",
			materialsPerCopy: 5,
		},
	},
	{
		type: "Typhon",
		name: "Prime • Resolve",
		displayName: "Typhon Prime • Resolve",
		category: "Characters",
		element: "Hydro",
		blueprintSource: {
			name: "Typhon's Prime • Resolve [Purple]",
			rarity: "Purple",
			materialsPerCopy: 5,
		},
	},
	{
		type: "Typhon",
		name: "Prime • Huntdown",
		displayName: "Typhon Prime • Huntdown",
		category: "Characters",
		element: "Hydro",
		blueprintSource: {
			name: "Typhon's Prime • Huntdown [Purple]",
			rarity: "Purple",
			materialsPerCopy: 5,
		},
	},
	{
		type: "Typhon",
		name: "Prime • Serenity",
		displayName: "Typhon Prime • Serenity",
		category: "Characters",
		element: "Hydro",
		blueprintSource: {
			name: "Typhon's Prime • Serenity [Purple]",
			rarity: "Purple",
			materialsPerCopy: 5,
		},
	},
	{
		type: "Typhon",
		name: "Prime • Uplift",
		displayName: "Typhon Prime • Uplift",
		category: "Characters",
		element: "Hydro",
		blueprintSource: {
			name: "Typhon's Prime • Uplift [Purple]",
			rarity: "Purple",
			materialsPerCopy: 5,
		},
	},
	// Covenanter
	{
		type: "Mephisto",
		name: "Blaze • Nirvana",
		displayName: "Covenanter Blaze • Nirvana",
		category: "Characters",
		element: "Hydro",
		blueprintSource: {
			name: "Covenanter's Blaze • Nirvana [Purple]",
			rarity: "Purple",
			materialsPerCopy: 5,
		},
	},
	{
		type: "Mephisto",
		name: "Blaze • Inspo",
		displayName: "Covenanter Blaze • Inspo",
		category: "Characters",
		element: "Hydro",
		blueprintSource: {
			name: "Covenanter's Blaze • Inspo [Purple]",
			rarity: "Purple",
			materialsPerCopy: 5,
		},
	},
	{
		type: "Mephisto",
		name: "Blaze • Spectrum",
		displayName: "Covenanter Blaze • Spectrum",
		category: "Characters",
		element: "Hydro",
		blueprintSource: {
			name: "Covenanter's Blaze • Spectrum [Purple]",
			rarity: "Purple",
			materialsPerCopy: 5,
		},
	},
	{
		type: "Mephisto",
		name: "Wings • Volition",
		displayName: "Covenanter Wings • Volition",
		category: "Characters",
		element: "Hydro",
		blueprintSource: {
			name: "Covenanter's Wings • Volition [Purple]",
			rarity: "Purple",
			materialsPerCopy: 5,
		},
	},
	// Bahamut
	{
		type: "Bahamut",
		name: "Misty Veil",
		displayName: "Bahamut Misty Veil",
		category: "Characters",
		element: "Hydro",
		blueprintSource: {
			name: "Bahamut's Misty Veil [Purple]",
			rarity: "Purple",
			materialsPerCopy: 5,
		},
	},
	{
		type: "Bahamut",
		name: "Frosty Torrent",
		displayName: "Bahamut Frosty Torrent",
		category: "Characters",
		element: "Hydro",
		blueprintSource: {
			name: "Bahamut's Frosty Torrent [Purple]",
			rarity: "Purple",
			materialsPerCopy: 5,
		},
	},
];

const lumino: DaemonWedge[] = [
	{
		type: "Griffin",
		name: "Skylume • Wildfire",
		displayName: "Griffin Skylume • Wildfire",
		category: "Characters",
		element: "Lumino",
		blueprintSource: {
			name: "Griffin's Skylume • Wildfire [Purple]",
			rarity: "Purple",
			materialsPerCopy: 5,
		},
	},
	{
		type: "Griffin",
		name: "Skylume • Midnight Sun",
		displayName: "Griffin Skylume • Midnight Sun",
		category: "Characters",
		element: "Lumino",
		blueprintSource: {
			name: "Griffin's Skylume • Midnight Sun [Purple]",
			rarity: "Purple",
			materialsPerCopy: 5,
		},
	},
	// Typhon
	{
		type: "Typhon",
		name: "Prime • Morale",
		displayName: "Typhon Prime • Morale",
		category: "Characters",
		element: "Lumino",
		blueprintSource: {
			name: "Typhon's Prime • Morale [Purple]",
			rarity: "Purple",
			materialsPerCopy: 5,
		},
	},
	{
		type: "Typhon",
		name: "Prime • Resolve",
		displayName: "Typhon Prime • Resolve",
		category: "Characters",
		element: "Lumino",
		blueprintSource: {
			name: "Typhon's Prime • Resolve [Purple]",
			rarity: "Purple",
			materialsPerCopy: 5,
		},
	},
	{
		type: "Typhon",
		name: "Prime • Huntdown",
		displayName: "Typhon Prime • Huntdown",
		category: "Characters",
		element: "Lumino",
		blueprintSource: {
			name: "Typhon's Prime • Huntdown [Purple]",
			rarity: "Purple",
			materialsPerCopy: 5,
		},
	},
	{
		type: "Typhon",
		name: "Prime • Serenity",
		displayName: "Typhon Prime • Serenity",
		category: "Characters",
		element: "Lumino",
		blueprintSource: {
			name: "Typhon's Prime • Serenity [Purple]",
			rarity: "Purple",
			materialsPerCopy: 5,
		},
	},
	{
		type: "Typhon",
		name: "Prime • Uplift",
		displayName: "Typhon Prime • Uplift",
		category: "Characters",
		element: "Lumino",
		blueprintSource: {
			name: "Typhon's Prime • Uplift [Purple]",
			rarity: "Purple",
			materialsPerCopy: 5,
		},
	},
	// Covenanter
	{
		type: "Mephisto",
		name: "Scorch",
		displayName: "Covenanter Blaze • Scorch",
		category: "Characters",
		element: "Lumino",
		blueprintSource: {
			name: "Covenanter's Scorch [Purple]",
			rarity: "Purple",
			materialsPerCopy: 5,
		},
	},
	{
		type: "Mephisto",
		name: "Blaze • Resolve",
		displayName: "Covenanter Blaze • Resolve",
		category: "Characters",
		element: "Lumino",
		blueprintSource: {
			name: "Covenanter's Blaze • Resolve [Purple]",
			rarity: "Purple",
			materialsPerCopy: 5,
		},
	},
	{
		type: "Mephisto",
		name: "Blaze • Eternity",
		displayName: "Covenanter Blaze • Eternity",
		category: "Characters",
		element: "Lumino",
		blueprintSource: {
			name: "Covenanter's Blaze • Eternity [Purple]",
			rarity: "Purple",
			materialsPerCopy: 5,
		},
	},
	{
		type: "Mephisto",
		name: "Nirvana • Volition",
		displayName: "Covenanter Nirvana • Volition",
		category: "Characters",
		element: "Lumino",
		blueprintSource: {
			name: "Covenanter's Nirvana • Volition [Purple]",
			rarity: "Purple",
			materialsPerCopy: 5,
		},
	},
	// Helios
	{
		type: "Yatagarasus",
		name: "Prismatic Neon",
		displayName: "Helios Prismatic Neon",
		category: "Characters",
		element: "Lumino",
		blueprintSource: {
			name: "Helios's Prismatic Neon [Purple]",
			rarity: "Purple",
			materialsPerCopy: 5,
		},
	},
	{
		type: "Yatagarasus",
		name: "Gleam & Glimmer",
		displayName: "Helios Gleam & Glimmer",
		category: "Characters",
		element: "Lumino",
		blueprintSource: {
			name: "Helios's Gleam & Glimmer [Purple]",
			rarity: "Purple",
			materialsPerCopy: 5,
		},
	},
];

const umbro: DaemonWedge[] = [
	{
		type: "Griffin",
		name: "Nihility • Wildfire",
		displayName: "Griffin Nihility • Wildfire",
		category: "Characters",
		element: "Umbro",
		blueprintSource: {
			name: "Griffin's Nihility • Wildfire [Purple]",
			rarity: "Purple",
			materialsPerCopy: 5,
		},
	},
	{
		type: "Griffin",
		name: "Nihility • Midnight Sun",
		displayName: "Griffin Nihility • Midnight Sun",
		category: "Characters",
		element: "Umbro",
		blueprintSource: {
			name: "Griffin's Nihility • Midnight Sun [Purple]",
			rarity: "Purple",
			materialsPerCopy: 5,
		},
	},
	// Typhon
	{
		type: "Typhon",
		name: "Prime • Morale",
		displayName: "Typhon Prime • Morale",
		category: "Characters",
		element: "Umbro",
		blueprintSource: {
			name: "Typhon's Prime • Morale [Purple]",
			rarity: "Purple",
			materialsPerCopy: 5,
		},
	},
	{
		type: "Typhon",
		name: "Prime • Resolve",
		displayName: "Typhon Prime • Resolve",
		category: "Characters",
		element: "Umbro",
		blueprintSource: {
			name: "Typhon's Prime • Resolve [Purple]",
			rarity: "Purple",
			materialsPerCopy: 5,
		},
	},
	{
		type: "Typhon",
		name: "Prime • Huntdown",
		displayName: "Typhon Prime • Huntdown",
		category: "Characters",
		element: "Umbro",
		blueprintSource: {
			name: "Typhon's Prime • Huntdown [Purple]",
			rarity: "Purple",
			materialsPerCopy: 5,
		},
	},
	{
		type: "Typhon",
		name: "Prime • Serenity",
		displayName: "Typhon Prime • Serenity",
		category: "Characters",
		element: "Umbro",
		blueprintSource: {
			name: "Typhon's Prime • Serenity [Purple]",
			rarity: "Purple",
			materialsPerCopy: 5,
		},
	},
	{
		type: "Typhon",
		name: "Prime • Uplift",
		displayName: "Typhon Prime • Uplift",
		category: "Characters",
		element: "Umbro",
		blueprintSource: {
			name: "Typhon's Prime • Uplift [Purple]",
			rarity: "Purple",
			materialsPerCopy: 5,
		},
	},
	// Covenanter
	{
		type: "Mephisto",
		name: "Scorch",
		displayName: "Covenanter Blaze • Scorch",
		category: "Characters",
		element: "Umbro",
		blueprintSource: {
			name: "Covenanter's Scorch [Purple]",
			rarity: "Purple",
			materialsPerCopy: 5,
		},
	},
	{
		type: "Mephisto",
		name: "Blaze • Morale",
		displayName: "Covenanter Blaze • Morale",
		category: "Characters",
		element: "Umbro",
		blueprintSource: {
			name: "Covenanter's Blaze • Morale [Purple]",
			rarity: "Purple",
			materialsPerCopy: 5,
		},
	},
	{
		type: "Mephisto",
		name: "Blaze • Spectrum",
		displayName: "Covenanter Blaze • Spectrum",
		category: "Characters",
		element: "Umbro",
		blueprintSource: {
			name: "Covenanter's Blaze • Spectrum [Purple]",
			rarity: "Purple",
			materialsPerCopy: 5,
		},
	},
	{
		type: "Mephisto",
		name: "Standfast • Inspo",
		displayName: "Covenanter Standfast • Inspo",
		category: "Characters",
		element: "Umbro",
		blueprintSource: {
			name: "Covenanter's Standfast • Inspo [Purple]",
			rarity: "Purple",
			materialsPerCopy: 5,
		},
	},
	// Arbiter
	{
		type: "Anubis",
		name: "Illusionary Sacrifice",
		displayName: "Arbiter Illusionary Sacrifice",
		category: "Characters",
		element: "Umbro",
		blueprintSource: {
			name: "Arbiter's Illusionary Sacrifice [Purple]",
			rarity: "Purple",
			materialsPerCopy: 5,
		},
	},
];
const meele: DaemonWedge[] = [
	{
		type: "Cerberus",
		name: "Impetus",
		displayName: "Cerberus V Impetus",
		category: "Melee Weapon",
		blueprintSource: {
			name: "Cerberus's Impetus [Purple]",
			rarity: "Purple",
			materialsPerCopy: 3,
		},
	},
	{
		type: "Cerberus",
		name: "Impetus • Focus",
		displayName: "Cerberus V Impetus • Focus",
		category: "Melee Weapon",
		blueprintSource: {
			name: "Cerberus's Impetus [Purple]",
			rarity: "Purple",
			materialsPerCopy: 2,
		},
		additionalMaterials: [
			{ name: "Cerberus's Focus [Purple]", quantityPerCopy: 1 },
		],
	},
	{
		type: "Cerberus",
		name: "Rage • Trammel",
		displayName: "Cerberus V Rage • Trammel",
		category: "Melee Weapon",
		blueprintSource: {
			name: "Cerberus's Rage [Purple]",
			rarity: "Purple",
			materialsPerCopy: 3,
		},
		additionalMaterials: [
			{ name: "Cerberus's Trammel [Purple]", quantityPerCopy: 1 },
		],
	},
	// Cerberus VI
	{
		type: "Cerberus",
		name: "Celerity",
		displayName: "Cerberus VI Celerity",
		category: "Melee Weapon",
		blueprintSource: {
			name: "Fenrir's Brutality [Purple]",
			rarity: "Purple",
			materialsPerCopy: 3,
		},
	},
	{
		type: "Cerberus",
		name: "Threshold",
		displayName: "Cerberus VI Threshold",
		category: "Melee Weapon",
		blueprintSource: {
			name: "Fenrir's Patrol [Purple]",
			rarity: "Purple",
			materialsPerCopy: 3,
		},
	},
	// Cerberus VIII (with Blue materials)
	{
		type: "Cerberus",
		name: "Edge",
		displayName: "Cerberus VIII Edge",
		category: "Melee Weapon",
		blueprintSource: {
			name: "Cerberus's Impetus [Purple]",
			rarity: "Purple",
			materialsPerCopy: 3,
		},
		additionalMaterials: [
			{ name: "Cerberus's Edge [Blue]", quantityPerCopy: 5 },
		],
	},
	{
		type: "Cerberus",
		name: "Penetration",
		displayName: "Cerberus VIII Penetration",
		category: "Melee Weapon",
		blueprintSource: {
			name: "Cerberus's Impetus [Purple]",
			rarity: "Purple",
			materialsPerCopy: 3,
		},
		additionalMaterials: [
			{ name: "Cerberus's Penetration [Blue]", quantityPerCopy: 5 },
		],
	},
	{
		type: "Cerberus",
		name: "Crusher",
		displayName: "Cerberus VIII Crusher",
		category: "Melee Weapon",
		blueprintSource: {
			name: "Cerberus's Impetus [Purple]",
			rarity: "Purple",
			materialsPerCopy: 3,
		},
		additionalMaterials: [
			{ name: "Cerberus's Crusher [Blue]", quantityPerCopy: 5 },
		],
	},
];
const ranged: DaemonWedge[] = [
	// Lilith VII
	{
		type: "Lilith",
		name: "Impetus",
		displayName: "Lilith VII Impetus",
		category: "Ranged Weapon",
		blueprintSource: {
			name: "Lilith's Impetus [Purple]",
			rarity: "Purple",
			materialsPerCopy: 3,
		},
	},
	{
		type: "Lilith",
		name: "Impetus • Focus",
		displayName: "Lilith VII Impetus • Focus",
		category: "Ranged Weapon",
		blueprintSource: {
			name: "Lilith's Impetus [Purple]",
			rarity: "Purple",
			materialsPerCopy: 2,
		},
		additionalMaterials: [
			{ name: "Lilith's Focus [Purple]", quantityPerCopy: 1 },
		],
	},
	{
		type: "Lilith",
		name: "Rage • Trammel",
		displayName: "Lilith VII Rage • Trammel",
		category: "Ranged Weapon",
		blueprintSource: {
			name: "Lilith's Rage [Purple]",
			rarity: "Purple",
			materialsPerCopy: 3,
		},
		additionalMaterials: [
			{ name: "Lilith's Trammel [Purple]", quantityPerCopy: 1 },
		],
	},
	// Lilith VIII
	{
		type: "Lilith",
		name: "Celerity",
		displayName: "Lilith VIII Celerity",
		category: "Ranged Weapon",
		blueprintSource: {
			name: "Fafnir's Frugality [Purple]",
			rarity: "Purple",
			materialsPerCopy: 3,
		},
	},
	{
		type: "Lilith",
		name: "Foldover",
		displayName: "Lilith VIII Foldover",
		category: "Ranged Weapon",
		blueprintSource: {
			name: "Fafnir's Loadout [Purple]",
			rarity: "Purple",
			materialsPerCopy: 3,
		},
		additionalMaterials: [
			{ name: "Lilith's Foldover [Blue]", quantityPerCopy: 5 },
		],
	},
	// Lilith IX
	{
		type: "Lilith",
		name: "Edge",
		displayName: "Lilith IX Edge",
		category: "Ranged Weapon",
		blueprintSource: {
			name: "Lilith's Impetus [Purple]",
			rarity: "Purple",
			materialsPerCopy: 3,
		},
		additionalMaterials: [
			{ name: "Lilith's Edge [Blue]", quantityPerCopy: 5 },
		],
	},
	{
		type: "Lilith",
		name: "Penetration",
		displayName: "Lilith IX Penetration",
		category: "Ranged Weapon",
		blueprintSource: {
			name: "Lilith's Impetus [Purple]",
			rarity: "Purple",
			materialsPerCopy: 3,
		},
		additionalMaterials: [
			{ name: "Lilith's Penetration [Blue]", quantityPerCopy: 5 },
		],
	},
	{
		type: "Lilith",
		name: "Crusher",
		displayName: "Lilith IX Crusher",
		category: "Ranged Weapon",
		blueprintSource: {
			name: "Lilith's Impetus [Purple]",
			rarity: "Purple",
			materialsPerCopy: 3,
		},
		additionalMaterials: [
			{ name: "Lilith's Crusher [Blue]", quantityPerCopy: 5 },
		],
	},
];
const meeleCosonance: DaemonWedge[] = [
	{
		type: "Cerberus",
		name: "Impetus",
		displayName: "Eldritch Cerberus VIII Impetus",
		category: "Melee Consonance Weapon",
		blueprintSource: {
			name: "Eldritch Cerberus's Impetus [Purple]",
			rarity: "Purple",
			materialsPerCopy: 3,
		},
	},
	{
		type: "Cerberus",
		name: "Focus",
		displayName: "Eldritch Cerberus VIII Focus",
		category: "Melee Consonance Weapon",
		blueprintSource: {
			name: "Eldritch Cerberus's Focus [Purple]",
			rarity: "Purple",
			materialsPerCopy: 3,
		},
	},
	{
		type: "Cerberus",
		name: "Rage",
		displayName: "Eldritch Cerberus VIII Rage",
		category: "Melee Consonance Weapon",
		blueprintSource: {
			name: "Eldritch Cerberus's Rage [Purple]",
			rarity: "Purple",
			materialsPerCopy: 3,
		},
	},
	{
		type: "Cerberus",
		name: "Celerity",
		displayName: "Eldritch Cerberus VIII Celerity",
		category: "Melee Consonance Weapon",
		blueprintSource: {
			name: "Eldritch Cerberus's Celerity [Purple]",
			rarity: "Purple",
			materialsPerCopy: 3,
		},
	},
	// Eldritch Cerberus IX
	{
		type: "Cerberus",
		name: "Threshold",
		displayName: "Eldritch Cerberus IX Threshold",
		category: "Melee Consonance Weapon",
		blueprintSource: {
			name: "Eldritch Cerberus's Threshold [Purple]",
			rarity: "Purple",
			materialsPerCopy: 3,
		},
	},
	{
		type: "Cerberus",
		name: "Trammel",
		displayName: "Eldritch Cerberus IX Trammel",
		category: "Melee Consonance Weapon",
		blueprintSource: {
			name: "Eldritch Cerberus's Trammel [Purple]",
			rarity: "Purple",
			materialsPerCopy: 3,
		},
	},
	// Eldritch Cerberus X
	{
		type: "Cerberus",
		name: "Edge",
		displayName: "Eldritch Cerberus X Edge",
		category: "Melee Consonance Weapon",
		blueprintSource: {
			name: "Eldritch Cerberus's Edge [Purple]",
			rarity: "Purple",
			materialsPerCopy: 3,
		},
	},
	{
		type: "Cerberus",
		name: "Penetration",
		displayName: "Eldritch Cerberus X Penetration",
		category: "Melee Consonance Weapon",
		blueprintSource: {
			name: "Eldritch Cerberus's Penetration [Purple]",
			rarity: "Purple",
			materialsPerCopy: 3,
		},
	},
	{
		type: "Cerberus",
		name: "Crusher",
		displayName: "Eldritch Cerberus X Crusher",
		category: "Melee Consonance Weapon",
		blueprintSource: {
			name: "Eldritch Cerberus's Crusher [Purple]",
			rarity: "Purple",
			materialsPerCopy: 3,
		},
	},
	// Eldritch Cerberus XI
	{
		type: "Cerberus",
		name: "Impact • Threshold",
		displayName: "Eldritch Cerberus XI Impact • Threshold",
		category: "Melee Consonance Weapon",
		blueprintSource: {
			name: "Eldritch Cerberus's Threshold [Purple]",
			rarity: "Purple",
			materialsPerCopy: 2,
		},
		additionalMaterials: [
			{
				name: "Eldritch Cerberus's Impetus [Purple]",
				quantityPerCopy: 1,
			},
		],
	},
	{
		type: "Cerberus",
		name: "Dropshot • Swift Dropshot",
		displayName: "Eldritch Cerberus XI Dropshot • Swift Dropshot",
		category: "Melee Consonance Weapon",
		blueprintSource: {
			name: "Eldritch Cerberus's Edge [Purple]",
			rarity: "Purple",
			materialsPerCopy: 2,
		},
		additionalMaterials: [
			{
				name: "Eldritch Cerberus's Celerity [Purple]",
				quantityPerCopy: 1,
			},
		],
	},
	{
		type: "Cerberus",
		name: "Blitz • Flash Strike",
		displayName: "Eldritch Cerberus XI Blitz • Flash Strike",
		category: "Melee Consonance Weapon",
		blueprintSource: {
			name: "Eldritch Cerberus's Edge [Purple]",
			rarity: "Purple",
			materialsPerCopy: 2,
		},
		additionalMaterials: [
			{
				name: "Eldritch Cerberus's Celerity [Purple]",
				quantityPerCopy: 1,
			},
		],
	},
	{
		type: "Cerberus",
		name: "Respite",
		displayName: "Eldritch Cerberus XI Respite",
		category: "Melee Consonance Weapon",
		blueprintSource: {
			name: "Eldritch Cerberus's Crusher [Purple]",
			rarity: "Purple",
			materialsPerCopy: 2,
		},
		additionalMaterials: [
			{
				name: "Eldritch Cerberus's Focus [Purple]",
				quantityPerCopy: 1,
			},
		],
	},
	{
		type: "Cerberus",
		name: "Fervor",
		displayName: "Eldritch Cerberus XI Respite",
		category: "Melee Consonance Weapon",
		blueprintSource: {
			name: "Eldritch Cerberus's Rage [Purple]",
			rarity: "Purple",
			materialsPerCopy: 2,
		},
		additionalMaterials: [
			{
				name: "Eldritch Cerberus's Focus [Purple]",
				quantityPerCopy: 1,
			},
		],
	},
];
const rangedCosonance: DaemonWedge[] = [
	{
		type: "Lilith",
		name: "Impetus",
		displayName: "Eldritch Lilith VIII Impetus",
		category: "Ranged Consonance Weapon",
		blueprintSource: {
			name: "Eldritch Lilith's Impetus [Purple]",
			rarity: "Purple",
			materialsPerCopy: 3,
		},
	},
	{
		type: "Lilith",
		name: "Focus",
		displayName: "Eldritch Lilith VIII Focus",
		category: "Ranged Consonance Weapon",
		blueprintSource: {
			name: "Eldritch Lilith's Focus [Purple]",
			rarity: "Purple",
			materialsPerCopy: 3,
		},
	},
	{
		type: "Lilith",
		name: "Rage",
		displayName: "Eldritch Lilith VIII Rage",
		category: "Ranged Consonance Weapon",
		blueprintSource: {
			name: "Eldritch Lilith's Rage [Purple]",
			rarity: "Purple",
			materialsPerCopy: 3,
		},
	},
	{
		type: "Lilith",
		name: "Celerity",
		displayName: "Eldritch Lilith VIII Celerity",
		category: "Ranged Consonance Weapon",
		blueprintSource: {
			name: "Eldritch Lilith's Celerity [Purple]",
			rarity: "Purple",
			materialsPerCopy: 3,
		},
	},
	// Eldritch Lilith IX
	{
		type: "Lilith",
		name: "Foldover",
		displayName: "Eldritch Lilith IX Foldover",
		category: "Ranged Consonance Weapon",
		blueprintSource: {
			name: "Eldritch Lilith's Foldover [Purple]",
			rarity: "Purple",
			materialsPerCopy: 3,
		},
	},
	{
		type: "Lilith",
		name: "Trammel",
		displayName: "Eldritch Lilith IX Trammel",
		category: "Ranged Consonance Weapon",
		blueprintSource: {
			name: "Eldritch Lilith's Trammel [Purple]",
			rarity: "Purple",
			materialsPerCopy: 3,
		},
	},
	// Eldritch Lilith X
	{
		type: "Lilith",
		name: "Edge",
		displayName: "Eldritch Lilith X Edge",
		category: "Ranged Consonance Weapon",
		blueprintSource: {
			name: "Eldritch Lilith's Edge [Purple]",
			rarity: "Purple",
			materialsPerCopy: 3,
		},
	},
	{
		type: "Lilith",
		name: "Penetration",
		displayName: "Eldritch Lilith X Penetration",
		category: "Ranged Consonance Weapon",
		blueprintSource: {
			name: "Eldritch Lilith's Penetration [Purple]",
			rarity: "Purple",
			materialsPerCopy: 3,
		},
	},
	{
		type: "Lilith",
		name: "Crusher",
		displayName: "Eldritch Lilith X Crusher",
		category: "Ranged Consonance Weapon",
		blueprintSource: {
			name: "Eldritch Lilith's Crusher [Purple]",
			rarity: "Purple",
			materialsPerCopy: 3,
		},
	},
];

export const daemonWedges = [
	...phoenixV,
	...SirenII,
	...sphinxII,
	...Jormungand,
	...anemo,
	...electro,
	...pyro,
	...hydro,
	...lumino,
	...umbro,
	...meele,
	...ranged,
	...meeleCosonance,
	...rangedCosonance,
];
