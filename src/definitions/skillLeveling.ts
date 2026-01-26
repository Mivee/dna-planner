import type { SkillLevel } from "../types/skill";
import type { SkillLevelingMaterial } from "../types/skillLeveling";

// Track 1 Example
export const skillTrack1Materials: SkillLevelingMaterial[] = [
  {
    node: 0,
    coins: { default: 0 },
    forgingMaterials: { NocturnalEcho: 0, TwilightTread: 0 },
    ascensionMaterials: { T1_Green: 0, T2_Blue: 0, T3_Purple: 0 },
  },
  {
    node: 1,
    coins: { default: 20000 },
    forgingMaterials: { NocturnalEcho: 0, TwilightTread: 0 },
    ascensionMaterials: { T1_Green: 3, T2_Blue: 0, T3_Purple: 0 },
  },
  {
    node: 2,
    coins: { default: 100000 },
    forgingMaterials: { NocturnalEcho: 1, TwilightTread: 1 },
    ascensionMaterials: { T1_Green: 3, T2_Blue: 5, T3_Purple: 0 },
  },
];

// Track 2 Example
export const skillTrack2Materials: SkillLevelingMaterial[] = [
  {
    node: 0,
    coins: { default: 0 },
    forgingMaterials: { NocturnalEcho: 0, TwilightTread: 0 },
    ascensionMaterials: { T1_Green: 0, T2_Blue: 0, T3_Purple: 0 },
  },
  {
    node: 1,
    coins: { default: 20000 },
    forgingMaterials: { NocturnalEcho: 0, TwilightTread: 0 },
    ascensionMaterials: { T1_Green: 3, T2_Blue: 0, T3_Purple: 0 },
  },
  {
    node: 2,
    coins: { default: 180000 },
    forgingMaterials: { NocturnalEcho: 2, TwilightTread: 1 },
    ascensionMaterials: { T1_Green: 3, T2_Blue: 5, T3_Purple: 0 },
  },
];

// Bonus Passives
export const skillBonusPassiveMaterials: SkillLevelingMaterial[] = [
  {
    node: 0,
    coins: { default: 0 },
    forgingMaterials: { NocturnalEcho: 0, TwilightTread: 0 },
    ascensionMaterials: { T1_Green: 0, T2_Blue: 0, T3_Purple: 0 },
  },
  {
    node: 1,
    coins: { default: 10000 },
    forgingMaterials: { NocturnalEcho: 1, TwilightTread: 0 },
    ascensionMaterials: { T1_Green: 3, T2_Blue: 0, T3_Purple: 0 },
  },
  {
    node: 2,
    coins: { default: 50000 },
    forgingMaterials: { NocturnalEcho: 2, TwilightTread: 0 },
    ascensionMaterials: { T1_Green: 3, T2_Blue: 5, T3_Purple: 0 },
  },
];



// Fill the array with the cumulative values
export const CharacterSkillLevels: SkillLevel[] = [
  {
    level: 1,
    coinsGroupA: 0,
    coinsGroupB: 0,
    lunoMomento: 0,
    nocturnalEcho: 0,
    twilightTread: 0,
    forgingMaterials: { T1Green: 0, T2Blue: 0, T3Purple: 0, T4Gold: 0 },
  },
  {
    level: 2,
    coinsGroupA: 1120,
    coinsGroupB: 1400,
    lunoMomento: 0,
    nocturnalEcho: 0,
    twilightTread: 0,
    forgingMaterials: { T1Green: 3, T2Blue: 1, T3Purple: 0, T4Gold: 0 },
  },
  {
    level: 3,
    coinsGroupA: 3200,
    coinsGroupB: 4000,
    lunoMomento: 0,
    nocturnalEcho: 0,
    twilightTread: 0,
    forgingMaterials: { T1Green: 9, T2Blue: 3, T3Purple: 0, T4Gold: 0 },
  },
  {
    level: 4,
    coinsGroupA: 5760,
    coinsGroupB: 7200,
    lunoMomento: 4,
    nocturnalEcho: 0,
    twilightTread: 0,
    forgingMaterials: { T1Green: 18, T2Blue: 6, T3Purple: 0, T4Gold: 0 },
  },
  {
    level: 5,
    coinsGroupA: 11600,
    coinsGroupB: 14500,
    lunoMomento: 10,
    nocturnalEcho: 0,
    twilightTread: 0,
    forgingMaterials: { T1Green: 33, T2Blue: 11, T3Purple: 0, T4Gold: 0 },
  },
  {
    level: 6,
    coinsGroupA: 18800,
    coinsGroupB: 23500,
    lunoMomento: 18,
    nocturnalEcho: 0,
    twilightTread: 0,
    forgingMaterials: { T1Green: 63, T2Blue: 21, T3Purple: 6, T4Gold: 0 },
  },
  {
    level: 7,
    coinsGroupA: 42800,
    coinsGroupB: 53500,
    lunoMomento: 28,
    nocturnalEcho: 1,
    twilightTread: 0,
    forgingMaterials: { T1Green: 63, T2Blue: 21, T3Purple: 14, T4Gold: 0 },
  },
  {
    level: 8,
    coinsGroupA: 80400,
    coinsGroupB: 100500,
    lunoMomento: 38,
    nocturnalEcho: 2,
    twilightTread: 0,
    forgingMaterials: { T1Green: 63, T2Blue: 21, T3Purple: 14, T4Gold: 0 },
  },
  {
    level: 9,
    coinsGroupA: 152400,
    coinsGroupB: 190500,
    lunoMomento: 38,
    nocturnalEcho: 4,
    twilightTread: 1,
    forgingMaterials: { T1Green: 63, T2Blue: 21, T3Purple: 14, T4Gold: 1 },
  },
  {
    level: 10,
    coinsGroupA: 288400,
    coinsGroupB: 360500,
    lunoMomento: 38,
    nocturnalEcho: 6,
    twilightTread: 2,
    forgingMaterials: { T1Green: 63, T2Blue: 21, T3Purple: 14, T4Gold: 3 },
  },
];
