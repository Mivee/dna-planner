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

export const daemonWedges: DaemonWedge[] = [
	// === Non-Element Specific Characters ===
	// Phoenix V
	{
		id: 1,
		type: "Phoenix V",
		name: "Nirvana",
		displayName: "Phoenix V Nirvana",
		category: "Characters",
		blueprintSource: {
			name: "Phoenix's Nirvana [Purple]",
			rarity: "Purple",
			materialsPerCopy: 5,
		},
	},
	{
		id: 2,
		type: "Phoenix V",
		name: "Blessing",
		displayName: "Phoenix V Blessing",
		category: "Characters",
		blueprintSource: {
			name: "Phoenix's Blessing [Purple]",
			rarity: "Purple",
			materialsPerCopy: 5,
		},
	},
	{
		id: 3,
		type: "Phoenix V",
		name: "Standfast",
		displayName: "Phoenix V Standfast",
		category: "Characters",
		blueprintSource: {
			name: "Phoenix's Standfast [Purple]",
			rarity: "Purple",
			materialsPerCopy: 5,
		},
	},
	// Siren II
	{
		id: 4,
		type: "Siren II",
		name: "Wings • Inspo",
		displayName: "Siren II Wings • Inspo",
		category: "Characters",
		blueprintSource: {
			name: "Phoenix's Wings [Purple]",
			rarity: "Purple",
			materialsPerCopy: 5,
		},
	},
	// Sphinx II
	{
		id: 5,
		type: "Sphinx II",
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
		id: 6,
		type: "Sphinx II",
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
		id: 7,
		type: "Sphinx II",
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
		id: 8,
		type: "Sphinx II",
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
		id: 9,
		type: "Sphinx II",
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
		id: 10,
		type: "Sphinx II",
		name: "Relentless",
		displayName: "Sphinx II Relentless",
		category: "Characters",
		blueprintSource: {
			name: "Sphinx's Relentless [Purple]",
			rarity: "Purple",
			materialsPerCopy: 5,
		},
	},
	// Jormungand (weapon-specific)
	{
		id: 11,
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
		id: 12,
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
		id: 13,
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
		id: 14,
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
		id: 15,
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
		id: 16,
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
		id: 17,
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
		id: 18,
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
		id: 19,
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
		id: 20,
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
		id: 21,
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
		id: 22,
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

	// === Anemo Characters ===
	// Griffin
	{
		id: 23,
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
		id: 24,
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
		id: 25,
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
		id: 26,
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
		id: 27,
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
		id: 28,
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
		id: 29,
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
		id: 30,
		type: "Covenanter",
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
		id: 31,
		type: "Covenanter",
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
		id: 32,
		type: "Covenanter",
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
		id: 33,
		type: "Covenanter",
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
		id: 34,
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
		id: 35,
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
		id: 36,
		type: "Kukulkan",
		name: "Resolve",
		displayName: "Kukulkan Resolve",
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
		id: 37,
		type: "Kukulkan",
		name: "Eternity",
		displayName: "Kukulkan Eternity",
		category: "Characters",
		element: "Anemo",
		blueprintSource: {
			name: "Feathered Serpent's Eternity [Purple]",
			rarity: "Purple",
			materialsPerCopy: 5,
		},
		additionalMaterials: [
			{ name: "Track-Shift Module", quantityPerCopy: 2 },
		],
	},
	// Changeling (Blue blueprints)
	{
		id: 38,
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
		id: 39,
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
		id: 40,
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
		id: 41,
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

	// === Melee Weapons ===
	// Cerberus V
	{
		id: 100,
		type: "Cerberus V",
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
		id: 101,
		type: "Cerberus V",
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
		id: 102,
		type: "Cerberus V",
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
		id: 103,
		type: "Cerberus VI",
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
		id: 104,
		type: "Cerberus VI",
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
		id: 105,
		type: "Cerberus VIII",
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
		id: 106,
		type: "Cerberus VIII",
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
		id: 107,
		type: "Cerberus VIII",
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

	// === Ranged Weapons ===
	// Lilith VII
	{
		id: 200,
		type: "Lilith VII",
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
		id: 201,
		type: "Lilith VII",
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
		id: 202,
		type: "Lilith VII",
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
		id: 203,
		type: "Lilith VIII",
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
		id: 204,
		type: "Lilith VIII",
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
		id: 205,
		type: "Lilith IX",
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
		id: 206,
		type: "Lilith IX",
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
		id: 207,
		type: "Lilith IX",
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

	// === Melee Consonance Weapons ===
	// Eldritch Cerberus VIII
	{
		id: 300,
		type: "Eldritch Cerberus VIII",
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
		id: 301,
		type: "Eldritch Cerberus VIII",
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
		id: 302,
		type: "Eldritch Cerberus VIII",
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
		id: 303,
		type: "Eldritch Cerberus VIII",
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
		id: 304,
		type: "Eldritch Cerberus IX",
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
		id: 305,
		type: "Eldritch Cerberus IX",
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
		id: 306,
		type: "Eldritch Cerberus X",
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
		id: 307,
		type: "Eldritch Cerberus X",
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
		id: 308,
		type: "Eldritch Cerberus X",
		name: "Crusher",
		displayName: "Eldritch Cerberus X Crusher",
		category: "Melee Consonance Weapon",
		blueprintSource: {
			name: "Eldritch Cerberus's Crusher [Purple]",
			rarity: "Purple",
			materialsPerCopy: 3,
		},
	},

	// === Ranged Consonance Weapons ===
	// Eldritch Lilith VIII
	{
		id: 400,
		type: "Eldritch Lilith VIII",
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
		id: 401,
		type: "Eldritch Lilith VIII",
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
		id: 402,
		type: "Eldritch Lilith VIII",
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
		id: 403,
		type: "Eldritch Lilith VIII",
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
		id: 404,
		type: "Eldritch Lilith IX",
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
		id: 405,
		type: "Eldritch Lilith IX",
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
		id: 406,
		type: "Eldritch Lilith X",
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
		id: 407,
		type: "Eldritch Lilith X",
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
		id: 408,
		type: "Eldritch Lilith X",
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

// Note: This is a representative subset. Full implementation would include all element variations
// for Griffin, Typhon, Covenanter and element-specific bosses (Summanus, Ifrit, Bahamut, Helios, Arbiter)
